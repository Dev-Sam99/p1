import {Router} from "express";
import { getAllUsers,newUser, updateUser, deleteUser } from "../controllers/user.controller.js";
const router = Router();

router.route('/getAll').get(getAllUsers);
router.route('/newUser').post(newUser);
router.route('/:id').patch(updateUser);
router.route('/:id').delete(deleteUser);



export default router;