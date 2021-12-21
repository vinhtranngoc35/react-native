import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { TodoModel, TodoSnapshot } from "./Todo"

export const TodoStoreModel = types
    .model("CharacterStore")
    .props({
        todoList: types.optional(types.array(TodoModel), []),
        todo: types.maybe(types.reference(TodoModel))
    })
    .actions((self) => ({
        saveTodo: (todoSnapshots: TodoSnapshot[]) => {
            self.todoList.replace(todoSnapshots)
        },
    }))
    .actions((self) => ({
        getTodoList() {
            return self.todoList
        },
        setTodo(todo: TodoSnapshot) {
            self.todo = todo;
        },
        getTodo() {
            return self.todo;
        }
    }))

type TodoStoreType = Instance<typeof TodoStoreModel>
export interface TodoStore extends TodoStoreType { }
type TodoStoreSnapshotType = SnapshotOut<typeof TodoStoreModel>
export interface TodoStoreSnapshot extends TodoStoreSnapshotType { }
export const createTodoStoreDefaultModel = () => types.optional(TodoStoreModel, {})
