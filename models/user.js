const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const UserSchema = new Schema ({
        username:{type: String, require: true},
        email:{type: String, required: true},
        password:{type: String, required: true}
});

var User = mongoose.model('User', UserSchema);

module.exports = User;