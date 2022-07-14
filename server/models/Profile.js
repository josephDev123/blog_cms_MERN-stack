import mongoose from "mongoose";
// import { Schema } from "mongoose";

const profileSchema = new mongoose.Schema({
    profile_img:{
        type:String,
        required:false
    },
    name:{
        type:String,
        required:false,
        minlength:30
    },
    title:{
        type:String,
        required:false,
        minlength:30
    },

    about:{
        type:String,
        required:false,
        minlength:100
    },

    phone:{
        type:Number,
        required:false
    },

    surname:{
        type:String,
        required:false
    }


})

export const profileModel = mongoose.model('profile', profileSchema);
