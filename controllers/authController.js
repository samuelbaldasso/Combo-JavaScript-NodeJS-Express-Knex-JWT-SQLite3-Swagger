const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require('knex')(require('../knexfile').development);

exports.register = async (req, res) => {
    const { username, password, email, role } = req.body;

    if (!['admin', 'user'].includes(role)) {
        return res.status(400).json({ message: "Role must be 'admin' or 'user'" });
    }

    const existingUsers = await knex('users').where({ email }).select();
    if (existingUsers.length > 0) {
        return res.status(409).json({ message: "Email already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await knex('users').insert({
            username,
            password: hashedPassword,
            email,
            role
        });

        res.status(201).json({ id: user[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Could not register user" });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const users = await knex('users').where({ email }).select();
        if (users.length === 0) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const user = users[0];
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            console.log(token);
            res.json({ token });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: "Could not log in" });
    }
};