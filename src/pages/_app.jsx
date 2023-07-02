import Layouts from "@/components/layouts/Layouts";
import "../styles/globals.css";
import Head from "next/head";
const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>BEAUTYA | Welcome &#x2764;</title>
				<meta charset='UTF-8' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap' rel='stylesheet' />
				<link rel='icon' type='image/png' href='../../public/images/logo/next.svg' />
				<meta name='description' content='Ask us for all brands of cosmetics' />
				<meta
					name='keywords'
					content='KeywordS: wave, Womam, Water, Wind, Rose, Nature, Flower, Pure, Fresh, moisture, Texture, Soft'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Layouts>
				<Component {...pageProps} />
			</Layouts>
		</>
	);
};
export default MyApp;
