import { User } from '../models/User.model.js';

const handleErrors = (err) => {
    let errors = { email: "", password: "" };

    // duplicate email error
    if (err.code === 11000) {
        errors.email = "that email is already registered";
        return errors;
    }

    // validation errors
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }

    return errors;
}

export function signup_get(req, res) {
    res.render('signup');
}

export function login_get(req, res) {
    res.render('login');
}

export function login_post(req, res) {
    res.send('login post');
}

export async function signup_post(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }
}

export function logout_post(req, res) {
    res.render('Current user logged out');
}