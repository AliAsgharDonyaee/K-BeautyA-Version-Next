import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const ProductsSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	details: { type: String, required: true },
	HowToApply: { type: String, required: true },
	Ingredient: { type: String, required: true },
	whatMakesItAdvance: { type: String, required: true },
	productCode: { type: Number, required: true },
	category: { type: ObjectId, ref: "Category", required: true },
	imageLink: { type: String, required: true },
	price: { type: Number, required: true },
	offPrice: { type: Number, required: true },
	discount: { type: Number, default: 0 },
	brand: { type: String, required: true },
});

export default mongoose.models?.product || mongoose.model("product", ProductsSchema);