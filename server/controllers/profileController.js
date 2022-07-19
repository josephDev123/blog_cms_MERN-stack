import { profileModel } from "../models/Profile.js";

export const profile_post =  (req, res)=>{
        
}

export const hanldeProfileCount =(req, res)=>{
        profileModel.countDocuments({}, (error, count)=>{
                if(error) {
                 console.log(error);
                 res.sendStatus(404)
                }else{
                 res.json({'count':count + 1});
                }
          
        })
}