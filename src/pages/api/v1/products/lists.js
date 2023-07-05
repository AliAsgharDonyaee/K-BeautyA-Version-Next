import products from "@/server/models/products";
import DbConnect from "@/server/utils/DbConnect";

DbConnect()

export default async function handler(req, res) {
	const { method } = req;
	if (method === "GET") {
		const datas = await getDatasProduct();
		return res.status(200).json({ datas });
	}
}

export async function getDatasProduct() {
	const datas = products.find({});
	return datas;
}
