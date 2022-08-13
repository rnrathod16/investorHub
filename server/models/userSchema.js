const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.pre('save', async function(next) {
    try {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 10);
        }

        next();
    } catch (error) {
        console.log(error);
    }
})

userSchema.methods.generateAuthToken = async function() {
    try {
        const generateToken = await jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: generateToken });

        await this.save();
        return generateToken;

    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;