import { getUserData, type UserData } from "@/util/getUserData";
import { getRank } from "@/util/SlippiStatic";

export default async function SlippiUser(props: {
	userCode: string;
	userTag: string;
}) {
	const userData = await getUserData(props.userCode, props.userTag);
	console.log(userData);
	const top = (userData.dailyGlobalPlacement ?? 0) <= 300;
	const rankInfo = getRank(userData.elo, top, userData.totalSets);
	console.log(rankInfo);
	return (
		<a
			className={`player-row`}
			style={
				{
					"--rank-color": rankInfo.color,
				} as any
			}
			href={`https://slippi.gg/user/${userData.code.replace("#", "-")}`}
		>
			<div className="rating-container">
				<div className="rating-image">
					<img
						src={`${rankInfo.image}`}
						alt={`${rankInfo.name}`}
					></img>
				</div>
				<span className="elo">{userData.elo.toFixed(1)}</span>
			</div>
			<div className="name-container">
				<div className="player-tag">{userData.tag}</div>
				<div className="slippi-player">
					{userData.displayName} ({userData.code})
				</div>
			</div>
			<div className="right">
				<div className="win-loss">
					<span className="wins">{userData.wins ?? 0}</span> /{" "}
					<span className="losses">{userData.losses ?? 0}</span>
				</div>
				<span
					className={`nessiness ${
						userData.nessPercent === null
							? "nessiness-null"
							: userData.nessPercent < 0.5
							? "nessiness-bad"
							: userData.nessPercent < 0.8
							? "nessiness-okay"
							: userData.nessPercent < 1
							? "nessiness-good"
							: ""
					}`}
				>
					{userData.nessPercent === null
						? ""
						: (userData.nessPercent * 100).toFixed(0) + "%"}
					<img
						className="nessicon"
						src="https://slippi.gg/images/characters/stock-icon-11-0.png"
					></img>
				</span>
			</div>
		</a>
	);
}
