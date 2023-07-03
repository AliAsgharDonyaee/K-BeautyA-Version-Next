import Carosel from "@/components/landing/Carosel";
import Category from "@/components/landing/Category";
import NewIn from "@/components/landing/NewIn";
import NewVirtual from "@/components/landing/NewVirtual";
import Off from "@/components/landing/Off";
import OurBlog from "@/components/landing/OurBlog";
import OurBrand from "@/components/landing/OurBrand";
import ProductsCarosel from "@/components/landing/ProductsCarosel";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>BEAUTYA | Welcome To HomePage &#x2764;</title>
				<meta name='description' content='Ask us for all brands of cosmetics' />
			</Head>
			<section className='min-h-screen'>
				<div className='mt-11x 2xl:mt-16x w-full h-18x lg:h-20x xl:h-21x 2xl:h-22x'>
					<Carosel />
				</div>
				<div className='mx-auto container text-center'>
					<h1 className='block lg:hidden py-8 lg:py-14'>Products’ categories</h1>
					<h4 className='hidden lg:block py-8 lg:py-14'>Products’ categories</h4>
					<Category />
				</div>
				<div className='bg-gradient-to-r from-primary-700 via-primary-800 to-primary-700'>
					<div className='mx-auto container'>
						<OurBrand />
					</div>
				</div>
				<div className='mx-auto container text-center'>
					<h1 className='block lg:hidden py-8 lg:py-14'>our Best Sellers</h1>
					<h4 className='hidden lg:block py-8 lg:py-14'>our Best Sellers</h4>
					<ProductsCarosel />
				</div>
				<div className='mb-4 w-full h-full bg-gradient-to-r from-primary-700 via-primary-800 to-primary-700'>
					<NewIn />
				</div>
				<div className='mx-auto container text-center'>
					<Off />
					<NewVirtual />
				</div>
				<div className='mx-auto container text-center'>
					<h1 className='block lg:hidden py-8 lg:py-14'>Last Blog</h1>
					<h4 className='hidden lg:block py-8 lg:py-14'>Last Blog</h4>
					<OurBlog />
				</div>
			</section>
		</>
	);
}
