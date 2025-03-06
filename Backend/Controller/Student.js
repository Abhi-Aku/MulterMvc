const Student = require("../Models/Student");

module.exports.StudentPost = async (req, res) => {
    const { name } = req.body;
    const image = req.file ? `http://localhost:4000/uploads/${req.file.filename}` : null;

    try {
        const student = await Student.create({ name, image });
        res.status(201).json({ message: "Student created successfully", student });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Student not created", error: err.message });
    }
};

// Get all students
module.exports.StudentGet = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ message: "Students fetched successfully", students });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Students not fetched", error: err.message });
    }
};
