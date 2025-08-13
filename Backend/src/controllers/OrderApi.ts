import { Request, Response, NextFunction } from "express";
import Razorpay from "razorpay";

interface OrderRequestBody {
  amount: number;
  currency: string;
  receipt?: string;
  notes?: {
    [key: string]: string;
  };
}

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY || "",
  key_secret: process.env.RAZORPAY_API_SECRET || "",
});

export const orderApi = async (
  req: Request<{}, {}, OrderRequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!process.env.RAZORPAY_API_KEY || !process.env.RAZORPAY_API_SECRET) {
      throw new Error("Razorpay API keys are not configured");
    }

    const { amount, currency, receipt, notes } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid amount. Amount must be greater than 0",
      });
    }

    if (!currency) {
      return res.status(400).json({
        success: false,
        message: "Currency is required",
      });
    }

    const orderOptions = {
      amount,
      currency,
    };

    // Create Razorpay order
    const order = await razorpay.orders.create(orderOptions);

    if (!order) {
      return res.status(500).json({
        success: false,
        message: "Failed to create order",
      });
    }

    res.status(200).json({ order });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);

    res.status(500).json({
      success: false,
      message: "Failed to process order",
      error: error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
};
