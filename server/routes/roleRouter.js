import express from 'express';

export const roleRouter = express.Router();

roleRouter.get('/', (req, res)=>{
    res.json('roles ')
})
