import products from "@/server/models/products";
import DbConnect from "@/server/utils/DbConnect";

DbConnect();

export let d = { data: null };

export default async function handler(req, res) {
	const { method, body } = req;
	// if (method === "POST") {
	// 	const data = await getDatasFromSearch(body);
	// 	d.data = data;
	// 	return res.status(201).json({ data });
	// } else
	if (method === "GET") {
		const datas = await getDatasProduct();
		return res.status(200).json({ datas });
	}
}

export async function getDatasProduct() {
	const datas = products.find({});
	return datas;
}

export async function getDatasFromSearch(body) {
	const getBody = body?.data;
	const data = await products.find({ title: { $in: `${getBody}` } });
	return data;
}

export async function getOneData(id) {
	const data = await products.find({ _id: { $in: id } });
	return data;
}
