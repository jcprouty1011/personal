import React from "react";

function ActivityRow(props) {
	const { activity } = props;
	// TODO handle name undefined
	return (
		<tr>
			<td>{activity.name}</td>
			<td>{activity.last || "Never"}</td>
		</tr>
	);
}

export default ActivityRow;
