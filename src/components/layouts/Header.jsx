import { getLocation } from "@/utils/functions";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "public/images/logo/beautya_logo.png";
import { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import PhoneNavigation from "./PhoneNavigation";
import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
	const [menu, setMenu] = useState(false);
	return (
		<header className='border-b-2 bg-gradient-to-r from-white lg:from-primary-50 via-primary-50 lg:via-white to-white lg:to-white w-full h-11x 2xl:h-16x '>
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
					/>
				</div>
				<div className='lg:hidden col-span-1 row-span-1 fsc'>
					<button>
						<MagnifyingGlassIcon className='Icon-Size text-primary-500' />
					</button>
				</div>
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
						<MagnifyingGlassIcon className='Icon-Size text-primary-500' />
					</button>
				</div>
				<div className='col-span-2 md:col-span-2 lg:col-span-1 row-span-1 fec text-primary-500'>
					<MapPinIcon className='Icon-Size' />
					<div className='fcc'>
						<p>
							{getLocation().cou}
							<sub className=' text-grays-600'>({getLocation().lan})</sub>
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
