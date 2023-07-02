import { MainNavLinks } from "data/navLinks";
import Link from "next/link";
import { useRouter } from "next/router";
import PeerNavigation from "./PeerNavigation";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
	const router = useRouter();
	const [item, setItem] = useState(false);
	return (
		<ul className='w-full h-full fcc gap-x-2 list-none'>
			<Link
				onClick={() => setItem(!item)}
				href='/'
				className={`hover:text-primary-600 ${
					router.asPath === "/women-skincare" ? "text-primary-600" : "text-grays-900"
				}`}
			>
				<h6 className='fbc 2xl:text-xl'>
					Women Skincare
					<ChevronDownIcon
						className={`ml-1 w-4 h-4 transition transform duration-300 ${item && "rotate-180"}`}
					/>
				</h6>
			</Link>
			{item && (
				<div className='bg-white shadow-lg px-3 xl:p-0 transition transform fixed top-16 2xl:top-[104px] left-0 w-full h-19x z-20'>
					<PeerNavigation />
				</div>
			)}
			{MainNavLinks.map(({ title, link },index) => (
				<li key={index} className='mx-2 2xl:mx-4'>
					<Link
						href={link}
						className={`hover:text-primary-600 my-4 ${
							router.asPath === link ? "text-primary-600" : "text-grays-900"
						}`}
					>
						<h6 className='2xl:text-xl'>{title}</h6>
					</Link>
				</li>
			))}
		</ul>
	);
};
export default Navigation;
