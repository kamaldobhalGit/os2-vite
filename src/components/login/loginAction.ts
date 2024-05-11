import { LoaderFunctionArgs, redirect } from "react-router-dom";
import userHttpClient from "../../clients/http/user.client";

export const loginAction = async ({ request }: LoaderFunctionArgs) => {
  let formData = await request.formData();
  const name = formData.get("userName") as string | null;
  const password = formData.get("password") as string | null;

  // Validate our form inputs and return validation errors via useActionData()
  if (!name) {
    return {
      error: "You must provide a name to log in",
    };
  }

  if (!password) {
    return {
      error: "You must provide password to log in",
    };
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    const { id, authToken } = await userHttpClient.login(name, password);
    localStorage.setItem("userId", id);
    localStorage.setItem("userName", name);
    localStorage.setItem("authToken", authToken);
  } catch (error) {
    // Unused as of now but this is how you would handle invalid
    // name/password combinations - just like validating the inputs
    // above
    return {
      error: "Invalid login attempt",
    };
  }
  let redirectTo = formData.get("redirectTo") as string | null;
  return redirect(redirectTo || "/home");
};
