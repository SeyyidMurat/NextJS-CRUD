import React, { useState } from "react";
import { Table, Text, Group, Button } from "@mantine/core";
import { useRouter } from "next/router";
import EditModal from "./EditModal";
import api from "../services/api";

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

	const [editModal, setEditModal] = useState(false);
	const [selectWord, setSelectWord] = useState();

	const deleteWord = async (id) => {
		const { data } = await api.delete(`/api/words/${id}`);
		router.push(`${currentPath}`);
		console.log(data);
	};
	const editWord = (item) => {
		setEditModal(true);
		setSelectWord(item);
	};

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
								<Text className="hidden-text">{item.word}</Text>
							</td>
							<td>
								<Text className="hidden-text">{`( ${item.pronunciation} )`}</Text>
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
										onClick={() => editWord(item)}
									>
										Edit
									</Button>
								</Group>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			{editModal && <EditModal opened={editModal} onClose={() => setEditModal(false)} selectWord={selectWord} />}
		</div>
	);
};

export default WordTable;
