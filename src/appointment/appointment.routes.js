import { Router } from "express";
import { saveAppointment, listUser, updateAppointment} from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get( "/listaUsuario/:uid", listUser);
router.patch("/updateAppointment/:uid", updateAppointment)

export default router;