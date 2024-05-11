export default function LoginLoader() {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) return null;
  return {
    id: localStorage.getItem("userId"),
    userName: localStorage.getItem("userName"),
    authToken,
  };
}
