const express = require('express');
const router = express.Router();
const doctorController = require('../Controllers/doctorController');

router.post('/doctor', doctorController.createDoctor);
router.get('/doctor/:id', doctorController.getDoctorById);
router.get('/doctor', doctorController.getAllDoctors);
router.put('/doctor/:id', doctorController.updateDoctor);
router.delete('/doctor/:id', doctorController.deleteDoctor);
router.get('/doctor/categories/:specialization/',doctorController.getDoctorBySpecialization)
router.get('/doctor/categories-all/specialization/',doctorController.getAllSpecializedDoctors)

module.exports = router;
