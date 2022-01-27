import React from "react";
import styles from "../../styles/page-wrapper.module.css";

function PageWrapper(props) {
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
		    <span className={styles.title}>Jeff&apos;s Projects</span>
				<span>Demo Mode</span>
			</header>
			<main className={styles.main}>
				{props.children}
			</main>
		</div>
	);
}

export default PageWrapper;
