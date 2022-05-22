import React, { useState } from "react";
import { InputWrapper, Stack, Card, Button, Box, Textarea } from "@mantine/core";

const AddQuestions = () => {
	const [ınputValue, setInputValue] = useState({
		wordType: "questionExamples",
		word: "",
		meaning: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputValue((ınputValue) => ({ ...ınputValue, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setInputValue({ word: "", meaning: "" });
	};

	console.log(ınputValue);
	return (
		<Box sx={{ width: "360px" }}>
			<form onSubmit={handleSubmit}>
				<Card shadow="lg" p="lg">
					<Stack spacing="xl">
						<InputWrapper id="input-question" label="Question">
							<Textarea
								name="word"
								placeholder="Question"
								autosize
								minRows={2}
								required
								value={ınputValue.word}
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
		</Box>
	);
};

export default AddQuestions;
