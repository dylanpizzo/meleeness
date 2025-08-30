import type { RawSlippiData } from "./getRawSlippiData";

export type UserData = {
	code: string;
	displayName: string;
	dailyGlobalPlacement: number | null;
	dailyRegionalPlacement: number | null;
	elo: number;
	wins: number;
	losses: number;
	totalSets: number;
	continent: string;
	nessPercent: number | null;
};

export const formatUserData = (data: RawSlippiData): UserData => {
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
	return {
		code: user.connectCode.code,
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
};
