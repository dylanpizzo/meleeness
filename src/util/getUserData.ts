import { getRawSlippiData } from "./getRawSlippiData";

export type UserData = {
	code: string;
	displayName: string;
	dailyGlobalPlacement: number;
	dailyRegionalPlacement: number;
	elo: number;
	losses: number;
	totalSets: number;
	continent: string;
	nessPercent: number | null;
};

export const getUserData = async (code: string): Promise<unknown> => {
	const data = await getRawSlippiData(code);
	const user = data.getUser;
	const rankedProfile = user.rankedNetplayProfile;
	const nessPercent =
		(rankedProfile.characters.find(
			(c: { character: string; gameCount: number }) =>
				c.character === "NESS"
		)?.gameCount ?? 0) /
		rankedProfile.characters.reduce(
			(accum: number, curr: { gameCount: number }) =>
				accum + curr.gameCount,
			0
		);
	const info = {
		code,
		displayName: user.displayName,
		dailyGlobalPlacement: rankedProfile.dailyGlobalPlacement,
		dailyRegionalPlacement: rankedProfile.dailyRegionalPlacement,
		elo: rankedProfile.ratingOrdinal,
		losses: rankedProfile.losses,
		wins: rankedProfile.wins,
		totalSets: rankedProfile.ratingUpdateCount,
		continent: rankedProfile.continent,
		nessPercent: nessPercent === nessPercent ? nessPercent : null,
	};
	return info;
};
