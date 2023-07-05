import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const BlogSchema = new mongoose.Schema(
	{
		title: { type: String, required: false },
		description: { type: String, required: false },
		author: {
			name: {
				type: String,
				unique: false,
				required: false,
			},
			email: {
				type: String,
				unique: false,
				required: false,
			},
		},
		category: { type: ObjectId, required: false,},
		imageLink: { type: String, required: true },
		writeData: { type: Date, required: false, unique: false },
	},
	{ timestamp: true },
);

export default mongoose.models?.blog || mongoose.model("blog", BlogSchema);
