import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { initializeApollo } from "src/lib/apolloClient";
import { GET_USERS } from "src/queries/queries";
import type { GetUsersQuery, Users } from "src/types/generated/graphql";
import { Layout } from "src/components/layout/Layout";

type Props = {
	users: ({
		__typename?: "users";
	} & Pick<Users, "id" | "name" | "created_at">)[];
};
const HasuraSSG: NextPage<Props> = ({ users }) => {
	return (
		<Layout title="Hasura SSG">
			<p className="mb-3 font-bold">SSG+ISR</p>
			{users?.map((user) => (
				<Link key={user.id} href={`/users/${user.id}`}>
					<a className="my-1 cursor-pointer" data-testid={`link-${user.id}`}>
						{user.name}
					</a>
				</Link>
			))}
		</Layout>
	);
};

export default HasuraSSG;

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query<GetUsersQuery>({
		query: GET_USERS,
	});
	return {
		props: { users: data.users },
		revalidate: 1,
	};
};
