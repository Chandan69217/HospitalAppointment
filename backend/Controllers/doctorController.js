const doctorModel = require('../Models/doctor');    
const bcrypt = require('bcrypt');

// Create a new doctor
const createDoctor = async (req, res) => {
    try {
    
        const hashedPassword = await bcrypt.hash(req.body.Password, 10);
        const doctor = new doctorModel({
            name: req.body.Name,
            specialization: req.body.Specialization,
            contact: req.body.Contact,
            email: req.body.Email,
            experience: req.body.Experience,
            degrees: req.body.Degrees,
            image: req.body.Image,
            description: req.body.Description,
            password: hashedPassword,
        });
        await doctor.save();
        res.status(201).send(doctor);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


// Get Doctor Categories by Specialization

const getDoctorBySpecialization = async (req, res) => {
    try {
        const specialization = req.params.specialization?.toLowerCase();

        if (!specialization) {
            return res.status(400).json({ message: "Specialization is required" });
        }

        const doctors = await doctorModel.find({
            specialization: { $regex: `^${specialization}$`, $options: "i" }
        }).select("-password -workingHours -appointments -__v");

        if (doctors.length === 0) {
            return res.status(404).json({ message: "No doctors found" });
        }

        res.status(200).json(doctors);

    } catch (error) {
        console.error("Error fetching doctors:", error);
        res.status(500).json({ error: error.message });
    }
};


const getAllSpecializedDoctors = async (req,res) => {
    try {
        // Step 1: fetch all doctors
        const doctors = await doctorModel.find().select("-password -workingHours -appointments -__v");;

        // Step 2: group them by specialization
        const categorized = {};

        doctors.forEach(doc => {
            if (!categorized[doc.specialization]) {
                categorized[doc.specialization] = [];
            }
            categorized[doc.specialization].push(doc);
        });

        res.status(200).json({
            status: "success",
            totalSpecializations: Object.keys(categorized).length,
            data: categorized,
        });

    } catch (error) {
        console.error("Error fetching categorized doctors:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


//Get doctor by id
const getDoctorById = async (req, res) => {
    try {
        const doctor = await doctorModel
            .findById(req.params.id)
            .select("-password -appointments -__v");

        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        res.status(200).json(doctor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Get all doctors
const getAllDoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find().select("-password  -appointments -__v");
        res.status(200).send(doctors);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Update a doctor
const updateDoctor = async (req, res) => {
    try {
        const doctor = await doctorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(doctor);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

// Delete a doctor
const deleteDoctor = async (req, res) => {
    try {
        await doctorModel.findByIdAndDelete(req.params.id);
        res.status(200).send('Doctor deleted successfully');
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    createDoctor,
    getDoctorById,
    getAllDoctors,
    updateDoctor,
    deleteDoctor,
    getDoctorBySpecialization,
    getAllSpecializedDoctors
};
