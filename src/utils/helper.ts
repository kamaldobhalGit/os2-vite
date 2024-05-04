export interface UserData {
  isAuthenticated: boolean;
  name: string;
  signIn: Function;
  signOut: Function;
}

export const userData: UserData = {
  isAuthenticated: false,
  name: "",
  async signIn(name: string) {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    userData.isAuthenticated = true;
    userData.name = name;
  },
  async signOut() {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    userData.isAuthenticated = false;
    userData.name = "";
  },
};
