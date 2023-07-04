import list from "@/server/models/best_seller_products/list";
import DbConnect from "@/server/utils/DbConnect";

DbConnect();

export default function handler(req, res) {
	const { method } = req;
	if (method === "GET") {
		const datas = getData();
		res.status(200).json({ datas });
	}
}

export const getData = () => {
	const data = list.find({});
	return data;
};
