import { NextPage } from "next";
import { Layout } from "src/components/layout/Layout";
import { CreateUser } from "src/components/CreateUser";

const HooksMemo: NextPage = () => {
	return (
		<Layout title="Hooks memo">
			<CreateUser />
		</Layout>
	);
};
export default HooksMemo;
