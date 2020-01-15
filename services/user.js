const express = require('express');
const User = require('../models/user');

const registerUser = async (req, res, next) => 
{
    try 
    {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } 
    catch (error) 
    {
        res.status(400).send(error);
    }
}

const login = async(req, res,next) => 
{
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) 
        {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = {
    registerUser: registerUser,
    login: login
}