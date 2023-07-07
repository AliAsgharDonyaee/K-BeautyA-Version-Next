import { Menu, SubMenu } from "react-pro-sidebar";
const ProductAbout = ({ data }) => {
	return (
		<Menu className='bg-white'>
			<SubMenu label='product detailes'>
				<div className='mx-5'>{data.datails}</div>
			</SubMenu>
			<SubMenu label='How TO Apply'>
				<div className='mx-5'>{data.HowToApply}</div>
			</SubMenu>
			<SubMenu label='Ingredient'>
				<div className='mx-5'>{data.Ingredient}</div>
			</SubMenu>
			<SubMenu label='what Makes It Advance'>
				<div className='mx-5'>{data.whatMakesItAdvance}</div>
			</SubMenu>
		</Menu>
	);
};
export default ProductAbout;
