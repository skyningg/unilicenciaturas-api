const licenciaturas = require('../models/licenciaturas');

exports.createDegree = async (req, res) => {
  try {
    const degree = new licenciaturas(req.body);
    const savedDegree = await degree.save();
    res.status(201).json(savedDegree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDegrees = async (req, res) => {
  try {
    const degrees = await licenciaturas.find();
    res.status(200).json(degrees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDegreeById = async (req, res) => {
  try {
    const degree = await licenciaturas.findById(req.params.id);
    if (!degree) {
      return res.status(404).json({ error: "Degree not found" });
    }
    res.status(200).json(degree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDegree = async (req, res) => {
  try {
    const degree = await licenciaturas.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!degree) {
      return res.status(404).json({ error: "Degree not found" });
    }
    res.status(200).json(degree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDegree = async (req, res) => {
  try {
    const degree = await licenciaturas.findByIdAndDelete(req.params.id);
    if (!degree) {
      return res.status(404).json({ error: "Degree not found" });
    }
    res.status(200).json({ message: "Degree deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
