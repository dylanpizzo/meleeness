import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";
import SlippiUser from "@/components/SlippiUser/SlippiUser";
import { Metadata } from "next";
import { getSavedSlippiData } from "@/util/getSavedSlippiData";
import { formatUserData } from "@/util/formatUserData";

export const metadata: Metadata = {
	title: "Ness Leaderboard",
};

// The contents depend on dynamic values
// TODO: maybe fetch this data client side?
export const dynamic = "force-dynamic";

export default async function Leaderboard() {
	const allData = (await getSavedSlippiData())
		.map((rawData) => formatUserData(rawData))
		.sort((a, b) => b.elo - a.elo);
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				{allData.map((userData) => (
					<SlippiUser key={userData.code} userData={userData} />
				))}
			</main>
		</div>
	);
}
