import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import style from "../landing/ProductsCaroselStyle.module.css";
import Image from "next/image";

const item = [
	{
		link: "Frame 26085683.jpg",
	},
	{
		link: "Frame 26085684.jpg",
	},
	{
		link: "Frame 26085685.jpg",
	},
	{
		link: "Frame 26085686.jpg",
	},
];

const Carosell = () => {
	return (
		<Swiper
			modules={[Pagination, Autoplay]}
			slidesPerView={"auto"}
			spaceBetween={30}
			autoplay
			className='mySwiper h-full w-auto'
		>
			{item.map((i,index) => (
				<SwiperSlide key={index} className={style.swiperSildeNewPN}>
					<Image
						src={`/../public/images/products/${i.link}`}
						alt='product banner img'
						quality={100}
						width={100}
						height={100}
						className='w-full h-full bg-red-500'
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default Carosell;
