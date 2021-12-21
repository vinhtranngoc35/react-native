import { Instance, SnapshotOut, types } from "mobx-state-tree"
import UserService from "../../service/user-service"
import { User, UserModel, UserSnapshot } from "./user"

export const UserStore = types
    .model("UserStore")
    .props({
        userList: types.optional(types.array(UserModel), []),
        user: types.maybe(types.reference(UserModel))
    })
    .actions((self) => ({
        saveOneUser: (users: UserSnapshot[]) => {
            self.userList.replace(users)
        }
    }))
    .actions((self) => ({
        getUserList: async () => {
            await UserService.getAllUsers().then((users: User[]) => {
                self.saveOneUser(users)
                return self.userList
            })
        },
    }))

type UserStoreType = Instance<typeof UserStore>
export interface UserStore extends UserStoreType { }
type UserStoreSnapshotType = SnapshotOut<typeof UserStore>
export interface UserStoreSnapshot extends UserStoreSnapshotType { }
export const createUserStoreDefaultModel = () => types.optional(UserStore, {})
