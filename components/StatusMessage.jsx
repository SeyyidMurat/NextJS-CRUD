import React from "react";
import { Notification, Box } from "@mantine/core";
const StatusMessage = ({ message, color }) => {
	return (
		<Box sx={{ position: "fixed", bottom: "50px", right: "50px" }}>
			<Notification title={message} color={color} />
		</Box>
	);
};

export default StatusMessage;
