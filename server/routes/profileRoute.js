import express  from "express";
import { profile_post, handleProfileCount, userProfile } from "../controllers/profileController.js";

export const profileRouter = express.Router();

profileRouter.post('/upload-profile', profile_post);
profileRouter.get('/get-user-profile', userProfile);
profileRouter.get('/profile-count', handleProfileCount);