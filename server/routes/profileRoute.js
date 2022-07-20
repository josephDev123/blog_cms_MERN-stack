import express  from "express";
import { profile_post, handleProfileCount } from "../controllers/profileController.js";

export const profileRouter = express.Router();

profileRouter.post('/upload-profile', profile_post);
profileRouter.get('/profile-count', handleProfileCount);