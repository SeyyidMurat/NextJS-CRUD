import { useState } from "react";
import { InputWrapper, Input, Stack, Button, Modal } from "@mantine/core";
import api from "../services/api";

const EditModal = (props) => {
	const [ınputValues, setInputValues] = useState(props.selectWord);
	console.log(ınputValues);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputValues((ınputValues) => ({ ...ınputValues, [name]: value }));
	};

	const handleSubmit = async (e) => {
		const { data } = await api.put(`/api/words/${ınputValues._id}`, ınputValues);
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
							value={ınputValues.word}
							onChange={handleChange}
							required
						/>
					</InputWrapper>
					<InputWrapper id="input-meaning" label="Meaning ">
						<Input
							id="input-meaning"
							name="meaning"
							placeholder="Meaning"
							value={ınputValues.meaning}
							onChange={handleChange}
							required
						/>
					</InputWrapper>
					<InputWrapper id="input-pronunciation" label="Pronunciation">
						<Input
							id="input-spoken"
							name="pronunciation"
							placeholder="Pronunciation"
							value={ınputValues.pronunciation}
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
