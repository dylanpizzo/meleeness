import styles from "./page.module.css";
import SlippiUser from "@/components/SlippiUser/SlippiUser";
import { Metadata } from "next";
import { getSavedSlippiData } from "@/util/getSavedSlippiData";
import { formatUserData } from "@/util/formatUserData";

export const metadata: Metadata = {
	title: "Ness Leaderboard",
	openGraph: {
		type: "website",
		url: "https://meleeness.com/leaderboard",
		title: "Ness Leaderboard",
		description: "A leaderboard for Slippi Nesses. Who's the best Ness?",
		images: [{ url: "https://meleeness.com/assets/nessrank.png" }],
	},
};

// The contents depend on dynamic values
// TODO: maybe fetch this data client side?
export const dynamic = "force-dynamic";

export default async function Leaderboard() {
	const allData = (await getSavedSlippiData())
		.map((rawData) => formatUserData(rawData))
		.filter(
			(data) =>
				data.totalSets >= 5 &&
				data.nessPercent &&
				data.nessPercent >= 0.5
		)
		.sort((a, b) => b.elo - a.elo);
	return (
		<div className={styles.page}>
			<div className={styles.title}>
				<img
					className={styles.nessicon}
					src="https://slippi.gg/images/characters/stock-icon-11-0.png"
				></img>{" "}
				Ness Leaderboard
			</div>
			<main className={styles.main}>
				{allData.map((userData) => (
					<SlippiUser key={userData.code} userData={userData} />
				))}
			</main>
			<div className={styles.footer}>
				Join the{" "}
				<a
					className={styles.link}
					href="https://discord.gg/011MSaTVv85tRjQWO"
				>
					Nesscord
				</a>{" "}
				for more Ness!
			</div>
		</div>
	);
}
