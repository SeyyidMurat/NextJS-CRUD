import React from "react";
import { Box, Tabs } from "@mantine/core";
import AddWord from "../components/AddWord";
import AddQuestions from "../components/AddQuestions";
const AddItem = () => {
	const formWrapper = {
		height: "calc(100vh - 150px)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	return (
		<Tabs color="violet">
			<Tabs.Tab label="Add Word">
				<Box sx={formWrapper}>
					<AddWord />
				</Box>
			</Tabs.Tab>
			<Tabs.Tab label="Add Question">
				<Box sx={formWrapper}>
					<AddQuestions />
				</Box>
			</Tabs.Tab>
		</Tabs>
	);
};

export default AddItem;
