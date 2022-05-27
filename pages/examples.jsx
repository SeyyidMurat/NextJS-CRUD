import React from "react";
import { Grid, Text } from "@mantine/core";
import api from "../services/api";
const Examples = ({ sentences }) => {
	return (
		<div className="main-container">
			{sentences.map((item) => (
				<Grid key={item._id}>
					<Grid.Col md={12} lg={6}>
						<Text className="hidden-text" size="xl" component="p" color="red">
							{item.sentence}
						</Text>
					</Grid.Col>
					<Grid.Col md={12} lg={6}>
						<Text size="xl" component="p" color="indigo" weight={700}>
							{item.meaning}
						</Text>
					</Grid.Col>
				</Grid>
			))}
		</div>
	);
};

export default Examples;

export async function getServerSideProps() {
	const { data } = await api.get("api/sentences");
	return {
		props: {
			sentences: data,
		},
	};
}
