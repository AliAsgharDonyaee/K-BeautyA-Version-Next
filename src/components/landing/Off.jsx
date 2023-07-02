import Image from "next/image";
import Image1 from "public/images/brand/Frame 26085760.jpg";

const Off = () => {
	return (
		<div className='py-4 lg:p-0 my-8 w-full h-auto lg:h-auto bg-white lg:bg-gradient-to-r from-primary-100 text-black lg:fbc lg:flex-row'>
			<h1 className='mb-4 lg:hidden'>Special Offers</h1>
			<div className='mx-auto w-full h-auto lg:h-full fcc object-cover'>
				<Image
					src={Image1}
					alt='our brand img'
					quality={100}
					placeholder='blur'
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='py-3 px-4 lg:px-8 text-start md:text-center lg:text-start'>
				<h4 className='hidden lg:block md:my-2 text-primary'>Save up to 50%</h4>
				<h4 className='md:mb-2'>Mother’s Day is coming!</h4>
				<p className='md:mx-auto md:w-1/2 lg:w-full'>
					visit your local Beautya branches to find out more about our special offers in make up and skincare
					products.
				</p>
				<p className="hidden lg:block text-primary">
					visit your local beautya branches to find out more about our special offers in make up and skincare
					products.
				</p>
				<button className='mt-4 lg:mt-2 mx-auto lg:mx-0 w-1/2 md:w-1/3 lg:w-2/5 2xl:w-2/5 h-10x text-primary border-2 2xl:border-4 border-primary transition hover:ring-2 ring-primary ring-offset-1'>
					Discover More
				</button>
			</div>
		</div>
	);
};
export default Off;
