import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Link from "next/link";
import Image from "next/image";
import Images from "public/images/products/product-image-1.jpg";
import Brand from "public/images/brand/Rectangle 12336.jpg";
import style from "./ProductsCaroselStyle.module.css";
import { offPriceFunc } from "@/server/utils/functions";

const NewIn = ({ bestProducts }) => {
	return (
		<>
			<header className='text-white h-16 fcc'>
				<h1 className='lg:hidden'>New In</h1>
				<h4 className='hidden lg:block'>New In</h4>
			</header>
			<div className='mx-auto container w-full h-19x xl:h-22x px-3'>
				<Swiper
					modules={[Pagination, Autoplay]}
					slidesPerView={"auto"}
					spaceBetween={30}
					// pagination={{ clickable: true, dynamicBullets: true }}
					autoplay
					className='mySwiper h-full w-auto'
				>
					<SwiperSlide className={style.swiperSildeNewIn}>
						<Link href='/' className='fcc w-full h-[90%] text-start grid grid-rows-5 grid-cols-1'>
							<div className='w-full h-full col-span-1 row-span-3 xl:row-span-4'>
								<Image
									src={Brand}
									alt='banner img'
									placeholder='blur'
									quality={100}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='p-2 px-3 w-full h-full col-span-1 row-span-2 xl:row-span-1 fas flex-col'>
								<h2 className='text-primary-100 md:hidden'>Beautya La Mousse Off/On Foaming Cleaner</h2>
								<h5 className='text-primary-100 hidden md:block'>
									Beautya La Mousse Off/On Foaming Cleaner
								</h5>
								<p className='text-white Body-MD'>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
									officia consequat duis en im velit mollit.
								</p>
							</div>
						</Link>
					</SwiperSlide>
					{bestProducts.map(({ description, imageLink, price, title, _id, offPrice }) => (
						<SwiperSlide key={_id} className={`${style.swiperSilde} ${!bestProducts && "animate-pulse"}`}>
							<Link
								href='/'
								className='fcc border-2 md border-grays-400 bg-white w-full h-[90%] text-start grid grid-rows-3 grid-cols-1'
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
										<h4 className={`md:hidden`}>${price}.00</h4>
										<h5 className={`hidden md:block`}>${price}.00</h5>
									</div>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};
export default NewIn;
