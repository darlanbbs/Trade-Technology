import { useCallback, useEffect, useState } from "react";
import * as C from "./styles";
import { Row } from "reactstrap";
import Teams from "./Teams";
import { useForm } from "./../../Components/UseContext";
import Leagues from "./Leagues";

interface Team {
  team: {
    id: number;
    name: string;
  };
}
const LeaguePage = () => {
  const { useContext } = useForm();

  const [teams, setTeams] = useState<Team[]>([]);

  const getTeam = useCallback(async () => {
    const url = `https://api-football-v1.p.rapidapi.com/v3/teams?league=${useContext.league}&season=${useContext.season}&country=${useContext.country}`;
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
      setTeams(result.response);
    } catch (error) {
      console.error(error);
    }
  }, [useContext.league, useContext.season, useContext.country]);

  useEffect(() => {
    getTeam();
  }, [getTeam]);

  return (
    <div>
      <C.Container>
        <Row>
          <C.RightSide xs="3" sm="auto">
            <Leagues />
          </C.RightSide>
          <C.LeftSide>
            {teams.length > 0 ? (
              teams.map((team) => <Teams team={team} key={team.team.id} />)
            ) : (
              <C.ErrorText>Escolha uma liga ou temporada</C.ErrorText>
            )}
          </C.LeftSide>
        </Row>
      </C.Container>
    </div>
  );
};

export default LeaguePage;
