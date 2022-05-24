import React from "react";
import { List, ListItem, Anchor, Stack } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
const sidebarElements = [
	{ id: 1, title: "Noun", path: "noun" },
	{ id: 2, title: "Verb", path: "verb" },
	{ id: 3, title: "Adjective", path: "adjective" },
	{ id: 4, title: "Pronoun", path: "pronoun" },
	{ id: 5, title: "Adverb", path: "adverb" },
	{ id: 6, title: "Preposition", path: "preposition" },
	{ id: 7, title: "Conjunction", path: "conjunction" },
	{ id: 8, title: "Branch English", path: "branchEnglish" },
];

export const Navbar = () => {
	const router = useRouter();
	const activeElement = sidebarElements.findIndex((item) => item.path === router.pathname);

	const listItemStyles = (theme, index) => ({
		backgroundColor: activeElement === index ? theme.colors.indigo[1] : null,
		padding: theme.spacing.xs,
	});

	return (
		<>
			<List listStyleType="none" component={Stack}>
				{sidebarElements.map((item, index) => (
					<ListItem key={index} sx={(theme) => listItemStyles(theme, index)}>
						<Link href={`/${item.path}`}>
							<Anchor color="indigo">{item.title}</Anchor>
						</Link>
					</ListItem>
				))}
			</List>
		</>
	);
};
