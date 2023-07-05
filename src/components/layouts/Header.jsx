import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "public/images/logo/beautya_logo.png";
import { useEffect, useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import PhoneNavigation from "./PhoneNavigation";
import Link from "next/link";
import Navigation from "./Navigation";
import axios from "axios";
import SearchPeer from "./SearchPeer";

const Header = () => {
	const [menu, setMenu] = useState(false);
	const [item, setItem] = useState(false);
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
				console.log("error ipregistry =>", err.message);
			});
	}, [data]);
	return (
		<header className='border-b-2 bg-gradient-to-r from-white lg:from-primary-50 via-primary-50 lg:via-white to-white lg:to-white w-screen h-11x 2xl:h-16x fixed top-0 left-0 z-20'>
			<nav className='container px-3 xl:p-0 py-1 mx-auto w-full h-full grid grid-cols-8 md:grid-cols-12 grid-rows-1 fbc'>
				<div className='lg:hidden col-span-1 row-span-1 fsc'>
					<Hamburger
						toggled={menu}
						toggle={setMenu}
						duration={0.3}
						easing='ease-in'
						size={20}
						label='Show menu'
						rounded
						color='#A10550'
					/>
				</div>
				<div className='lg:hidden col-span-1 row-span-1 fsc'>
					<button>
						<MagnifyingGlassIcon className='Icon-Size text-primary-500' onClick={() => setItem(!item)} />
					</button>
				</div>
				{/* mobile */}
				{item && (
					<div className='bg-white px-3 xl:p-0 transition transform fixed top-16 2xl:top-[104px] left-0 w-full h-screen lg:h-19x z-20'>
						<SearchPeer />
					</div>
				)}
				<div className='col-span-4 md:col-span-8 lg:col-span-2 row-span-1 fcc lg:fsc'>
					<Link href='/'>
						<Image src={Logo} alt='logo img' quality={100} placeholder='blur' className='w-14x 2xl:w-17x' />
					</Link>
				</div>
				{/* navigation */}
				<div className='hidden lg:block px-3 col-span-8 row-span-1'>
					<Navigation />
				</div>
				{/* navigation */}
				<div className='hidden lg:fec col-span-1 row-span-1 fcc'>
					<button>
						<MagnifyingGlassIcon className='Icon-Size text-primary-500' onClick={() => setItem(!item)} />
					</button>
				</div>
				{/* web */}
				{item && (
					<div className='bg-white px-3 xl:p-0 transition transform fixed top-16 2xl:top-[104px] left-0 w-full h-screen lg:h-19x z-20'>
						<SearchPeer />
					</div>
				)}
				<div className='col-span-2 md:col-span-2 lg:col-span-1 row-span-1 fec text-primary-500'>
					<MapPinIcon className='Icon-Size' />
					<div className='fcc'>
						<p>
							{data.cou}
							<sub className=' text-grays-600'>({data.lan})</sub>
						</p>
					</div>
				</div>
			</nav>
			{/* navigation for phone */}
			<nav
				className={`fixed top-16 left-0 bg-background w-screen min-h-screen transition transform duration-300 z-20 ${
					!menu ? "-translate-x-full" : "-translate-x-0"
				}`}
			>
				<PhoneNavigation />
			</nav>
		</header>
	);
};
export default Header;
