import { useEffect, useState } from "react";
import env from "../env";

export default function useFetch(url, method = "GET") {
  url = env.API_URL + url;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUrl() {
      try {
        const res = await fetch(url, {
          method,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${env.REACT_JWT_SECRET_STRAPI}`,
          },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUrl();
  }, [url]);

  return { data, error, loading };
}

export async function postRequest(url, body) {
  url = env.API_URL + url;
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.REACT_JWT_SECRET_STRAPI}`,
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (error) {
    return error;
  }
}
