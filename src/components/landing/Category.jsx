import Link from "next/link";
import Image from "next/image";

const Category = ({ category }) => {
	return (
		<div className='px-3 w-full h-auto 2xl:h-20x grid justify-items-center items-center grid-cols-3 md:grid-cols-8 xl:grid-cols-11 grid-rows-1'>
			<div className='h-full col-span-3 md:col-span-6 md:col-start-2 lg:col-span-6 lg:col-start-2 xl:col-span-9 xl:col-start-2 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-9 row-span-1 gap-x-4'>
				{category?.map((i) => (
					<Link
						href={i.link}
						key={i._id}
						className={`col-span-1 md:col-span-2 xl:col-span-3 row-span-1 text-center group ${
							!category && "animate-pulse"
						}`}
					>
						<Image
							src={`/../public/images/category/${i.imageLink}`}
							alt={i.title}
							quality={100}
							width={100}
							height={100}
							className='w-full h-[90%]'
						/>
						<p className='Body-LG mt-2 group-hover:text-primary'>{i.title}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Category;
