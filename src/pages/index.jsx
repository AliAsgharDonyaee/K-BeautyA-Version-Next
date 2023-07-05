import Carosel from "@/components/landing/Carosel";
import Category from "@/components/landing/Category";
import NewIn from "@/components/landing/NewIn";
import NewVirtual from "@/components/landing/NewVirtual";
import Off from "@/components/landing/Off";
import OurBlog from "@/components/landing/OurBlog";
import OurBrand from "@/components/landing/OurBrand";
import ProductsCarosel from "@/components/landing/ProductsCarosel";
import Head from "next/head";
import { getDatasProduct } from "./api/v1/products/lists";
import { getDatasCategory } from "./api/v1/category/lists";
import Notiflix from "notiflix";
import { getDatasBlog } from "./api/v1/blogs/lists";
import WideCenter from "@/components/landing/WideCenter";
import Footer from "@/components/landing/Footer";

export default function Home({ category, bestProducts, blog }) {
	if (!category) return Notiflix.Notify.failure("There is no data to get");
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
				<WideCenter>
					<h1 className='block lg:hidden py-8 lg:py-14'>Products’ categories</h1>
					<h4 className='hidden lg:block py-8 lg:py-14'>Products’ categories</h4>
					<Category category={category} />
				</WideCenter>
				<div className='bg-gradient-to-r from-primary-700 via-primary-800 to-primary-700'>
					{/* <div className='mx-auto container'>
						<OurBrand />
					</div> */}
					<WideCenter>
						<OurBrand />
					</WideCenter>
				</div>
				<WideCenter>
					<h1 className='block lg:hidden py-8 lg:py-14'>our Best Sellers</h1>
					<h4 className='hidden lg:block py-8 lg:py-14'>our Best Sellers</h4>
					<ProductsCarosel bestProducts={bestProducts} />
				</WideCenter>
				<div className='mb-4 w-full h-full bg-gradient-to-r from-primary-700 via-primary-800 to-primary-700'>
					<NewIn bestProducts={bestProducts} />
				</div>
				<WideCenter>
					<Off />
					<NewVirtual />
				</WideCenter>
				<WideCenter>
					<h1 className='block lg:hidden py-8 lg:py-14'>Last Blog</h1>
					<h4 className='hidden lg:block py-8 lg:py-14'>Last Blog</h4>
					<OurBlog blog={blog} />
				</WideCenter>
				<div className='w-full h-17x px-3 md:p-0 bg-primary-25 text-primary-600 fcc'>
					<WideCenter>
						<Footer />
					</WideCenter>
				</div>
			</section>
		</>
	);
}

export async function getStaticProps() {
	const category = await getDatasCategory();
	const bestProducts = await getDatasProduct();
	const blog = await getDatasBlog();

	return {
		props: {
			category: JSON.parse(JSON.stringify(category)),
			bestProducts: JSON.parse(JSON.stringify(bestProducts)),
			blog: JSON.parse(JSON.stringify(blog)),
		},
	};
}
