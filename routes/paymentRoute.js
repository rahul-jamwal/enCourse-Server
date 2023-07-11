import express, { Router } from "express"
import { buySubscription, cancelSubscription, getRazorpayKey, paymentVerification } from "../controllers/paymentController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//Buy subscription
router.route("/subscribe").get(isAuthenticated, buySubscription)

//verify payment
router.route("/paymentverification").post(paymentVerification) 

//Verify payment and save reference in dat  abase
router.route("/razorpaykey").get(getRazorpayKey)

//Cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription)


export default router; 