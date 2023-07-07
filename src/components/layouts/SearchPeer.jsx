import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Notiflix from "notiflix";
import { useState } from "react";
import useSWR from "swr";

const fetcher = async () => {
	const data = await axios.get("/api/v1/products/lists");
	return data;
};

const SearchPeer = () => {
	const { error, data } = useSWR("/api/v1/products/lists", fetcher);
	const [search, setSearch] = useState("");
	if (error) return Notiflix.Notify.failure("There is no data to get in search box");

	return (
		<div className='mx-auto container w-full md:w-4/5 xl:w-3/5 2xl:w-1/2 h-auto'>
			<div className='mt-4 px-4 pb-2 w-full h-8x fcc border-b-2 group-hover:border-b-primary'>
				<button className='mr-4'>
					<MagnifyingGlassIcon
						onClick={async () => {
							if (search.length == 0) {
								return Notiflix.Notify.failure("please inter text in  search box");
							} else {
								try {
									await axios.post("/api/v1/products/lists", { data: search });
								} catch (err) {
									return Notiflix.Notify.failure("(-_-)/");
								}
							}
						}}
						className='Icon-Size text-gray-600'
					/>
				</button>
				<input
					type='text'
					name='sreach'
					id='sreach-box'
					className='w-full h-full group Body-LG'
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<p className='mt-6 mb-1'>Popular Products </p>
			{search.length == 0 ? (
				<div className='w-full h-full grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-4'>
					{data?.data?.datas?.slice(0, 4).map(({ imageLink, title, _id }) => (
						<Link key={_id} href={`/women-make-up/${_id}`} className='border-2 w-full h-72'>
							<Image
								src={`/../public/images/products/${imageLink}`}
								alt={title}
								quality={100}
								width={100}
								height={100}
								className='w-full h-3/4'
							/>
							<p className='p-2 text-primary w-full Body-MD lg:text-sm h-1/4'>{title}</p>
						</Link>
					))}
				</div>
			) : (
				<div>data searching</div>
			)}
		</div>
	);
};
export default SearchPeer;
