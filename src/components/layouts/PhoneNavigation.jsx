import Link from "next/link";
import {
	WomenSkincareLinks,
	ByCategoryNavLinks,
	BySkinConditionNavLinks,
	Collection,
} from "@/data/datas";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const PhoneNavLinks = () => {
	return (
		<div className='pt-8 px-4 grid grid-cols-1 grid-rows-5 divide-y-2 overflow-y-auto'>
			<Menu className='bg-white'>
				<MenuItem component={<Link href='/' />}>Women Make UP</MenuItem>
				<SubMenu label='Women Skincare'>
					<SubMenu label='By Category'>
						{ByCategoryNavLinks.map(({ title, link }, index) => (
							<MenuItem key={index} href={link}>
								+ {title}
							</MenuItem>
						))}
					</SubMenu>
					<SubMenu label='By Skin Condition'>
						{BySkinConditionNavLinks.map(({ title, link }, index) => (
							<MenuItem key={index} href={link}>
								+ {title}
							</MenuItem>
						))}
					</SubMenu>
					<SubMenu label='Collection'>
						{Collection.map(({ title, link }, index) => (
							<MenuItem key={index} href={link}>
								+ {title}
							</MenuItem>
						))}
					</SubMenu>
					{WomenSkincareLinks.map(({ title, link }, index) => (
						<MenuItem key={index} href={link}>
							+ {title}
						</MenuItem>
					))}
				</SubMenu>
				<MenuItem component={<Link href='/' />}>Gifs & Sets</MenuItem>
				<MenuItem component={<Link href='/' />}>Branches</MenuItem>
				<MenuItem component={<Link href='/' />}>Our Brand</MenuItem>
			</Menu>
		</div>
	);
};
export default PhoneNavLinks;
