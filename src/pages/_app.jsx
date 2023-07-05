import Layouts from "@/components/layouts/Layouts";
import "../styles/globals.css";
import Head from "next/head";
import { Watch } from "react-loader-spinner";
import useSWR from "swr";
import axios from "axios";

const fetcher = async () => {
	const data = await axios.get("/api/v1/category/lists");
	return data;
};

const MyApp = ({ Component, pageProps }) => {
	const { error, data } = useSWR("/api/v1/category/lists", fetcher);
	if (error) return Notiflix.Notify.failure("There is no data to get");
	return (
		<>
			<Head>
				<meta charset='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta
					name='keywords'
					content='KeywordS: wave, Womam, Water, Wind, Rose, Nature, Flower, Pure, Fresh, moisture, Texture, Soft'
				/>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap' rel='stylesheet' />
				<link rel='shortcut icon' href='public/images/logo/favicon.ico' />
				<script src='dist/notiflix-notify-aio-3.2.6.min.js'></script>
			</Head>
			{!data && error ? (
				<div className='w-screen h-screen fcc'>
					<Watch
						height='80'
						width='80'
						radius='48'
						color='#A10550'
						ariaLabel='watch-loading'
						wrapperStyle={{}}
						wrapperClassName=''
						visible={true}
					/>
				</div>
			) : (
				<Layouts>
					<Component {...pageProps} />
				</Layouts>
			)}
		</>
	);
};
export default MyApp;
