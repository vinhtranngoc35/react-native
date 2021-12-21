import React from "react";
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { MobXProviderContext } from "mobx-react";
import { UserStore } from "./user/userStore";

export const RootStoreModel = types.model("RootStore").props({
  userStore: types.optional(UserStore, {} as any),
})

export function useStore() {
  return React.useContext(MobXProviderContext).store;
}
export interface RootStore extends Instance<typeof RootStoreModel> { }