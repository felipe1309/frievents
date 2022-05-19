import { Schema, model, models } from "mongoose";
const EventsSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    descripcion:{
        type:String,
        trim:true,
        required:true
    },
    admins:{
        type:Array,
        required:true,
        default:[],
    },
    members:{
        type:Array,
        required:true,
        default:[]
    },
    timeInit:{
        type:Date,
        required:true,
        trim:true
    }
},{
    timestamps:true,
})
EventsSchema.set('toJSON',{
    transform:(documet,returnedDocumet) =>{
        returnedDocumet.id = returnedDocumet._id
        delete returnedDocumet._id
    }
})
export default models.Events || model("Events",EventsSchema)