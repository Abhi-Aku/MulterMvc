const Student = require("../Models/Student"); // Use 'Student' instead of 'StudentController'

module.exports.StudentPost = async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        const student = await Student .create({ name, email, password }); // Corrected syntax
        res.status(201).json({ message: "Student created successfully", student });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Student not created", error: err.message });
    }
};
