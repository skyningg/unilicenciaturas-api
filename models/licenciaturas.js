const mongoose = require('mongoose');

const degreeSchema = new mongoose.Schema({
        name: { type: String, required: true },
        modalidad: {type: String, required: true },
        areaconocimiento: { type: String, required: true },
	duracionmax: {type: Number, required: true },
	duracionmin: {type: Number, required: true },
	duraciones: {type: Number, required: true },
	costoins: {type: Number, required: true },
	costosem: {type: Number, required: true},
        universidad: {type: String, required: true}
});

module.exports = mongoose.model('licenciaturas', degreeSchema);
