import { getUserData, type UserData } from "@/util/getUserData";
import { getRank } from "@/util/SlippiStatic";
import styles from "./SlippiUser.module.css";

export default async function SlippiUser(props: {
	userCode: string;
	userTag: string;
}) {
	const userData = await getUserData(props.userCode, props.userTag);
	const top = (userData.dailyGlobalPlacement ?? 0) <= 300;
	const rankInfo = getRank(userData.elo, top, userData.totalSets);
	return (
		<a
			className={styles["player-row"] + " " + styles.a}
			style={
				{
					"--rank-color": rankInfo.color,
				} as React.CSSProperties
			}
			href={`https://slippi.gg/user/${userData.code.replace("#", "-")}`}
		>
			<div className={styles["rating-container"]}>
				<div className={styles["rating-image"]}>
					<img
						src={`${rankInfo.image}`}
						alt={`${rankInfo.name}`}
					></img>
				</div>
				<span className={styles.elo}>{userData.elo.toFixed(1)}</span>
			</div>
			<div className={styles["name-container"]}>
				<div className={styles["player-tag"]}>{userData.tag}</div>
				<div className={styles["slippi-player"]}>
					{userData.displayName} ({userData.code})
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles["win-loss"]}>
					<span className={styles.wins}>{userData.wins ?? 0}</span> /{" "}
					<span className={styles.losses}>
						{userData.losses ?? 0}
					</span>
				</div>
				<span
					className={
						styles.nessiness +
						" " +
						(userData.nessPercent === null
							? styles["nessiness-null"]
							: userData.nessPercent < 0.5
							? styles["nessiness-bad"]
							: userData.nessPercent < 0.8
							? styles["nessiness-okay"]
							: userData.nessPercent < 1
							? styles["nessiness-good"]
							: "")
					}
				>
					{userData.nessPercent === null
						? ""
						: (userData.nessPercent * 100).toFixed(0) + "%"}
					<img
						className={styles.nessicon}
						src="https://slippi.gg/images/characters/stock-icon-11-0.png"
					></img>
				</span>
			</div>
		</a>
	);
}
