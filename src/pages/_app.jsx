import Layouts from "@/components/layouts/Layouts";
import "../styles/globals.css";
import Head from "next/head";
const MyApp = ({ Component, pageProps }) => {
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
			</Head>
			<Layouts>
				<Component {...pageProps} />
			</Layouts>
		</>
	);
};
export default MyApp;
