import { useState } from "react";
import { InputWrapper, Input, Stack, Button, Modal } from "@mantine/core";
import api from "../services/api";

const EditModal = (props) => {
	const [ınputValues, setInputValues] = useState(props.selectWord);
	const { _id, word, meaning, pronunciation, wordType } = ınputValues;
	console.log(ınputValues);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputValues((ınputValues) => ({ ...ınputValues, [name]: value }));
	};

	const handleSubmit = async () => {
		const { data } = await api.put(`/api/words/update/${_id}`, { wordType, word, meaning, pronunciation });
		console.log(data);
		props.onClose();
	};

	return (
		<Modal opened={props.opened} onClose={props.onClose}>
			<form onSubmit={handleSubmit}>
				<Stack spacing="xl">
					<InputWrapper id="input-word" label="Enter Word">
						<Input
							id="input-word"
							name="word"
							placeholder="Enter Word"
							value={word}
							onChange={handleChange}
							required
						/>
					</InputWrapper>
					<InputWrapper id="input-meaning" label="Meaning ">
						<Input
							id="input-meaning"
							name="meaning"
							placeholder="Meaning"
							value={meaning}
							onChange={handleChange}
							required
						/>
					</InputWrapper>
					<InputWrapper id="input-pronunciation" label="Pronunciation">
						<Input
							id="input-spoken"
							name="pronunciation"
							placeholder="Pronunciation"
							value={pronunciation}
							onChange={handleChange}
							required
						/>
					</InputWrapper>
					<Button type="submit" variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
						Edit Word
					</Button>
				</Stack>
			</form>
		</Modal>
	);
};

export default EditModal;
