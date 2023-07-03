import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Link from "next/link";
import Image from "next/image";
import Images from "public/images/blog/blog-image.jpg";
import style from "./ProductsCaroselStyle.module.css";

const OurBlog = () => {
	return (
		<>
			<div className='mx-auto container w-full h-19x xl:h-20x px-3'>
				<Swiper
					modules={[Pagination, Autoplay]}
					slidesPerView={"auto"}
					spaceBetween={10}
					// pagination={{ clickable: true, dynamicBullets: true }}
					autoplay
					className='mySwiper h-full w-auto'
				>
					<SwiperSlide className={style.swiperSildeNewInPB}>
						<Link
							href='/'
							className='fcc border-2 md border-grays-400 w-full h-[92%] text-start grid grid-rows-5 grid-cols-1 bg-white group'
						>
							<div className='w-full h-full col-span-1 row-span-3'>
								<Image
									src={Images}
									alt='blog img'
									placeholder='blur'
									quality={100}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='p-3 col-span-1 row-span-2'>
								<h3 className='block md:hidden group-hover:text-primary'>How to get clear skin fast</h3>
								<h4 className='hidden md:block lg:hidden group-hover:text-primary'>How to get clear skin fast</h4>
								<h5 className='hidden lg:block group-hover:text-primary'>How to get clear skin fast</h5>
								<div className='fsc mt-1 mb-3 Overline text-gray-700'>
									<p className=''>Skincare \ </p>
									<p className=''>Dr. Wade Warren \ </p>
									<p className=''>Jan 20, 2021</p>
								</div>
								<p className='line-clamp-2'>
									Many people find it difficult to get clear skin. The methods for getting clear skin
									will vary, depending on the person’s skin type. In general, people struggling with
									acne or blemishes have skin that is dry, oily, or a combination of the two.
								</p>
							</div>
						</Link>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className='mb-4'>
				<Link href='/' className='text-center text-primary'>
					view all
				</Link>
			</div>
		</>
	);
};
export default OurBlog;
