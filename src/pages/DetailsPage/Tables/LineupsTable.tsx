import { useCallback, useEffect, useState } from "react";
import { Table } from "reactstrap";
import * as C from "./../styles";
type Props = {
  team: any;
  season: number;
  league: number;
};

const LineupsTable = ({ team, season, league }: Props) => {
  const [statistics, setStatistics] = useState<any[]>([]);

  const getStatistics = useCallback(async () => {
    const url = `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?season=${season}&team=${team}&league=${league}`;
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
      setStatistics(result.response.lineups);
    } catch (error) {
      console.error(error);
    }
  }, [team, season, league]);

  useEffect(() => {
    getStatistics();
  }, [getStatistics]);

  return (
    <div>
      {statistics.length > 0 ? (
        <Table bordered borderless hover responsive>
          <thead>
            <tr>
              <th>Formação</th>
              <th>Jogados</th>
            </tr>
          </thead>
          <tbody>
            {statistics.map((lineup) => (
              <tr key={lineup.formation}>
                <td>{lineup.formation}</td>
                <td>{lineup.played}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <C.ErrorText>Nenhuma formação encontrada</C.ErrorText>
      )}
    </div>
  );
};

export default LineupsTable;
