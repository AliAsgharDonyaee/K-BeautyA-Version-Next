import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const bestSellerProductsSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		category: { type: ObjectId, ref: "Category", required: true },
		imageLink: { type: String, required: true },
		price: { type: Number, required: true },
		offPrice: { type: Number, required: true },
		discount: { type: Number, default: 0 },
		brand: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

export default mongoose?.models?.list || mongoose.model("list", bestSellerProductsSchema);

// cleansers,exfoliators,toners,retinols,peels and masques,moisturiser,night cream,facial oil,sunscreen,,eye care
