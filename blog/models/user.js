import { Schema,model, models } from "mongoose";

const userSchema = new Schema({
    email:{
        type:String,
        unique:[true, 'Email already exists !'],
        required:[true, 'Email is required !'],
    },
    username:{
        type:String,
        required:[true,'Username is Required !']
    },
    image:{
        type:String
    }
})
const UserModel =  models.User || model("User",userSchema)
export default UserModel