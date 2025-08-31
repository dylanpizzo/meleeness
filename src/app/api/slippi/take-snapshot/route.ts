import { getRawSlippiData } from "@/util/getRawSlippiData";
import { createMasterClient } from "@/util/supabase/master";

// The contents depend on dynamic values
export const dynamic = "force-dynamic";

export async function GET() {
	const supabase = await createMasterClient();
	const { data: userRows } = await supabase.from("slippi_users").select();

	if (!userRows) {
		return Response.json({ error: "Couldn't get user rows." });
	}

	await Promise.all(
		userRows.map(async (userRow) => {
			const slippiData = await getRawSlippiData(userRow.connect_code);
			return await supabase.from("slippi_user_data").insert({
				slippi_user: userRow.id,
				slippi_data: slippiData,
			});
		})
	);

	return Response.json({ done: true, userRows });
}
