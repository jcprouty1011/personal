import Immutable from "immutable";
import useSWR from "swr";
import { useRouter } from "next/router";

export async function fetcher(route, mode, ...args) {
  if (mode === "demo") {
    return JSON.parse(localStorage.getItem(route));
  } else {
    return fetch(route, ...args).then(res => res.json());
  }
}

export async function update(route, mode, value) {
  if (mode === "demo") {
    localStorage.setItem(route, JSON.stringify(value));
  } else {
    const options = {
      method: "PUT",
      body: JSON.stringify(value)
    };
    return fetch(route, options).then(res => res.json());
  }
}

export function useActivities() {
  const mode = useRouter().query.mode;
  const { data, error, mutate } = useSWR(["/api/activities", mode], fetcher);
  return {
    activities: data || [],
    errorGettingActivities: error,
    mutateActivities: async value => {
      mutate(value); // Optimistically update
      try {
        await update("/api/activities", mode, value);
      } catch (error) {
        // TODO improve error handling
        console.error(error);
      }
      mutate(); // Whether request succeeded or failed, re-validate
    }
  };
}
