import type { NextPage } from "next";
import { LocalStateA } from "src/components/LocalStateA";
import { Layout } from "src/components/layout/Layout";

const LocalStatePageA: NextPage = () => {
	return (
		<Layout title="Local State A">
			<LocalStateA />
		</Layout>
	);
};

export default LocalStatePageA;
