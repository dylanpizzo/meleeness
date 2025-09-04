import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
	console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
	return createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
}
