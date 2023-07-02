import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Link from "next/link";
import Image from "next/image";
import Images from "public/images/products/product-image-1.jpg";
import style from "./ProductsCaroselStyle.module.css";

const item = [
	{
		image: Images,
		title: "Beautya Prestige la Mousse Micellaire",
		des: "Anti-Aging Face Serum, with Purifying French Water Lily",
		price: 76,
	},
	{
		image: Images,
		title: "Beautya Prestige la Mousse Micellaire",
		des: "Anti-Aging Face Serum, with Purifying French Water Lily",
		price: 76,
	},
	{
		image: Images,
		title: "Beautya Prestige la Mousse Micellaire",
		des: "Anti-Aging Face Serum, with Purifying French Water Lily",
		price: 76,
	},
	{
		image: Images,
		title: "Beautya Prestige la Mousse Micellaire",
		des: "Anti-Aging Face Serum, with Purifying French Water Lily",
		price: 76,
	},
	{
		image: Images,
		title: "Beautya Prestige la Mousse Micellaire",
		des: "Anti-Aging Face Serum, with Purifying French Water Lily",
		price: 76,
	},
];

const ProductsCarosel = () => {
	return (
		<div className='px-3 py-3 w-auto h-19x md:h-20x xl:h-22x'>
			<Swiper
				modules={[Pagination, Autoplay]}
				slidesPerView={"auto"}
				spaceBetween={30}
				// pagination={{ clickable: true, dynamicBullets: true }}
				autoplay
				className='mySwiper h-full w-auto'
			>
				{item.map(({ des, image, price, title }) => (
					<SwiperSlide key={title} className={style.swiperSilde}>
						<Link
							href='/'
							className='fcc border-2 md border-grays-400 w-full h-[90%] text-start grid grid-rows-5 grid-cols-1'
						>
							<div className='w-full h-full col-span-1 row-span-3 xl:row-span-4'>
								<Image
									src={image}
									alt='banner img'
									placeholder='blur'
									quality={100}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='p-2 px-3 w-full h-full col-span-1 row-span-2 xl:row-span-1 fas flex-col'>
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
