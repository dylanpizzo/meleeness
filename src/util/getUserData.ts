import { getRawSlippiData } from "./getRawSlippiData";

export type UserData = {
	tag: string;
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

export const getUserData = async (
	code: string,
	tag: string
): Promise<UserData> => {
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
	return {
		tag,
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
};
