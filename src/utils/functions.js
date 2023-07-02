import axios from "axios";
import { useEffect, useState } from "react";

export function getLocation() {
	const [data, setData] = useState({
		cou: "",
		lan: "",
	});
	useEffect(() => {
		axios
			.get("https://api.ipregistry.co/?key=z7uzqkwb7p5jjf69")
			.then((res) => {
				setData({ cou: res.data.location.country.code, lan: res.data.location.language.code.toUpperCase() });
				return data;
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [data]);
	return data;
}
