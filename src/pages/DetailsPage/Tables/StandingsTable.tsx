import React, { useCallback, useEffect, useState } from "react";
import { Table } from "reactstrap";
import * as C from "./../styles";

type Props = {
  season: number;
  league: number;
  id: any;
};

const StandingsTable = ({ season, league, id }: Props) => {
  const [standings, setStandings] = useState<any[]>([]);
  const getStandings = useCallback(async () => {
    const url = `https://api-football-v1.p.rapidapi.com/v3/standings?season=${season}&league=${league}&team=${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_FOOTBAL_API_KEY,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setStandings(result.response);
    } catch (error) {
      console.error(error);
    }
  }, [id, league, season]);

  useEffect(() => {
    getStandings();
  }, [getStandings]);

  const formatSeasonValue = (season: any, type: string) => {
    switch (type) {
      case "played":
        return season[0].all.played;
      case "win":
        return season[0].all.win;
      case "draw":
        return season[0].all.draw;
      case "lose":
        return season[0].all.lose;
      default:
        return "";
    }
  };

  const renderStandings = standings.map((item) =>
    item.league.standings.map((seasonTeam: any) => (
      <React.Fragment key={seasonTeam[0].rank}>
        <th>{season}</th>
        <th>{formatSeasonValue(seasonTeam, "played")}</th>
        <th>{formatSeasonValue(seasonTeam, "win")}</th>
        <th>{formatSeasonValue(seasonTeam, "draw")}</th>
        <th>{formatSeasonValue(seasonTeam, "lose")}</th>
      </React.Fragment>
    ))
  );

  return (
    <div>
      {standings.length > 0 ? (
        <Table bordered borderless hover responsive>
          <thead>
            <tr>
              <th>Temporada</th>
              <th>Jogos</th>
              <th>Vitórias</th>
              <th>Derrotas</th>
              <th>Empates</th>
            </tr>
          </thead>
          <tbody>
            <tr>{renderStandings}</tr>
          </tbody>
        </Table>
      ) : (
        <C.ErrorText>Nenhuma Estatística encontrada</C.ErrorText>
      )}
    </div>
  );
};

export default StandingsTable;
