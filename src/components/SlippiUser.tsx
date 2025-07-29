import { getUserData } from "@/util/getUserData";

export default async function SlippiUser(props: { userCode: string }) {
	const userData = await getUserData(props.userCode);
	console.log(userData);
	return <div>SlippiUser</div>;
}
