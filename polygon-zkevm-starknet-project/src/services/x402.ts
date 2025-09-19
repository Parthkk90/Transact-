import express, { Router } from "express";
import { paymentMiddleware } from "x402";

// Create Express router
export const x402Router = Router();

// Configure your receiver address
const RECEIVER_ADDRESS = "0xYourPolygonAddress"; // Replace with your actual address

// Define routes with payment requirements
const paymentRoutes = {
  "/": "$0.01",      // Base endpoint requires $0.01 USD
  "/premium": "$0.10", // Premium endpoint requires $0.10 USD
};

// Apply X402 payment middleware to this router
x402Router.use(paymentMiddleware(RECEIVER_ADDRESS, paymentRoutes));

// Define route handlers
x402Router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Payment processed successfully!",
    timestamp: new Date().toISOString()
  });
});

x402Router.get("/premium", (req, res) => {
  res.json({
    success: true,
    message: "Premium payment processed successfully!",
    timestamp: new Date().toISOString()
  });
});