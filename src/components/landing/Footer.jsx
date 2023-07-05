import { GiRabbit } from "react-icons/gi";
import { BsLightbulb } from "react-icons/bs";
import { IoLeafOutline } from "react-icons/io5";
import { LuWheat } from "react-icons/lu";

const item = [
	{ title: "No tests on animals", Icon: GiRabbit },
	{ title: "Recyclable packaging", Icon: BsLightbulb },
	{ title: "No animal ingredients", Icon: IoLeafOutline },
	{ title: "No gluten by products", Icon: LuWheat },
];

const Footer = () => {
	return (
		<div className='w-full h-full grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-y-5 lg:gap-0'>
			{item.map(({ Icon, title },index) => (
				<div key={index} className=' fevc md:fcc'>
					<Icon className='text-3xl xl:text-4xl 2xl:text-5xl' />
					<p className='Body-SM md:ml-3'>{title}</p>
				</div>
			))}
		</div>
	);
};

export default Footer;
