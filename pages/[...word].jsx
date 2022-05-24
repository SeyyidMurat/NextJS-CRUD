import React from "react";
import api from "../services/api";
import WordTable from "../components/WordTable";

const Word = (props) => {
	return (
		<div>
			<WordTable item={props.word} />
		</div>
	);
};

export default Word;

export async function getServerSideProps({ params }) {
	const { data } = await api.get(`api/words/${params.word}`);
	console.log(data);
	return {
		props: {
			word: data,
		},
	};
}
