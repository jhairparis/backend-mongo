import { Router } from "express";
import {
  addClient,
  getAllClients,
  getClientById,
  deleteClient,
  updateClient,
} from "../controllers/clientController.js";

const router = Router();

router.post("/", addClient);
router.get("/", getAllClients);
router.get("/:id", getClientById);
router.delete("/:id", deleteClient);
router.put("/:id", updateClient);

export default router;

// Made by Jhair Paris (jhairparis.com)
