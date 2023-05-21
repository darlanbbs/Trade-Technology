import { useCallback, useEffect, useState } from "react";
import { Table } from "reactstrap";
import * as C from "./../styles";
type Props = {
  league: number;
  id: any;
  season: number;
};

const Statistic = ({ league, id, season }: Props) => {
  const [statistic, setStatistic] = useState<any[]>([]);

  const getStatistic = useCallback(async () => {
    const url = `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=${league}&season=${season}&team=${id}`;
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
      setStatistic([result.response]);
    } catch (error) {
      console.error(error);
    }
  }, [id, league, season]);

  useEffect(() => {
    getStatistic();
  }, [getStatistic]);

  return (
    <div>
      {statistic.length > 0 ? (
        statistic.map((item) => (
          <div key={item.team.id}>
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>Gols Feitos</th>
                  <th>Casa</th>
                  <th>Fora</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{item.goals.for.total.total}</th>
                  <th>{item.goals.for.average.home}</th>
                  <th>{item.goals.for.average.away}</th>
                  <th>{item.goals.for.average.total}</th>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>Gols Tomados</th>
                  <th>Casa</th>
                  <th>Fora</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{item.goals.against.total.total}</th>
                  <th>{item.goals.against.average.home}</th>
                  <th>{item.goals.against.average.away}</th>
                  <th>{item.goals.against.average.total}</th>
                </tr>
              </tbody>
            </Table>
          </div>
        ))
      ) : (
        <C.ErrorText>Nenhum dado de estatística encontrado</C.ErrorText>
      )}
    </div>
  );
};

export default Statistic;

<Table bordered borderless hover responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>;
