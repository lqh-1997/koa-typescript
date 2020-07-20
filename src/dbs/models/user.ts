import * as mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
    user_login: String,
    user_pass: String,
    user_nicename: String,
    user_email: String,
    user_url: String,
    user_registered: Date,
    user_status: Boolean,
    user_last_login: Date
});

export default mongoose.model('User', userSchema);
