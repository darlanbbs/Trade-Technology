/* eslint-disable no-undef */


async function callApi(url) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_FOOTBAL_API_KEY,

      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    return response.status;
  } catch (error) {
    console.error(error);
    return null;
  }
}

describe("GET /users/{id}", () => {
  it("should return status 200 for API-FOOTBALL", async () => {
    const apiUrl = "https://api-football-v1.p.rapidapi.com/v3/countries";

    const status = await callApi(apiUrl);

    expect(status).toEqual(200);
  });
});
