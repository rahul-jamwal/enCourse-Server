import express, { Router } from "express"
import { buySubscription, cancelSubscription, getRazorpayKey } from "../controllers/paymentController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//Buy subscription
router.route("/subscribe").get(isAuthenticated, buySubscription)

//verify payment
router.route("/paymentverification").post(isAuthenticated, buySubscription) 

//Verify payment and save reference in database
router.route("/razorpaykey").get(getRazorpayKey)

//Cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription)


export default router; 