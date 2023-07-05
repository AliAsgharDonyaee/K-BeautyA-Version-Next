import category from "@/server/models/category";
import DbConnect from "@/server/utils/DbConnect";

DbConnect();

export default async function handler(req, res) {
	const { method } = req;
	if (method === "GET") {
		const datas = await getDatasCategory();
		return res.status(200).json({ datas });
	}
}

export async function getDatasCategory() {
	const datas = category.find({});
	return datas;
}
