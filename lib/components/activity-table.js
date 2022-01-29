import React, { useMemo } from "react";
import moment from "moment";
import ActivityRow from "./activity-row";
import { useActivities } from "../utils";
import styles from "../../styles/activity-table.module.css";

function ActivityTable() {
	const { activities, mutateActivities } = useActivities();
	const sortedActivities = useMemo(() => {
		return [...activities].sort((a, b) => {
			if (!a.last) return -1;
			if (!b.last) return 1;
			return moment(a.last).isAfter(moment(b.last)) ? 1 : -1;
		});
	}, [activities]);
	function handleEngageClick(activity) {
		mutateActivities(
			activities.map(a => {
				// TODO use an id so we don't have to worry about name uniqueness
				if (a.name === activity.name) a.last = moment().format();
				return a;
			})
		);
	}
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
					{sortedActivities.map((activity, idx) => {
						return (
							<ActivityRow key={idx}
								activity={activity}
								onEngageClick={handleEngageClick} />
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default ActivityTable;
