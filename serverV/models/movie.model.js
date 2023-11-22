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
})

export default mongoose.model('Twits', MovieSchema)