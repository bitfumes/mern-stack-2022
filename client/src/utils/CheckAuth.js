import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

export default function CheckAuth({ children }) {
  const token = Cookies.get("token");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUser() {
    setIsLoading(true);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setIsLoading(false);
    if (!res.ok) {
      redirect("/login");
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return children;
}
