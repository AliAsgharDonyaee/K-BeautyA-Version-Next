import mongoose from "mongoose";

const DatasSchema = new mongoose.Schema({
	title: {
		type: String,
		unique: false,
	},
	link: {
		type: String,
		unique: false,
	},
	imageLink: {
		type: String,
		unique: false,
	},
});

export default mongoose.models?.category || mongoose.model("category", DatasSchema);
