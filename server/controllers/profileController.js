import { profileModel } from "../models/Profile.js";


// handle profile posting
export const profile_post =  (req, res)=>{
        const { isAuthUser, names,title,about,phone,surname} = req.body;

      const uploadedProfile= new profileModel({
            postedBy:isAuthUser,
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

//handle the number doc is in the profile collection
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

// handle fetching all the profile

export const userProfile = (req, res)=>{
        const query = req.params;
        res.json({query});
        console.log(query);
}