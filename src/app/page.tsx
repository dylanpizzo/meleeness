// import { redirect } from "next/navigation";
import { createMasterClient } from "@/util/supabase/master";

export default async function Home() {
	const supabase = await createMasterClient();
	const { data: pages } = await supabase.from("pages").select();

	return <pre>{JSON.stringify(pages, null, 2)}</pre>;
}
