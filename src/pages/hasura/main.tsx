import type { NextPage } from "next";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "src/queries/queries";
import { GetUsersQuery } from "src/types/generated/graphql";
import { Layout } from "src/components/layout/Layout";

const FetchMain: NextPage = () => {
	const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
		fetchPolicy: "cache-and-network",
	});
	if (error) {
		return (
			<Layout title="Hasura fetchPolicy">
				<p>Error: {error.message}</p>
			</Layout>
		);
	}
	return (
		<Layout title="Hasura fetchPolicy">
			<p className="mb-6 font-bold">Hasura main page</p>
			<ul>
				{data?.users.map((user) => (
					<li className="my-1" key={user.id}>
						{user.name}
					</li>
				))}
			</ul>
			<Link href="/hasura/sub">
				<a className="mt-6 text-blue-500">Next</a>
			</Link>
		</Layout>
	);
};
export default FetchMain;
