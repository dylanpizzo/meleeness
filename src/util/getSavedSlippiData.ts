import type { RawSlippiData } from "./getRawSlippiData";
import { createMasterClient } from "./supabase/master";
import * as _ from "lodash";

export const getSavedSlippiData = async (): Promise<RawSlippiData[]> => {
	const supabase = await createMasterClient();
	const { data } = await supabase.from("slippi_user_data").select();
	if (!data) {
		return [];
	} else {
		return Object.values(_.groupBy(data, "slippi_user")).map(
			(userData) =>
				userData.toSorted(
					(a, b) => Date.parse(b.time) - Date.parse(a.time)
				)[0].slippi_data
		);
	}
};
