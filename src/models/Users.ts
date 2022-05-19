import {Schema,model,models} from "mongoose";
import bcript from "bcryptjs"

const UserSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    
},{
    timestamps:true
})
UserSchema.methods.bcryptPassword=async (password:string)=>{
    const salt = await bcript.genSalt(10)
    return bcript.hash(password,salt)
}
UserSchema.methods.validatePassword=function (password:string) {
    return bcript.compare(password,this.password)
}
UserSchema.set("toJSON",{
    transform:(document,returnedObjet) => {
        returnedObjet.id = returnedObjet._id
        delete returnedObjet._id
    }
})


export default models.Users || model('Users',UserSchema)
