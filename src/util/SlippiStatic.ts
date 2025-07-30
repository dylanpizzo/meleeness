const rankImages = {
	none: "https://slippi.gg/static/media/rank_Unranked1.ac2623299b250689293cd4a5e68fcc5b.svg",
	pending:
		"https://slippi.gg/static/media/rank_Unranked3.0f639e8b73090a7ba4a50f7bcc272f57.svg",
	bronze1: "",
	bronze2: "",
	bronze3:
		"https://slippi.gg/static/media/rank_Bronze_III.b44c3a06f14234dec6f67e9b28088a6f.svg",
	silver1:
		"https://slippi.gg/static/media/rank_Silver_I.b8069dd847a639127f6d3ff5363623f7.svg",
	silver2:
		"https://slippi.gg/static/media/rank_Silver_II.7a97ee32770c36e78d9d7e9279c7ce38.svg",
	silver3:
		"https://slippi.gg/static/media/rank_Silver_III.93588af0e9a6bc9406209d5ef3cc9dc7.svg",
	gold1: "https://slippi.gg/static/media/rank_Gold_I.523b488f06ff22aaa013e94b6178f157.svg",
	gold2: "https://slippi.gg/static/media/rank_Gold_II.951fc625063425ed048c864988e8d7b7.svg",
	gold3: "https://slippi.gg/static/media/rank_Gold_III.38643ad9dbef534920fc2361fd736d7a.svg",
	platinum1:
		"https://slippi.gg/static/media/rank_Platinum_I.7a22c1a7c7640af6b6bf2f7b5b439fc6.svg",
	platinum2:
		"https://slippi.gg/static/media/rank_Platinum_II.ec1c571c896ed47ef2b14d8e2dd79fef.svg",
	platinum3:
		"https://slippi.gg/static/media/rank_Platinum_III.cd9d7a413a1de2182caaae563b4e5023.svg",
	diamond1:
		"https://slippi.gg/static/media/rank_Diamond_I.bcc6237a1e6be861f22f330bbff96964.svg",
	diamond2:
		"https://slippi.gg/static/media/rank_Diamond_II.2f26cd8248bcf6c34ea1efe7f835b123.svg",
	diamond3:
		"https://slippi.gg/static/media/rank_Diamond_III.ae3a5720a6ed48594efef54249095001.svg",
	master1:
		"https://slippi.gg/static/media/rank_Master_I.0ce2459fedf9e33ebee0cb3520a17e2f.svg",
	master2:
		"https://slippi.gg/static/media/rank_Master_II.c0b5472d49d391d2063d8e2a19c9ea17.svg",
	master3:
		"https://slippi.gg/static/media/rank_Master_III.5075fd077bf77bfa6c59985252e0cb04.svg",
	grandmaster:
		"https://slippi.gg/static/media/rank_Grand_Master.0f3bc5674e8ec76f17514f197242c4fa.svg",
};

export const ranks: {
	key: string;
	name: string;
	color?: string;
	image?: string;
}[] = [
	{ key: "none", name: "None" },
	{ key: "banned", name: "Banned" },
	{ key: "pending", name: "Pending" },
	{ key: "bronze1", name: "Bronze 1", color: "#E06A36" },
	{ key: "bronze2", name: "Bronze 2", color: "#E06A36" },
	{ key: "bronze3", name: "Bronze 3", color: "#E06A36" },
	{ key: "silver1", name: "Silver 1", color: "#B5A5B7" },
	{ key: "silver2", name: "Silver 2", color: "#B5A5B7" },
	{ key: "silver3", name: "Silver 3", color: "#B5A5B7" },
	{ key: "gold1", name: "Gold 1", color: "#F6A51E" },
	{ key: "gold2", name: "Gold 2", color: "#F6A51E" },
	{ key: "gold3", name: "Gold 3", color: "#F6A51E" },
	{ key: "plat1", name: "Platinum 1", color: "#91E8E0" },
	{ key: "plat2", name: "Platinum 2", color: "#91E8E0" },
	{ key: "plat3", name: "Platinum 3", color: "#91E8E0" },
	{
		key: "diamond1",
		name: "Diamond 1",
		color: "#5DDFF4",
	},
	{
		key: "diamond2",
		name: "Diamond 2",
		color: "#5DDFF4",
	},
	{
		key: "diamond3",
		name: "Diamond 3",
		color: "#5DDFF4",
	},
	{ key: "master1", name: "Master 1", color: "#6847BA" },
	{ key: "master2", name: "Master 2", color: "#6847BA" },
	{ key: "master3", name: "Master 3", color: "#6847BA" },
	{
		key: "grandmaster",
		name: "Grandmaster",
		color: "#E51D13",
	},
];

Object.entries(rankImages).forEach(([key, value]) => {
	const rank = ranks.find((rank) => rank.key === key);
	if (rank) {
		rank.image = value;
	}
});

export const getRank = (elo: number, top: boolean, numGames: number) =>
	0 === numGames
		? ranks[0]
		: numGames < 5
		? ranks[2]
		: elo >= 2191.75 && top
		? ranks[21]
		: elo >= 2350
		? ranks[20]
		: elo >= 2275
		? ranks[19]
		: elo >= 2191.75
		? ranks[18]
		: elo >= 2136.28
		? ranks[17]
		: elo >= 2073.67
		? ranks[16]
		: elo >= 2003.92
		? ranks[15]
		: elo >= 1927.03
		? ranks[14]
		: elo >= 1843
		? ranks[13]
		: elo >= 1751.83
		? ranks[12]
		: elo >= 1653.52
		? ranks[11]
		: elo >= 1548.07
		? ranks[10]
		: elo >= 1435.48
		? ranks[9]
		: elo >= 1315.75
		? ranks[8]
		: elo >= 1188.88
		? ranks[7]
		: elo >= 1054.87
		? ranks[6]
		: elo >= 913.72
		? ranks[5]
		: elo >= 765.43
		? ranks[4]
		: ranks[3];
