import { Instance, SnapshotOut, types } from "mobx-state-tree"


export const TodoModel = types.model("Todo").props({
    id: types.identifierNumber,
    name: types.maybe(types.string),
    status: types.maybe(types.boolean),
})

type TodoType = Instance<typeof TodoModel>
export interface Todo extends TodoType { }
type TodoSnapshotType = SnapshotOut<typeof TodoModel>
export interface TodoSnapshot extends TodoSnapshotType { }
export const createCharacterDefaultModel = () => types.optional(TodoModel, { id: 0, name: "default", status: false })
