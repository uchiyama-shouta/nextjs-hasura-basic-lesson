export const Route = {
	hasura: {
		crud: "/hasura/crud",
		main: "/hasura/main",
		ssg: "/hasura/ssg",
		sub: "/hasura/sub",
	},
	localState: {
		a: "/local-state/a",
		b: "/local-state/b",
	},
	users: {
		id: (id: string) => `/users/${id}`,
	},
	hooksMemo: "/hooks-memo",
	home: "/",
};
