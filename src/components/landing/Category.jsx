import Image1 from "public/images/category/make up image.jpg";
import Image2 from "public/images/category/skincare image.jpg";
import Image3 from "public/images/category/gifts image.jpg";
import Link from "next/link";
import Image from "next/image";

const Category = () => {
	return (
		<div className='px-3 w-full h-auto grid grid-cols-3 md:grid-cols-8 xl:grid-cols-12 grid-rows-1 gap-x-4'>
			<Link href='/' className='col-span-1 md:col-start-2 md:col-span-2 xl:col-start-4 row-span-1 text-center'>
				<Image src={Image1} alt='category img' quality={100} placeholder='blur' />
				<h4 className='block lg:hidden mt-2'>make up</h4>
				<p className='hidden lg:block Body-LG mt-2'>women make up</p>
			</Link>
			<Link href='/' className='col-span-1 md:col-start-4 md:col-span-2 xl:col-start-6  row-span-1 text-center'>
				<Image src={Image2} alt='category img' quality={100} placeholder='blur' />
				<h4 className='block lg:hidden mt-2'>skincare</h4>
				<p className='hidden lg:block Body-LG mt-2'>women skincare</p>
			</Link>
			<Link href='/' className='col-span-1 md:col-start-6 md:col-span-2 xl:col-start-8  row-span-1 text-center'>
				<Image src={Image3} alt='category img' quality={100} placeholder='blur' />
				<h4 className='block lg:hidden mt-2'>Gifts & sets</h4>
				<p className='hidden lg:block Body-LG mt-2'>women make up</p>
			</Link>
		</div>
	);
};
export default Category;
