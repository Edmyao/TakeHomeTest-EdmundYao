export async function getGists(page, setLoading) {
  setLoading(true);
  const url = `https://api.github.com/gists/public?page=${page}&per_page=30`;
  try {
    const response = await fetch(url);
    const responseJSON = await response.json();
    if (response.ok) {
      return responseJSON;
    } else {
      console.error(responseJSON);
      throw 'Request Failed';
    }
  } catch (e) {
    throw e;
  } finally {
    setLoading(false);
  }
}
