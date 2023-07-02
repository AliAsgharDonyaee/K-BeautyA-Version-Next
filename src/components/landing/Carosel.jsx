import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import Image from "next/image";
import Banner from "public/images/baners/1.png";

const Carosel = () => {
	return (
		<Swiper
			modules={[Autoplay, Navigation]}
			navigation={true}
			pagination={{ clickable: true }}
			autoplay
			className='mySwiper h-full w-full'
		>
			<SwiperSlide>
				<div className='relative h-full'>
					<div className='absolute inset-0'>
						<Image
							src={Banner}
							alt='banner img'
							placeholder='blur'
							fill
							quality={100}
							className='w-full h-full object-cover'
						/>
						<div className='pb-10 relative z-10 fec flex-col h-full bg-black bg-opacity-60'>
							<h1 className='font-bold text-gray-200'>Unlock Your Natural Glow</h1>
							<button className='mt-8 mx-auto w-1/2 md:w-1/3 lg:w-1/5 xl:w-[15%] 2xl:w-[10%] h-10x text-white border-2 2xl:border-4 border-white transition hover:ring-2 ring-white ring-offset-1'>
								Know More
							</button>
						</div>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};
export default Carosel;
