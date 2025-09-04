"use client";

import { useState } from "react";
import { createClient } from "@/util/supabase/client";

export default function LoginPage() {
	const [loading, setLoading] = useState(false);

	async function signInWithDiscord() {
		setLoading(true);
		const supabase = createClient();
		// Redirect back to your Next.js route handler that handles the code exchange:
		const redirectTo = `${window.location.origin}/auth/callback`;
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "discord",
			options: { redirectTo },
		});
		if (error) {
			console.error(error);
			setLoading(false);
		}
		// On success, the browser will navigate away to Discord; no further code here runs.
	}

	return (
		<main className="mx-auto max-w-md p-8 space-y-6">
			<h1 className="text-2xl font-semibold">Sign in</h1>
			<button
				onClick={signInWithDiscord}
				disabled={loading}
				className="rounded-lg px-4 py-2 border"
			>
				{loading ? "Redirecting…" : "Continue with Discord"}
			</button>
		</main>
	);
}
