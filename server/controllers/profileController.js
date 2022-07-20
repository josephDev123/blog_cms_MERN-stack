import { profileModel } from "../models/Profile.js";

export const profile_post =  (req, res)=>{
        const { names,title,about,phone,surname} = req.body;

      const uploadedProfile= new profileModel({
            name:names,
            title:title,
            about:about,
            phone:phone,
            surname:surname
        })
        // save document
        uploadedProfile.save((error)=>{
                if(error){
                  res.json({'error':true})
                } else{
                  res.json({'success':true})
                }
        })
        
}

//handle the number doc is in the collection
export const handleProfileCount =(req, res)=>{
        profileModel.countDocuments({}, (error, count)=>{
                if(error) {
                 console.log(error);
                res.json({'error':true})
                }else{
                 res.json({'count':count});
                }
          
        })
}