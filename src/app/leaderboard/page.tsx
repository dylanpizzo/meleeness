import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";
import SlippiUser from "@/components/SlippiUser/SlippiUser";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ness Leaderboard",
};

export default async function Leaderboard() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<SlippiUser userCode="ZAIN#0" userTag="Zain" />
				<SlippiUser userCode="SALT#747" userTag="Salt" />
			</main>
		</div>
	);
}
