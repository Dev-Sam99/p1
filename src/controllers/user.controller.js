import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import  {User}  from "../models/user.model.js";
const getAllUsers = asyncHandler (async(req,res)=>{
    const user = await User.find();
    if(!user) {
        throw new ApiError(404, "No user found");
    }
    return res.status(201).json(
        new ApiResponse(200, createdUser, "Users fetched successfully")
    )
    })
    const newUser = asyncHandler (async(req,res)=>{
        const {name,email,password} = req.body;
        const user = new User({name,email,password});
        const userResponse = await user.save();

        if(!user) {
            throw new ApiError(404, "No user found");
        }
        return res.status(201).json(
            new ApiResponse(201, userResponse, "Users created successfully")
        )
        })
    //update params findByIdAndUpdate $set : new value
    //delete params findByIdAndDelete _id

    const updateUser = asyncHandler(async (req,res)=>{
        const id = req.params.id;
        const {email} = req.body;
        const user = await User.findByIdAndUpdate(id,{
            $set : {email:email}
        },{new: true});
        if(!user) {
            throw new ApiError(404, "No user found");
        }
        return res.status(201).json(
            new ApiResponse(201, user, "User updated successfully")
        )
    })

    const deleteUser = asyncHandler(async (req,res)=>{
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        if(!user) {
            throw new ApiError(404, "No user found");
        }
        return res.status(201).json(
            new ApiResponse(201, user, "User deleted successfully")
        )
    })

 export {
    getAllUsers,
    newUser,
    updateUser,
    deleteUser
 }