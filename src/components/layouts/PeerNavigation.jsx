import Link from "next/link";
// import { ByCategoryNavLinks, BySkinConditionNavLinks, Collection, WomenSkincareLinks } from "data/navLinks";
import Image from "next/image";
import PeerImage from "public/images/peer-navigation/Rectangle 12344.png";
import { ByCategoryNavLinks, BySkinConditionNavLinks, WomenSkincareLinks,Collection } from "data/datas";

const PeerNavigation = () => {
	return (
		<ul
			aria-labelledby='dropdownHoverButton'
			className='mx-auto pt-4 container w-full h-full grid grid-cols-7 grid-rows-12 text-black'
		>
			<li className='col-span-2 row-span-full h-full flex flex-col'>
				{WomenSkincareLinks.map(({ title, link }, index) => (
					<Link key={index} href={link} className='w-full transition hover:text-primary-500'>
						<h6 className='mb-1'>{title}</h6>
					</Link>
				))}
			</li>
			<li className='col-span-1 row-span-full h-full'>
				<h6 className='border-l-4 border-primary-400 pl-1 font-bold text-sm lg:text-base mb-2'>By Category</h6>
				{ByCategoryNavLinks.map(({ title, link }, index) => (
					<Link key={index} href={link} className='w-full transition hover:text-primary-500'>
						<p className='mb-1 Body-SM '>{title}</p>
					</Link>
				))}
			</li>
			<li className='col-span-1 row-span-full h-full'>
				<h6 className='border-l-4 border-primary-400 pl-1 font-bold text-sm lg:text-base mb-2'>
					By Skin Condition
				</h6>
				{BySkinConditionNavLinks.map(({ title, link }, index) => (
					<Link key={index} href={link} className='w-full transition hover:text-primary-500'>
						<p className='mb-1 Body-SM '>{title}</p>
					</Link>
				))}
			</li>
			<li className='col-span-1 row-span-full h-full'>
				<h6 className='border-l-4 border-primary-400 pl-1 font-bold text-sm lg:text-base mb-2'>Collection</h6>
				{Collection.map(({ title, link }, index) => (
					<Link key={index} href={link} className='w-full transition hover:text-primary-500'>
						<p className='mb-1 Body-SM '>{title}</p>
					</Link>
				))}
			</li>
			<li className='col-span-2 row-span-full h-full'>
				<div className='row-span-4 fcs flex-col'>
					<Image src={PeerImage} alt='logo img' quality={100} placeholder='blur' className='w-4/5' />
					<p className='my-3 Caption-LG'>capture totale super potent rich cream</p>
					<p className='pr-20 Caption-MD'>
						Global age-defying rich cream - intense nourishment & revitalization
					</p>
				</div>
			</li>
		</ul>
	);
};
export default PeerNavigation;
