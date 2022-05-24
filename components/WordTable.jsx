import React from "react";
import { Table, Text, Group, Button } from "@mantine/core";
import api from "../services/api";
import { useRouter } from "next/router";

const tableHead = [
	{ id: 1, title: "Word Type" },
	{ id: 2, title: "Word" },
	{ id: 3, title: "Pronunciation" },
	{ id: 4, title: "Meaning" },
	{ id: 5, title: "Actions" },
];

const WordTable = (props) => {
	const router = useRouter();
	const currentPath = router.asPath;

	const deleteWord = async (id) => {
		const { data } = await api.delete(`/api/words/${id}`);
		router.push(`${currentPath}`);
		console.log(data);
	};

	const hiddenText = () => ({
		opacity: "0",
		color: "red",
		fontSize: "18",
		fontWeight: "700",
		transition: "opacity 250ms ease-in-out",
		cursor: "pointer",

		"&:hover": {
			opacity: 1,
		},
	});

	return (
		<div>
			<Table verticalSpacing="md" fontSize="md" highlightOnHover>
				<thead>
					<tr>
						{tableHead.map((head) => (
							<th key={head.id}>{head.title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{props.item.map((item) => (
						<tr key={item._id}>
							<td>{item.wordType}</td>
							<td>
								<Text sx={hiddenText}>{item.word}</Text>
							</td>
							<td>
								<Text sx={hiddenText}>{`( ${item.pronunciation} )`}</Text>
							</td>
							<td>
								<Text color="indigo" weight={700} size="lg">
									{item.meaning}
								</Text>
							</td>
							<td>
								<Group>
									<Button
										variant="outline"
										color="gray"
										size="xs"
										radius="xl"
										onClick={() => deleteWord(item._id)}
									>
										Delete
									</Button>
									<Button
										variant="outline"
										color="gray"
										size="xs"
										radius="xl"
										/* onClick={() => editWord(subitem)} */
									>
										Edit
									</Button>
								</Group>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default WordTable;
