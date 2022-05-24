import React from "react";
import api from "../services/api";
import WordTable from "../components/WordTable";

const Home = (props) => {
	return (
		<div>
			<WordTable item={props.words} />
		</div>
	);
};

export default Home;

export async function getServerSideProps() {
	const { data } = await api.get("api/words");
	return {
		props: {
			words: data,
		},
	};
}
