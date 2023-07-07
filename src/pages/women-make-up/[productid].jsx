import WideCenter from "@/components/landing/WideCenter";
import ProductAbout from "@/components/productPage/ProductAbout";
import Carosell from "@/components/productPage/carosell";
import ProductDetails from "@/components/productPage/productDetails";
import Head from "next/head";
import { useRouter } from "next/router";
import { getOneData } from "../api/v1/products/lists";

const ProductId = ({ data }) => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>BEAUTYA | product {router.query.productid} &#x2764;</title>
				<meta name='description' content='Ask us for all brands of cosmetics' />
			</Head>
			<section className='px-3 mt-12x lg:mt-15x 2xl:mt-17x'>
				<div className='mx-auto container'>
					<div className='my-8 lg:my-4'>
						<p className='text-grays-600 text-sm'>Home &gt; women-make-up &gt; {router.query.productid}</p>
					</div>
					<ProductDetails data={data[0]} />
					<div className='w-full h-auto bg-white'>
						<ProductAbout data={data[0]} />
					</div>
					<div className='my-4 w-full h-auto p-3 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-700'>
						<WideCenter>
							<Carosell />
							<div className=' mt-3 text-sm lg:text-lg text-start lg:text-center text-white'>
								<p>
									<strong>In just 1 week :</strong> it appears firmer, stronger and smoother.
								</p>
								<p>
									<strong>In 3 weeks :</strong> 2x improvement in the look or feel of skin elasticity
								</p>
								<p>
									<strong>After 1 month :</strong> The skin looks firmer+60% | The skin looks denser
									+56%
								</p>
							</div>
						</WideCenter>
					</div>
				</div>
			</section>
		</>
	);
};

export async function getServerSideProps(ctx) {
	const { query } = ctx;
	const data = await getOneData(query.productid);
	return {
		props: {
			data: JSON.parse(JSON.stringify(data)),
		},
	};
}

export default ProductId;
