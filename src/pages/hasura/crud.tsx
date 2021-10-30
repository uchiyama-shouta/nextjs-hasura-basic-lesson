import type { NextPage } from "next";
import { DeleteUserMutationFn } from "src/types/generated/graphql";
import { Layout } from "src/components/layout/Layout";
import { useCrudUser } from "src/hooks/useCrudUser";
import { UserList } from "src/components/UserList";
import { Button } from "src/components/UI/Button";
import { Input } from "src/components/UI/Input";

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
				<Input
					placeholder="New user ?"
					value={editedUser.name}
					onChange={handleSetEditUser}
				/>
				<Button disabled={!editedUser.name} bg="indigo" type="submit" my={3}>
					{editedUser.id ? "Update" : "Create"}
				</Button>
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
