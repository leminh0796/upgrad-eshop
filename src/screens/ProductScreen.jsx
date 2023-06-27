import { redirect } from "react-router-dom";

export function loader() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return redirect("/login");
  }
  return null;
}

export default function ProductScreen() {
  return (
    <div>
      <h1>Product Screen</h1>
    </div>
  );
}
