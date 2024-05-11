import axios from "axios";
import { LoginResponse } from "../../interfaces/login.interface";
import { BASE_URLS } from "../../utils/constant";

class UserHttpClient {
  async login(name: string, password: string): Promise<LoginResponse> {
    try {
      const { data } = await axios.post(BASE_URLS.LOGIN_SERVICE, {
        name,
        password,
      });
      return data?.data;
    } catch (error) {
      console.log("Error while login", error);
      throw error;
    }
  }
}

const userHttpClient = new UserHttpClient();
export default userHttpClient;
