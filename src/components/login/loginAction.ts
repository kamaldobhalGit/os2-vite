import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { userData } from "../../utils/helper";

export const loginAction = async ({ request }: LoaderFunctionArgs) => {
  let formData = await request.formData();
  let name = formData.get("userName") as string | null;

  // Validate our form inputs and return validation errors via useActionData()
  if (!name) {
    return {
      error: "You must provide a name to log in",
    };
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    await userData.signIn(name);
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
