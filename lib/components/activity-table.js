import React from "react";
import ActivityRow from "./activity-row";
import styles from "../../styles/activity-table.module.css";

function ActivityTable(props) {
	const { activities } = props;
	return (
		<div className={styles.activityTable}>
			<table>
				<thead>
					<tr>
						<th scope="col">Activity</th>
						<th scope="col">Last Engaged</th>
					</tr>
				</thead>
				<tbody>
					{activities.map(activity => <ActivityRow key={activity.name} activity={activity} />)}
				</tbody>
			</table>
		</div>
	);
}

export default ActivityTable;
