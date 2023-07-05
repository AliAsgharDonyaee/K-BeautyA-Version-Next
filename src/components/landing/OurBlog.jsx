import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Link from "next/link";
import Image from "next/image";
import style from "./ProductsCaroselStyle.module.css";

const OurBlog = ({ blog }) => {
	return (
		<>
			<div className='mx-auto container w-full h-19x xl:h-20x px-3'>
				{blog.map(({ title, description, author, writeDate, imageLink, _id }) => (
					<Swiper
						key={_id}
						modules={[Pagination, Autoplay]}
						slidesPerView={"auto"}
						spaceBetween={10}
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
										src={`/../public/images/blog/${imageLink}`}
										alt={title}
										quality={100}
										width={100}
										height={100}
										className='w-full h-full'
									/>
								</div>
								<div className='p-3 col-span-1 row-span-2'>
									<h3 className='block md:hidden group-hover:text-primary'>{title}</h3>
									<h4 className='hidden md:block lg:hidden group-hover:text-primary'>{title}</h4>
									<h5 className='hidden lg:block group-hover:text-primary'>{title}</h5>
									<div className='fsc mt-1 mb-3 Overline text-gray-700'>
										<p>skincare \ </p>
										<p>{author.name} \ </p>
										<p>{writeDate.slice(0, 10)}</p>
									</div>
									<p className='line-clamp-2'>{description}</p>
								</div>
							</Link>
						</SwiperSlide>
					</Swiper>
				))}
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
