import { VFC, memo, Dispatch, SetStateAction } from "react";
import { Button } from "src/components/UI/Button";
import { Users, DeleteUserMutationFn } from "../types/generated/graphql";

type Props = {
	user: {
		__typename?: "users";
	} & Pick<Users, "id" | "name" | "created_at">;
	delete_users_by_pk: DeleteUserMutationFn;
	setEditedUser: Dispatch<
		SetStateAction<{
			id: string;
			name: string;
		}>
	>;
};

export const UserItem: VFC<Props> = memo(
	({ user, delete_users_by_pk, setEditedUser }) => {
		const handleSetEditUser = () => {
			setEditedUser(user);
		};

		const handleDeleteUsers = async () => {
			await delete_users_by_pk({
				variables: {
					id: user.id,
				},
			});
		};
		return (
			<div className="my-1">
				<span className="mr-3">{user.name}</span>
				<span className="mr-2">{user.created_at}</span>
				<Button bg="green" onClick={handleSetEditUser} mr={1}>
					Edit
				</Button>
				<Button bg="pink" onClick={handleDeleteUsers}>
					Delete
				</Button>
			</div>
		);
	},
);
