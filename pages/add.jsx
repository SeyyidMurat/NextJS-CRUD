import React from "react";
import { Box, Tabs } from "@mantine/core";
import AddWord from "../components/AddWord";
import AddExamples from "../components/AddExamples";
const AddItem = () => {
	return (
		<Tabs color="violet">
			<Tabs.Tab label="Add Word">
				<Box className="wrapper-center">
					<AddWord />
				</Box>
			</Tabs.Tab>
			<Tabs.Tab label="Add Example">
				<Box className="wrapper-center">
					<AddExamples />
				</Box>
			</Tabs.Tab>
		</Tabs>
	);
};

export default AddItem;
