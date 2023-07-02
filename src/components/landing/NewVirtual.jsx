import Image from "next/image";
import Image1 from "public/images/brand/image 10.jpg";

const NewVirtual = () => {
	return (
		<div className='py-4 lg:p-0 my-8 w-full h-auto lg:h-[256px] xl:h-18x bg-white lg:bg-primary-750 text-black lg:text-white lg:fbc lg:flex-row-reverse'>
			<h1 className='mb-4 lg:hidden'>Virtual Skincare Analysis</h1>
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
            <h2 className='mb-4 hidden lg:block'>Virtual Skincare Analysis</h2>
				<p className='md:mx-auto md:w-1/2 lg:w-full lg:Body-SM'>
					Looking for a full skincare routine? Our NEW Virtual Skincare Analysis Tool evaluates your skin and
					provides the most personalized recommendations.
				</p>
				<div className="fcc flex-row lg:justify-start gap-x-1">
					<button className='mt-4 lg:mt-2 mx-auto lg:mx-0 w-1/2 md:w-1/3 lg:w-2/5 2xl:w-2/5 h-10x text-primary border-2 2xl:border-4 border-primary transition hover:ring-2 ring-primary ring-offset-1'>
						answer a few question
					</button>
					<button className='mt-4 lg:mt-2 mx-auto lg:mx-0 w-1/2 md:w-1/3 lg:w-2/5 2xl:w-2/5 h-10x text-white border-2 border-primary 2xl:border-4 bg-primary transition hover:ring-2 ring-primary ring-offset-1'>
						take a selfie
					</button>
				</div>
			</div>
		</div>
	);
};
export default NewVirtual;
