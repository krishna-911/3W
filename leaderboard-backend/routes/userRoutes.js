import { Router } from "express";
import { seedUsers, getUsers, claimPoints } from "../controllers/userController.js";
const router = Router();

router.post("/seed", seedUsers);
router.get("/users", getUsers);
router.post("/claim", claimPoints);

export default router;
