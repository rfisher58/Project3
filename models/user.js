const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const UserSchema = new Schema ({

    login: {
        username:{type: string, require: true},
        email:{type: string, required: true},
        password:{type: string, required: true}
    }

});

var User = mongoose.model('User', UserSchema);

module.exports = User;