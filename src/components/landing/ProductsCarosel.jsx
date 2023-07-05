import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Link from "next/link";
import Image from "next/image";
import style from "./ProductsCaroselStyle.module.css";
import { offPriceFunc } from "@/server/utils/functions";

const ProductsCarosel = ({ bestProducts }) => {
	return (
		<div className='px-3 py-3 w-auto h-19x md:h-20x xl:h-21x 2xl:h-22x'>
			<Swiper
				modules={[Pagination, Autoplay]}
				slidesPerView={"auto"}
				spaceBetween={30}
				autoplay
				className='mySwiper h-full w-auto'
			>
				{bestProducts?.map(({ description, imageLink, price, title, _id, offPrice }) => (
					<SwiperSlide key={_id} className={`${style.swiperSilde} ${!bestProducts && "animate-pulse"}`}>
						<Link
							href='/'
							className='fcc border-2 md border-grays-400 w-full h-[90%] text-start grid grid-rows-3 grid-cols-1'
						>
							<div className='w-full h-full col-span-1 row-span-3'>
								<Image
									src={`/../public/images/products/${imageLink}`}
									alt={title}
									quality={100}
									width={100}
									height={100}
									className='w-full h-full'
								/>
							</div>
							<div className='p-2 px-3 w-full h-full col-span-1 row-span-2 fas flex-col'>
								<h4 className='text-primary md:hidden'>{title}</h4>
								<h6 className='text-primary hidden md:block xl:text-xl'>{title}</h6>
								<p className='Body-SM md:Body-XS'>{description}</p>
								<div className='w-full h-auto fbc flow-row'>
									<h4 className={`md:hidden ${offPrice > 0 && "line-through text-grays-600"}`}>
										${price}.00
									</h4>
									<h5 className={`hidden md:block ${offPrice > 0 && "line-through text-grays-600"}`}>
										${price}.00
									</h5>
									<div className={`flex flex-row ${offPrice > 0 ? "block" : "hidden"}`}>
										<p className={` mr-3 text-error`}>%{offPrice}</p>
										<p>${offPriceFunc(price, offPrice)}</p>
									</div>
								</div>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProductsCarosel;
