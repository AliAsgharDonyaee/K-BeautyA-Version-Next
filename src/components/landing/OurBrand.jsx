import Image from "next/image";
import Image1 from "public/images/brand/Frame 26085715.jpg";

const OurBrand = () => {
	return (
		<div className='py-4 lg:p-0 my-8 w-full h-20x lg:h-[285px] xl:h-18x 2xl:h-19x bg-inherit text-white lg:fbc lg:flex-row-reverse'>
			<h1 className='my-4 lg:hidden text-center text-white'>our brand</h1>
			<div className='mx-auto w-18x md:w-19x lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-[200px] md:h-[240px] lg:h-full fcc object-cover'>
				<Image
					src={Image1}
					alt='our brand img'
					quality={100}
					placeholder='blur'
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='lg:py-4 fss flex-col lg:w-1/2 xl:w-1/2 2xl:w-1/2 lg:pl-4 xl:px-14'>
				<h1 className='mb-4 hidden lg:block'>our brand</h1>
				<p className='mt-4 lg:mt-0 lg:mb-2 px-5 lg:p-0 lg:pr-8 mx-auto md:w-3/4 lg:w-full Body-MD text-center lg:text-start'>
					We believe that beauty thrives in diversity and discovery. Our purpose is to expand the way the
					world sees beauty by empowering the Extraordinary in each of us.
				</p>
				<button className='mt-8 lg:mt-2 mx-auto lg:mx-0 w-1/2 md:w-1/3 lg:w-2/5 2xl:w-1/2 h-10x text-white border-2 2xl:border-4 border-white transition hover:ring-2 ring-white ring-offset-1'>
					Discover More
				</button>
			</div>
		</div>
	);
};
export default OurBrand;
