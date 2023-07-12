import express from "express"
import { logout, login, register, getMyProfile, changePassword, updateProfile, updateProfilePicture, forgotPassword, resetPassword, addToPlaylist, removeFromPlaylist, getAllUsers, updateUserRole, deleteUser, deleteMyProfile } from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload  from '../middlewares/multer.js'
const router = express.Router();

//To register a new user
router.route("/register").post(singleUpload, register)

//Login
router.route("/login").post(login)
//logout
router.route("/logout").get(logout)
//Get my profile
router.route("/me").get(isAuthenticated, getMyProfile).delete(isAuthenticated, deleteMyProfile)

//Change Password
router.route("/changepassword").put(isAuthenticated, changePassword)
//Update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile)
//Update profile picture
router.route("/updateprofilepicture").put(isAuthenticated, singleUpload, updateProfilePicture)
//forget Password
router.route("/forgotpassword").post(forgotPassword)
//Reset password
router.route("/resetpassword/:token").put(resetPassword)

//Add to playlist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist)
// Remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist)


//Admin routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers)
router.route("/admin/user/:id").put(isAuthenticated, authorizeAdmin, updateUserRole).delete(isAuthenticated, authorizeAdmin, deleteUser)

export default router;