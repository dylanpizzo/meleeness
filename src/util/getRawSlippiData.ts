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
	__dataFormat: "raw_1";
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
	const body = {
		operationName: "UserProfilePageQuery",
		variables: {
			uid: code,
			cc: code,
		},
		query,
	};
	const response = await fetch("https://internal.slippi.gg/graphql", {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const { data } = await response.json();
	console.log(JSON.stringify(data));
	return { ...data, __dataFormat: "raw_1" };
};
