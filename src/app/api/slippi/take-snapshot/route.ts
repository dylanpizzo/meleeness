import { getRawSlippiData } from "@/util/getRawSlippiData";
import { getSavedSlippiData } from "@/util/getSavedSlippiData";
import { createMasterClient } from "@/util/supabase/master";

// The contents depend on dynamic values
export const dynamic = "force-dynamic";

export async function GET() {
	const savedSlippiData = await getSavedSlippiData();

	const supabase = await createMasterClient();
	const { data: userRows } = await supabase.from("slippi_users").select();

	if (!userRows) {
		return Response.json({ error: "Couldn't get user rows." });
	}

	await Promise.all(
		userRows.map(async (userRow) => {
			const slippiData = await getRawSlippiData(userRow.connect_code);
			const prevSlippiData = savedSlippiData.find(
				(x) => x.getUser.connectCode === slippiData.getUser.connectCode
			);
			const oldSlippiProfile =
				prevSlippiData?.getUser?.rankedNetplayProfile;
			const newSlippiProfile = slippiData.getUser.rankedNetplayProfile;

			if (
				!oldSlippiProfile ||
				oldSlippiProfile.ratingUpdateCount !==
					newSlippiProfile.ratingUpdateCount
			) {
				return await supabase.from("slippi_user_data").insert({
					slippi_user: userRow.id,
					slippi_data: slippiData,
				});
			}
		})
	);

	return Response.json({ done: true, userRows });
}
