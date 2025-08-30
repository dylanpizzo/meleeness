import styles from "./page.module.css";
import { Metadata } from "next";
import { getSavedSlippiData } from "@/util/getSavedSlippiData";
import SlippiLeaderboard from "@/components/SlippiLeaderboard/SlippiLeaderboard";
import { Suspense } from "react";

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

export default async function Leaderboard() {
	const initialRawData = await getSavedSlippiData();
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
				<SlippiLeaderboard initialRawData={initialRawData} />
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
