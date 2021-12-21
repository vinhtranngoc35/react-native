import URL from "../global-variables/url-api";
import { User } from "../models/user/user";
class UserService {
    static async getAllUsers(): Promise<User[]> {
        try {
            const res = fetch(URL.api + '/users')
            const json = (await res).json()
            return json as unknown as User[]
        } catch (err) {
            return []
        }
    }
}
export default UserService