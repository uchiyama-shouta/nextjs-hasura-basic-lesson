import type { NextPage } from "next";
import { LocalStateB } from "src/components/LocalStateB";
import { Layout } from "src/components/layout/Layout";

const LocalStatePageB: NextPage = () => {
	return (
		<Layout title="Local State B">
			<LocalStateB />
		</Layout>
	);
};
export default LocalStatePageB;
