import { Instance, SnapshotOut, types } from "mobx-state-tree"


export const UserModel = types.model("User").props({
    id: types.maybe(types.string),
    name: types.maybe(types.string),
    avatar: types.maybe(types.string),
    createdAt: types.maybe(types.number),
})

type UserType = Instance<typeof UserModel>
export interface User extends UserType { }
type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType { }
export const createCharacterDefaultModel = () => types.optional(UserModel, { id: "0", name: "", avatar: "", createdAt: 0 })
