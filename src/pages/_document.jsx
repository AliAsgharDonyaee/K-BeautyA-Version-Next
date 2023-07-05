import { Html, Main, NextScript, Head } from "next/document";

const Document = () => {
	return (
		<Html>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap' rel='stylesheet' />
				<link rel='shortcut icon' href='public/images/logo/favicon.ico' />
			</Head>
			<body dir='ltr' className='bg-background'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
