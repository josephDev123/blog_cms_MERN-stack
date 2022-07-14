import express  from "express";
import { profile_post } from "../controllers/profileController.js";

export const profileRouter = express.Router();

profileRouter.get('/edit-profile', profile_post);