import apiUrl from "../../utils/apiUrl";

const baseUrl = apiUrl + "/Post";
export default async function getBlogsService(
  filter = { itemsByPage, numberOfPage, quicksearch }
) {
  const queryParams = Object.keys(filter)
    .map((key) => {
      if (filter[key] != "") return key + "=" + filter[key];
    })
    .join("&");
  const content = await fetch(baseUrl + "?" + queryParams).catch((e) =>
    console.error(e)
  );
  const json = await content.json();
  return json;
}
