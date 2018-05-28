Create your Schema here for interacting with mongoDB. Mongoose using Schemas like objects for defining inbound properties.
An example is given below.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema ({
    emailAddress: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

mongoose.model('users', UsersSchema);