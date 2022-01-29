import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styles from "../../styles/activity-table.module.css";

function ActivityRow(props) {
	const { activity, onEngageClick } = props;
	const engagedToday = !!activity.last && moment(activity.last).isSame(moment(), "day");
	return (
		<tr className={engagedToday ? styles.engagedToday : ""}>
			<td>{activity.name || "Unnamed Activity"}</td>
			<td>{activity.last || "Never"}</td>
			<td>
				<button onClick={() => onEngageClick(activity)}>Engage</button>
			</td>
		</tr>
	);
}

ActivityRow.propTypes = {
	activity: PropTypes.shape({
		name: PropTypes.string,
		last: PropTypes.string
	}).isRequired,
	onEngageClick: PropTypes.func.isRequired
}

export default ActivityRow;
