import React, { useState } from "react";
import { InputWrapper, Stack, Card, Button, Box, Textarea } from "@mantine/core";
import api from "../services/api";
import StatusMessage from "./StatusMessage";

const AddExamples = () => {
	const [openNotification, setOpenNotification] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");

	const [ınputValue, setInputValue] = useState({
		sentence: "",
		meaning: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputValue((ınputValue) => ({ ...ınputValue, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { data } = await api.post("api/sentences/add", ınputValue);
		setStatusMessage(data);
		setInputValue({ sentence: "", meaning: "" });
	};

	return (
		<Box sx={{ width: "360px" }}>
			<form onSubmit={handleSubmit}>
				<Card shadow="lg" p="lg">
					<Stack spacing="xl">
						<InputWrapper id="input-sentence" label="Example Sentence ">
							<Textarea
								name="sentence"
								placeholder="Question"
								autosize
								minRows={2}
								required
								value={ınputValue.sentence}
								onChange={handleChange}
							/>
						</InputWrapper>
						<InputWrapper id="input-meaning" label="Meaning">
							<Textarea
								name="meaning"
								placeholder="Meaning"
								autosize
								minRows={2}
								required
								value={ınputValue.meaning}
								onChange={handleChange}
							/>
						</InputWrapper>
						<Button type="submit" color="indigo">
							Add Question
						</Button>
					</Stack>
				</Card>
			</form>
			{openNotification && <StatusMessage color="green" message={statusMessage.message} />}
		</Box>
	);
};

export default AddExamples;
