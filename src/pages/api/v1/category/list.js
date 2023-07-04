import { CategoryLandingDatas } from "@/data/datas";

export default function handler(req, res) {
	res.status(200).json({ data: CategoryLandingDatas });
}
