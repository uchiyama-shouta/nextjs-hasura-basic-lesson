import type { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Link from "next/link";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import { initializeApollo } from "src/lib/apolloClient";
import { GET_USER_IDS, GET_USER_BY_ID } from "src/queries/queries";
import {
	GetUserByIdQuery,
	GetUserIdsQuery,
	Users,
} from "src/types/generated/graphql";
import { Layout } from "src/components/layout/Layout";

type Props = {
	user: {
		__typename?: "users";
	} & Pick<Users, "id" | "name" | "created_at">;
};

const UserDetail: NextPage<Props> = ({ user }) => {
	if (!user) return <Layout title="loading">Loading...</Layout>
	return (
		<Layout title={user.name}>
			<p className="text-xl font-bold">User detail</p>
			<p className="m-4">
				ID : {user.id}
			</p>
			<p className="mb-4 text-xl font-bold">{user.name}</p>
			<p className="mb-12">{user.created_at}</p>
			<div>
				<Link href="/hasura/ssg">
					<a className="flex mt-12 cursor-pointer">
						<ChevronDoubleLeftIcon
							data-testid="auth-to-main"
							className="mr-3 w-5 h-5 text-blue-500"
						/>
						<span data-testid="back-to-main">Back to main-ssg-page</span>
					</a>
				</Link>
			</div>
		</Layout>
	);
};

export default UserDetail;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const client = initializeApollo();
	const { data } = await client.query<GetUserByIdQuery>({
		query: GET_USER_BY_ID,
		variables: {
			id: params?.id,
		},
	});
	return {
		props: {
			user: data.users_by_pk,
			revalidate: 1,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const client = initializeApollo();
	const { data } = await client.query<GetUserIdsQuery>({
		query: GET_USER_IDS,
	});
	const paths = data.users.map((user) => ({
		params: {
			id: user.id,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};
