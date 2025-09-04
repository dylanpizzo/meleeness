import { createClient } from "@/util/supabase/server";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
	const supabase = await createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div>
			<h1 className="text-xl font-semibold">Welcome</h1>
			<pre className="mt-4 rounded bg-gray-100 p-4 text-sm">
				{JSON.stringify({ user }, null, 2)}
			</pre>
		</div>
	);
}
