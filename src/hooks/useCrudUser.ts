import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
	CREATE_USER,
	DELETE_USER,
	GET_USERS,
	UPDATE_USER,
} from "src/queries/queries";
import type {
	// CreateUserMutation,
	// DeleteUserMutation,
	GetUsersQuery,
	UpdateUserMutation,
} from "src/types/generated/graphql";

export const useCrudUser = () => {
	const [editedUser, setEditedUser] = useState({ id: "", name: "" });

	const { data, error, loading } = useQuery<GetUsersQuery>(GET_USERS, {
		fetchPolicy: "cache-and-network",
	});

	// create
	const [insert_users_one] = useMutation(CREATE_USER, {
		// insert_users_one: 今作ったユーザーの情報
		update(cache, { data: { insert_users_one } }) {
			const cacheId = cache.identify(insert_users_one) as string;
			cache.modify({
				fields: {
					users(existingUsers, { toReference }) {
						return [toReference(cacheId), ...existingUsers];
					},
				},
			});
		},
	});

	// update
	const [update_users_by_pk] = useMutation<UpdateUserMutation>(UPDATE_USER);

	// delete
	const [delete_users_by_pk] = useMutation(DELETE_USER, {
		update(cache, { data: { delete_users_by_pk } }) {
			cache.modify({
				fields: {
					users(existingUsers, { readField }) {
						return existingUsers.filter(
							(user: { _ref: string }) =>
								delete_users_by_pk.id !== readField("id", user),
						);
					},
				},
			});
		},
	});

	const resetUser = () => {
		setEditedUser({ id: "", name: "" });
	};

	const handleSubmit = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (editedUser.id) {
				try {
					await update_users_by_pk({
						variables: {
							id: editedUser.id,
							name: editedUser.name,
						},
					});
				} catch (error) {}
				resetUser();
			} else {
				try {
					await insert_users_one({
						variables: {
							name: editedUser.name,
						},
					});
				} catch (error) {}
				resetUser();
			}
		},
		[editedUser, insert_users_one, update_users_by_pk],
	);
	const handleSetEditUser = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setEditedUser({ ...editedUser, name: e.target.value });
		},
		[editedUser, setEditedUser],
	);

	return {
		data,
		loading,
		error,
		editedUser,
		setEditedUser,
		handleSubmit,
		handleSetEditUser,
		delete_users_by_pk,
	};
};
