"use client";

import SlippiUser from "@/components/SlippiUser/SlippiUser";
import { formatUserData } from "@/util/formatUserData";
import type { RawSlippiData } from "@/util/getRawSlippiData";
import { useEffect, useState } from "react";

export default function SlippiLeaderboard(props: {
	initialRawData: RawSlippiData[];
}) {
	const { initialRawData } = props;
	const [allRawData, setAllRawData] = useState(initialRawData);
	const allData = allRawData
		.map((rawData) => formatUserData(rawData))
		.filter(
			(data) =>
				data.totalSets >= 5 &&
				data.nessPercent &&
				data.nessPercent >= 0.5
		)
		.sort((a, b) => b.elo - a.elo);

	useEffect(() => {
		let prevRerender = Date.now();
		const interval = setInterval(async () => {
			if (
				new Date(Date.now()).getHours() !==
				new Date(prevRerender).getHours()
			) {
				const newData: { time: number; data: RawSlippiData[] } = await (
					await fetch("/api/get-saved-slippi-data")
				).json();
				if (newData.time > prevRerender) {
					prevRerender = newData.time;
					setAllRawData(newData.data);
				}
			}
		}, 60 * 1000);
		return () => {
			clearInterval(interval);
		};
	});

	return (
		<>
			{allData.map((userData) => (
				<SlippiUser key={userData.code} userData={userData} />
			))}
		</>
	);
}
