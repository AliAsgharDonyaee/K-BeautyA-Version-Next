import Image from "next/image";

const ProductDetails = ({ data }) => {
	return (
		<>
			<div className='lg:hidden'>
				<h1 className='text-primary'>{data.title}</h1>
				<h4 className='my-4'>Anti-aging face serum</h4>
				<h4 className='text-grays-600 '>Formulated with 92% natural-origin ingredients</h4>
			</div>
			<div className='my-4 w-full h-auto lg:flex'>
				<div className='w-full lg:w-2/3 h-18x md:h-21x'>
					<Image
						src={`/../public/images/products/${data.imageLink}`}
						alt={data.title}
						quality={100}
						width={100}
						height={100}
						className='w-full h-full'
					/>
				</div>
				<div className='lg:w-1/3 lg:px-3 lg:fcs flex-col'>
					<div className='hidden lg:block'>
						<h1 className='text-primary'>{data.title}</h1>
						<h4 className='my-4'>Anti-aging face serum</h4>
						<h4 className='text-grays-600 '>Formulated with 92% natural-origin ingredients</h4>
					</div>
					<div className='mt-4 md:fbc lg:flex-col lg:w-full md:gap-x-10'>
						<div className='my-4 md:w-1/2 lg:w-full w-full fbc'>
							<p>price</p>
							<p>${data.price}.00</p>
						</div>
						<div className='my-4 md:w-1/2 lg:w-full w-full fbc'>
							<p>30ML</p>
							<p>${data.price}.00</p>
						</div>
					</div>
					<button className='mx-auto w-11/12 h-8x bg-primary text-white border-2 border-primary transition hover:ring-2 ring-primary ring-offset-1'>
						Add To Cart
					</button>
				</div>
			</div>
		</>
	);
};
export default ProductDetails;
