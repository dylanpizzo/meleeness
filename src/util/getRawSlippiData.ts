const query = `
  fragment profileFields on NetplayProfile {
    id
    ratingOrdinal
    ratingUpdateCount
    wins
    losses
    dailyGlobalPlacement
    dailyRegionalPlacement
    continent
    characters {
      character
      gameCount
    }
  }

  fragment userProfilePage on User {
    fbUid
    displayName
    connectCode {
      code
    }
    status
    activeSubscription {
      level
      hasGiftSub
    }
    rankedNetplayProfile {
      ...profileFields
    }
    rankedNetplayProfileHistory {
      ...profileFields
      season {
        id
        startedAt
        endedAt
        name
        status
      }
    }
  }

  query UserProfilePageQuery($cc: String, $uid: String) {
    getUser(fbUid: $uid, connectCode: $cc) {
      ...userProfilePage
    }
  }
`;

export type RawSlippiData = {
	getUser: {
		fbUid: string;
		displayName: string;
		connectCode: { code: string };
		status: string;
		activeSubscription: { level: string; hasGiftSub: boolean };
		rankedNetplayProfile: {
			id: string;
			ratingOrdinal: number;
			ratingUpdateCount: number;
			wins: number;
			losses: number;
			dailyGlobalPlacement: number | null;
			dailyRegionalPlacement: number | null;
			continent: string;
			characters: { character: string; gameCount: number }[];
		};
		rankedNetplayProfileHistory: {
			id: string;
			ratingOrdinal: number;
			ratingUpdateCount: number;
			wins: number;
			losses: number;
			dailyGlobalPlacement: number | null;
			dailyRegionalPlacement: number | null;
			continent: string;
			characters: { character: string; gameCount: number }[];
			season: {
				id: string;
				startedAt: string;
				endedAt: string;
				name: string;
				status: string;
			};
		}[];
	};
};

export const getRawSlippiData = async (
	code: string
): Promise<RawSlippiData> => {
	// const body = {
	// 	operationName: "UserProfilePageQuery",
	// 	variables: {
	// 		uid: code,
	// 		cc: code,
	// 	},
	// 	query,
	// };
	// const response = await fetch("https://internal.slippi.gg/graphql", {
	// 	method: "POST",
	// 	body: JSON.stringify(body),
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// });
	// const { data } = await response.json();
	// console.log(JSON.stringify(data));
	// return data;
	return {
		getUser: {
			fbUid: "hsao2ikCrNb8yijddAj6tHmyIbE3",
			displayName: "burgergirl281",
			connectCode: { code: "SALT#747" },
			status: "ACTIVE",
			activeSubscription: { level: "TIER1", hasGiftSub: false },
			rankedNetplayProfile: {
				id: "RANKED_SINGLES-hsao2ikCrNb8yijddAj6tHmyIbE3-season-3",
				ratingOrdinal: 2935.8581072790985,
				ratingUpdateCount: 346,
				wins: 340,
				losses: 6,
				dailyGlobalPlacement: 1,
				dailyRegionalPlacement: 1,
				continent: "NORTH_AMERICA",
				characters: [
					{ character: "CAPTAIN_FALCON", gameCount: 609 },
					{ character: "FOX", gameCount: 19 },
					{ character: "FALCO", gameCount: 89 },
					{ character: "SHEIK", gameCount: 2 },
					{ character: "GANONDORF", gameCount: 2 },
					{ character: "ROY", gameCount: 5 },
					{ character: "JIGGLYPUFF", gameCount: 3 },
					{ character: "PIKACHU", gameCount: 1 },
					{ character: "DR_MARIO", gameCount: 1 },
					{ character: "LINK", gameCount: 1 },
					{ character: "LUIGI", gameCount: 1 },
				],
			},
			rankedNetplayProfileHistory: [
				{
					id: "RANKED_SINGLES-hsao2ikCrNb8yijddAj6tHmyIbE3-season-2",
					ratingOrdinal: 2713.5048269692197,
					ratingUpdateCount: 168,
					wins: 156,
					losses: 12,
					dailyGlobalPlacement: 11,
					dailyRegionalPlacement: 11,
					continent: "NORTH_AMERICA",
					characters: [
						{ character: "CAPTAIN_FALCON", gameCount: 328 },
						{ character: "FOX", gameCount: 25 },
						{ character: "FALCO", gameCount: 11 },
						{ character: "SHEIK", gameCount: 1 },
					],
					season: {
						id: "season-2",
						startedAt: "2024-10-14T15:30:33.823Z",
						endedAt: "2025-04-21T14:17:57.718Z",
						name: "Season 2",
						status: "COMPLETED",
					},
				},
				{
					id: "RANKED_SINGLES-hsao2ikCrNb8yijddAj6tHmyIbE3-season-1",
					ratingOrdinal: 2941.753747,
					ratingUpdateCount: 599,
					wins: 572,
					losses: 27,
					dailyGlobalPlacement: 1,
					dailyRegionalPlacement: 1,
					continent: "NORTH_AMERICA",
					characters: [
						{ character: "CAPTAIN_FALCON", gameCount: 1056 },
						{ character: "FALCO", gameCount: 141 },
						{ character: "FOX", gameCount: 75 },
						{ character: "MARTH", gameCount: 13 },
						{ character: "ROY", gameCount: 1 },
						{ character: "DONKEY_KONG", gameCount: 2 },
						{ character: "SHEIK", gameCount: 1 },
						{ character: "YOSHI", gameCount: 1 },
					],
					season: {
						id: "season-1",
						startedAt: "2024-04-15T13:55:43.903Z",
						endedAt: "2024-10-14T15:30:33.823Z",
						name: "Season 1",
						status: "COMPLETED",
					},
				},
				{
					id: "RANKED_SINGLES-hsao2ikCrNb8yijddAj6tHmyIbE3-beta-season-2",
					ratingOrdinal: 2896.626352,
					ratingUpdateCount: 1192,
					wins: 1083,
					losses: 109,
					dailyGlobalPlacement: 3,
					dailyRegionalPlacement: 3,
					continent: "NORTH_AMERICA",
					characters: [
						{ character: "CAPTAIN_FALCON", gameCount: 1689 },
						{ character: "FALCO", gameCount: 693 },
						{ character: "FOX", gameCount: 271 },
						{ character: "ROY", gameCount: 4 },
						{ character: "SHEIK", gameCount: 23 },
						{ character: "MARTH", gameCount: 7 },
						{ character: "LUIGI", gameCount: 1 },
					],
					season: {
						id: "beta-season-2",
						startedAt: "2023-07-11T20:20:52.73Z",
						endedAt: "2024-04-15T13:55:43.903Z",
						name: "Beta Season 2",
						status: "COMPLETED",
					},
				},
				{
					id: "RANKED_SINGLES-hsao2ikCrNb8yijddAj6tHmyIbE3-beta-season",
					ratingOrdinal: 2518.340492,
					ratingUpdateCount: 969,
					wins: 831,
					losses: 138,
					dailyGlobalPlacement: 147,
					dailyRegionalPlacement: null,
					continent: "NORTH_AMERICA",
					characters: [
						{ character: "GAME_AND_WATCH", gameCount: 1 },
						{ character: "BOWSER", gameCount: 1 },
						{ character: "FOX", gameCount: 135 },
						{ character: "FALCO", gameCount: 657 },
						{ character: "ICE_CLIMBERS", gameCount: 7 },
						{ character: "LUIGI", gameCount: 1 },
						{ character: "CAPTAIN_FALCON", gameCount: 1096 },
						{ character: "SHEIK", gameCount: 73 },
						{ character: "PIKACHU", gameCount: 11 },
						{ character: "DR_MARIO", gameCount: 4 },
						{ character: "MARTH", gameCount: 66 },
						{ character: "JIGGLYPUFF", gameCount: 11 },
						{ character: "ROY", gameCount: 11 },
						{ character: "NESS", gameCount: 1 },
						{ character: "YOSHI", gameCount: 2 },
						{ character: "MARIO", gameCount: 5 },
						{ character: "DONKEY_KONG", gameCount: 11 },
						{ character: "MEWTWO", gameCount: 1 },
						{ character: "GANONDORF", gameCount: 8 },
						{ character: "SAMUS", gameCount: 2 },
						{ character: "PEACH", gameCount: 16 },
						{ character: "ZELDA", gameCount: 6 },
					],
					season: {
						id: "beta-season",
						startedAt: "2022-12-12T17:09:03.62Z",
						endedAt: "2023-07-11T20:20:52.73Z",
						name: "Beta Season",
						status: "COMPLETED",
					},
				},
			],
		},
	};
};
