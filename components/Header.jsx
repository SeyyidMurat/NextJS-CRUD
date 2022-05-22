import React from "react";
import Link from "next/link";
import { Title, Group, Anchor } from "@mantine/core";

export const Header = () => {
	return (
		<>
			<Group align="center" position="apart">
				<Title order={3}>Learn Word</Title>
				<Group>
					<Link href="/">
						<Anchor color="dark" size="lg" weight="500">
							Home
						</Anchor>
					</Link>
					<Link href="/add">
						<Anchor color="dark" size="lg" weight="500">
							Add Item
						</Anchor>
					</Link>
				</Group>
			</Group>
		</>
	);
};
