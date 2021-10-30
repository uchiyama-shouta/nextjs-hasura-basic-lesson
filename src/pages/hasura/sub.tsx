import type { NextPage } from "next";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_USERS_LOCAL } from "src/queries/queries";
import { GetUsersQuery } from "src/types/generated/graphql";
import { Layout } from "src/components/layout/Layout";
import { Route } from "src/route/route";

const FetchSub: NextPage = () => {
	const { data } = useQuery<GetUsersQuery>(GET_USERS_LOCAL);
	return (
		<Layout title="Hasura fetchPolicy read cache">
			<p className="mb-6 font-bold">Direct read out from cache</p>
			<ul>
				{data?.users.map((user) => (
					<li className="my-1" key={user.id}>
						{user.name}
					</li>
				))}
			</ul>
			<Link href={Route.hasura.main}>
				<a className="mt-6">Back</a>
			</Link>
		</Layout>
	);
};
export default FetchSub;
