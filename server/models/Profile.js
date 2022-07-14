import mongoose from "mongoose";
// import { Schema } from "mongoose";

const profileSchema = new mongoose.Schema({
    profile_img:{
        type:String,
        required:false
    },
    name:{
        type:String,
        required:true,
        minlength:30,
    },
    title:{
        type:String,
        required:true,
        minlength:30,

    },

    about:{
        type:String,
        required:true,
        minlength:100,
    },

    phone:{
        type:Number,
        required:true,
    },

    surname:{
        type:String,
        required:true,
    }


})

export const profileModel = mongoose.model('profile', profileSchema);
