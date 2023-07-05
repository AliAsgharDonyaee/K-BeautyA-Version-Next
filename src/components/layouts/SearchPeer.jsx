import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SearchPeer = () => {
	const [search, setSearch] = useState("");
	return (
		<div className='mx-auto container w-full h-full'>
			<div className='mt-4 px-4 pb-2 w-full h-8x fcc border-b-2 group-hover:border-b-primary'>
				<button className='mr-4'>
					<MagnifyingGlassIcon className='Icon-Size text-gray-600' />
				</button>
				<input
					type='text'
					name='sreach'
					id='sreach-box'
					className='w-full h-full group Body-LG'
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			{search.length == 0 ? (
				<div className='w-full h-full bg-red-500 grid grid-cols-2 grid-rows-none'>

				</div>
			) : (
				<div>data</div>
			)}
		</div>
	);
};
export default SearchPeer;
