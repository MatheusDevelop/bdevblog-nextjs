import apiUrl from "../../utils/apiUrl";

const baseUrl = apiUrl + "/Post";
export default async function getArticle(articleId) {
  const content = await fetch(`${baseUrl}/${articleId}`).catch((e) =>
    console.error(e)
  );
  const json = await content.json();
  return json;
}
