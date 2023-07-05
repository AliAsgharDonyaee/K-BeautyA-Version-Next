import blog from "@/server/models/blogs";
import DbConnect from "@/server/utils/DbConnect";

DbConnect();

export default async function handler(req, res) {
	const { method } = req;
	if (method === "GET") {
		const datas = await getDatasBlog();
		return res.status(200).json({ datas });
	}
}

export async function getDatasBlog() {
	const datas = blog.find({});
	return datas;
}
