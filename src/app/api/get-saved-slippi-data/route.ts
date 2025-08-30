import { getSavedSlippiData } from "@/util/getSavedSlippiData";

export async function GET() {
	return Response.json({
		data: await getSavedSlippiData(),
		time: Date.now(),
	});
}
