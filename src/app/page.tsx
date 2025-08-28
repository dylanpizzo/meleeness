import { redirect } from "next/navigation";
// import { createClient } from "@/util/supabase/server";

export default async function Home() {
	redirect(`/leaderboard`);
	// const supabase = await createClient();
	// const { data: pages } = await supabase.from("pages").select();

	// return <pre>{JSON.stringify(pages, null, 2)}</pre>;
}
