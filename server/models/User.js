const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema ({
    firstName: {
        type: String,
        required: [true, 'Please add a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please add a last name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        validate: (email) => {
            return validator.isEmail(email);
        }
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        validate: (password) => {
            return validator.isStrongPassword(password);
        }

    },
    address: {
        type: String,
        maxlength: 150
    },
    age: {
        type: Number,
        maxlength: 3
    },
    role: {
        type: String,
        enum: ["admin","user"],
        default: "user"
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    }
}, {
    timestamps: true
})

UserSchema.pre("save", async function (next) {
    const user = this;
  
    // Hash the password if it has been modified
    if (user.isModified("password")) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  
    next();
  });

// generate our jwt token when user logs in or create new account!
UserSchema.methods.getSignedJwtToken = function() { //_id is ID in mongoDB
    return jwt.sign({ id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

// method to match password for login
UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// method for reseting passwordToken
UserSchema.methods.getResetPasswordToken = function () {
    // create hex token with the size of 20
    const resetToken = crypto.randomBytes(20).toString('hex')
    
    // create hash to increase security for the rest token and tell it that it came from hexd format
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000 // set expiration on reset password for 1 hour 

    return resetToken;

}


module.exports = mongoose.model('User', UserSchema);