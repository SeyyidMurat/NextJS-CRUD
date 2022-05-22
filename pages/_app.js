import "../styles/globals.css";
import { MantineProvider } from "@mantine/styles";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
	return (
		<MantineProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MantineProvider>
	);
}

export default MyApp;
