const User = require('../models/user');

// Register User
const registerData = async (req, res) => {
    try {
        const { username, phoneNumber, email, password } = req.body;

        const newUser = new User({ username, phoneNumber, email, password });
        const result = await newUser.save();
        res.status(201).send({ message: 'User registered successfully.', result });
        
    } catch (error) {
        res.status(500).send('Server Error');

    }
}

//login user

const loginData = async (req, res) => {

    try{
        const data = req.body;

        const userEmail = await User.findOne({email : data.email});
        console.log(userEmail);
        if(!userEmail) {
             res.status(404).json({ message: 'User not found' });
        } 
            
        const Password = await User.findOne({password : data.password});
            if(!Password) {
                res.status(401).json({ message: 'Invalid credentials' });
            } 
            res.status(200).json({ message: 'Login successful' });
        }
    catch (error) {
        res.status(500).send('Server Error');
    }
}

module.exports ={registerData, loginData }

