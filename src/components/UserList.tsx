import { Dispatch, SetStateAction, VFC } from "react";
import { UserItem } from "src/components/UserItem";
import type {
	GetUsersQuery,
	DeleteUserMutationFn,
} from "src/types/generated/graphql";

type Props = {
	users: GetUsersQuery | undefined;
	loading?: boolean;
	setEditedUser: Dispatch<SetStateAction<{ id: string; name: string; }>>
	delete_users_by_pk: DeleteUserMutationFn;
};

export const UserList: VFC<Props> = ({
	users,
	loading,
	setEditedUser,
	delete_users_by_pk,
}) => (
	<>
		{loading ? (
			<p>loading...</p>
		) : (
			users?.users.map((user) => (
				<UserItem
					key={user.id}
					user={user}
					setEditedUser={setEditedUser}
					delete_users_by_pk={delete_users_by_pk as DeleteUserMutationFn}
				/>
			))
		)}
	</>
);
