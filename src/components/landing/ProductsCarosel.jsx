import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Link from "next/link";
import Image from "next/image";
import style from "./ProductsCaroselStyle.module.css";
import { getData } from "@/pages/api/v1/best_seller_products/list";
import { useState } from "react";

export async function getStaticProps() {
	const data = await getData();
	return {
		props: {
			data,
		},
		revalidate: 1,
	};
}

const ProductsCarosel = ({ data }) => {
	const [item, setItem] = useState(data);
	return (
		<div className='px-3 py-3 w-auto h-19x md:h-20x xl:h-21x 2xl:h-22x'>
			<Swiper
				modules={[Pagination, Autoplay]}
				slidesPerView={"auto"}
				spaceBetween={30}
				autoplay
				className='mySwiper h-full w-auto'
			>
				{item?.map(({ des, image, price, title }, index) => (
					<SwiperSlide key={index} className={style.swiperSilde}>
						<Link
							href='/'
							className='fcc border-2 md border-grays-400 w-full h-[90%] text-start grid grid-rows-3 grid-cols-1'
						>
							<div className='w-full h-full col-span-1 row-span-3'>
								<Image
									src={image}
									alt='banner img'
									placeholder='blur'
									quality={100}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='p-2 px-3 w-full h-full col-span-1 row-span-2 fas flex-col'>
								<h4 className='text-primary md:hidden'>{title}</h4>
								<h6 className='text-primary hidden md:block xl:text-xl'>{title}</h6>
								<p className='Body-SM'>{des}</p>
								<h4 className='md:hidden'>$ {price}.00</h4>
								<h5 className='hidden md:block'>$ {price}.00</h5>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProductsCarosel;
