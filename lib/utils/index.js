import Immutable from "immutable";

export async function fetcher(route, mode, ...args) {
  console.log("Fetching", route, mode);
  if (mode === "demo") {
    return JSON.parse(localStorage.getItem(route));
  } else {
    return fetch(route, ...args).then(res => res.json());
  }
}
