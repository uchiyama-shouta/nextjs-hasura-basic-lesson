import { atom } from "recoil";
import { Task } from "src/types/taskType";

export const tasksState = atom<Task[]>({
	key: "tasks",
	default: [],
});
