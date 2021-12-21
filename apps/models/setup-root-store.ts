import { onSnapshot } from "mobx-state-tree"
import { types } from "mobx-state-tree"
import { UserStore } from "./user/userStore"
/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = "root"

/**
 * Setup the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */


/**
 * Setup the root state.
 */
export function createStore() {
    const Store = types.model("Store", {
        userStore: UserStore
    })
    const rootStore = Store.create({
        userStore: {}
    })
    //onSnapshot(rootStore, (snapshot) => storage.save(ROOT_STATE_STORAGE_KEY, snapshot))

    return rootStore
}
