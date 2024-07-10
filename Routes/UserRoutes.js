import express from 'express';
import {login,register,getUserbyId,uploadImage} from '../controllers/UserControllers.js';
import { upload } from '../uploadConfig.js';
const router = express.Router();



// POST /users/signup - Sign up a new user
router.post('/signup',register);

// POST /users/login - Log in a user
router.post('/login',login);

// GET /users/id - get user by id
router.get('/:id',getUserbyId);

// POST /users/upload - upload image data
 router.post('/upload/:id',upload.single('file'),uploadImage); 
export default router;