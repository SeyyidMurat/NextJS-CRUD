import React from "react";
import { AppShell, Navbar, Header } from "@mantine/core";
import { Navbar as MainNavbar } from "./Sidebar";
import { Header as MainHeader } from "./Header";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
	const router = useRouter();
	const isNavbar =
		router.pathname !== "/examples" ? (
			<Navbar sx={{ position: "sticky", top: "60px", width: "300px" }} p="xs">
				<MainNavbar />
			</Navbar>
		) : null;

	return (
		<AppShell
			navbar={isNavbar}
			header={
				<Header height={60} sx={{ position: "sticky", top: "0" }} p="xs">
					<MainHeader />
				</Header>
			}
			styles={(theme) => ({
				main: { backgroundColor: theme.colors.gray[0] },
			})}
		>
			{children}
		</AppShell>
	);
};

export default Layout;
