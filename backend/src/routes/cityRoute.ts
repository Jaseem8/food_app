// routes/CityRoute.ts
import express, { Request, Response } from "express";
import Restaurant from "../models/restaurant"; // Assuming you have a Restaurant model

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const cities = await Restaurant.distinct("city"); // Fetch distinct city names from the Restaurant collection
    res.json(cities);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
