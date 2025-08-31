import { getSavedSlippiData } from "@/util/getSavedSlippiData";

// The contents depend on dynamic values
export const dynamic = "force-dynamic";

export async function GET() {
	return Response.json({
		data: await getSavedSlippiData(),
		time: Date.now(),
	});
}
