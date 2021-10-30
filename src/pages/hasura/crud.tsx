import type { NextPage } from "next";
import { DeleteUserMutationFn } from "src/types/generated/graphql";
import { Layout } from "src/components/layout/Layout";
import { useCrudUser } from "src/hooks/useCrudUser";
import { UserList } from "src/components/UserList";

const HasuraCRUD: NextPage = () => {
	const {
		data,
		loading,
		error,
		handleSubmit,
		handleSetEditUser,
		editedUser,
		setEditedUser,
		delete_users_by_pk,
	} = useCrudUser();

	if (error) return <Layout title="Hasura CRUD">Error: {error.message}</Layout>;
	return (
		<Layout title="Hasura CRUD">
			<p className="mb-3 font-bold">Hasura CRUD</p>
			<form
				className="flex flex-col justify-center items-center"
				onSubmit={handleSubmit}
			>
				<input
					className="py-2 px-3 border border-gray-300"
					placeholder="New user ?"
					type="text"
					value={editedUser.name}
					onChange={handleSetEditUser}
				/>
				<button
					disabled={!editedUser.name}
					className="py-1 px-3 my-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl disabled:opacity-40 focus:outline-none"
					type="submit"
				>
					{editedUser.id ? "Update" : "Create"}
				</button>
			</form>

			<UserList
				loading={loading}
				users={data}
				setEditedUser={setEditedUser}
				delete_users_by_pk={delete_users_by_pk as DeleteUserMutationFn}
			/>
		</Layout>
	);
};
export default HasuraCRUD;
