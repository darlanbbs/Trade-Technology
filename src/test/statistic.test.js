/* eslint-disable no-undef */

async function callApi(url) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "09bd104317msh25741687f1a3c4ep174b1ajsn4d3c3b3060a6",
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

describe("API-FOOTBALL", () => {
  it("should return status 200 for API-FOOTBALL", async () => {
    const league = 71;
    const season = 2022;
    const team = 120;

    const apiUrl = `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=${league}&season=${season}&team=${team}`;

    const status = await callApi(apiUrl);

    expect(status).toEqual(200);
  });
});
