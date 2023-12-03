import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
	id: {
		type: Number,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	trending: {
		type: Boolean,
		required: true,
	},
	continue: {
		type: Boolean,
		required: true,
	},
	rating: {
		type: Number,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	viewHours: {
		type: String,
		required: true
	},
	dateCreate: {
		type: String,
		required: true
	},
})

export default mongoose.model('Movies', MovieSchema)