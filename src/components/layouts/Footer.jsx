import { MapPinIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

const item = [
	{ link: "/", Icon: FiInstagram },
	{ link: "/", Icon: FiFacebook },
	{ link: "/", Icon: FiTwitter },
	{ link: "/", Icon: FiYoutube },
];

const Footer = () => {
	return (
		<footer className='w-full h-screen md:h-auto bg-gradient-to-r from-primary-700 via-primary-800 to-primary-700'>
			<div className='mx-auto container w-full h-full'>
				<div className='px-3 py-9 lg:py-16 xl:py-20 w-full h-[70%] bg-primary-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-1 gap-y-4 text-white'>
					<div className='col-span-1 row-span-1'>
						<h3 className='mb-4'>How can we Help?</h3>
						<Link href='/'>
							<p className='mb-2 Body-MD'>Find My Local Beautya</p>
						</Link>
						<Link href='/'>
							<p className='mb-2 Body-MD'>Contact Us </p>
						</Link>
						<Link href='/'>
							<p className='mb-2 Body-MD'>FAQ</p>
						</Link>
						<Link href='/'>
							<p className='mb-2 Body-MD'>Our Brand</p>
						</Link>
						<Link href='/'>
							<p className='mb-2 Body-MD'>Blog</p>
						</Link>
					</div>
					<div className='col-span-1 row-span-1 fcs md:fss flex-col'>
						<h3 className='mb-4'>Products</h3>
						<Link href='/'>
							<p className=' mb-2 Body-MD'>Women Make up</p>
						</Link>
						<Link href='/'>
							<p className=' mb-2 Body-MD'>Women Skincare</p>
						</Link>
						<Link href='/'>
							<p className=' mb-2 Body-MD'>Gifts & Sets</p>
						</Link>
					</div>
					<div className='col-span-1 md:col-span-2 row-span-2'>
						<h3 className='mb-4'>Keep In Touch With Beautya</h3>
						<p className='Body-MD'>
							Join the Beautya newsletter and be first to hear about news, offers and skincare advice
						</p>
						<input
							type='email'
							name='email'
							id='send-email'
							placeholder='Email Address'
							className='my-6 px-1 w-full h-9x border-b-2 border-white bg-inherit text-white placeholder:text-primary-50'
						/>
						<div className='fsc'>
							<input
								type='checkbox'
								name='checkbox'
								id='checkbox-email'
								className='bg-primary-700 border-gray-500 accent-primary-400 mr-2 w-10 md:w-6 h-10 md:w-6'
							/>
							<label htmlFor='checkbox'>
								I agree to Beautya’s Terms and Conditions and Privacy and Policy.
							</label>
						</div>
						<button className='mt-4 mx-auto w-1/2 h-10x bg-inherit border-2 border-white transition hover:ring-2 ring-white ring-offset-1'>
							subscribe
						</button>
					</div>
				</div>
				<div className='p-3 w-full h-[20%] bg-primary-800 grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 fsc md:fbc'>
					<div className='w-full h-1/2 col-span-1 row-span-1 fss md:fcs flex-col lg:flex-row gap-y-4 lg:fsc'>
						<div className='fsc lg:mr-6'>
							<MapPinIcon className='mr-3 text-primary-200 Icon-Size' />
							<p className='Body-LG lg:Body-SM text-white'>Dr. Richardson, California</p>
						</div>
						<div className='fsc'>
							<PhoneArrowDownLeftIcon className='mr-3 text-primary-200 Icon-Size' />
							<p className='Body-LG lg:Body-SM text-white'>1-802-526-2463 / 1-802-526-2463</p>
						</div>
					</div>
					<div className='w-full h-1/2 col-span-1 row-span-1 fsc md:fec'>
						<ul className='flex'>
							{item.map(({ link, Icon },index) => (
								<Link key={index} href={link}>
									<Icon className='mr-4 text-primary-200 w-10 lg:w-8 h-10 lg:h-8' />
								</Link>
							))}
						</ul>
					</div>
				</div>
				<div className='p-3 w-full h-[10%] bg-primary-900 text-white md:fbc'>
					<div>
						<p className='col-span-2'>&#169; 2023 Beautya. All Rights Reserved.</p>
					</div>
					<div className='flex flex-row'>
						<p className='col-span-1 text-grays-700 mr-5'>Terms & Conditions</p>
						<p className='col-span-1 text-grays-700'>Privacy Policy</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
