import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderDetails from "./HeaderDetails";
import * as C from "./styles";
import DetailsTable from "./Tables/DetailsTable";
import { useNavigate } from "react-router-dom";
import { useForm } from "./../../Components/UseContext";

interface TeamData {
  team: {
    id: number;
    name: string;
    code: string;
    country: string;
    logo: string;
    founded: number;
  };
  venue: {
    address: string;
    city: string;
    capacity: number;
    name: string;
    image: string;
  };
}

const DetailsPage = () => {
  const navigate = useNavigate();
  const { useContext } = useForm();

  const [team, setTeam] = useState<TeamData[]>([]);
  const { id } = useParams();

  const getTeam = useCallback(async () => {
    const url = `https://api-football-v1.p.rapidapi.com/v3/teams?id=${id}`;
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
      setTeam(result.response);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    if (!useContext.key) {
      navigate("/");
    } else {
      getTeam();
    }
  }, [getTeam, useContext.key]);

  return (
    <div>
      <HeaderDetails />
      <C.ContainerPage fluid>
        {team.length > 0 ? (
          team.map((item) => (
            <div key={item.team.id}>
              <C.TitleArea>
                <C.Title>
                  {item.team.name}
                  {item.team.code && <span>-({item.team.code})</span>}
                </C.Title>
              </C.TitleArea>
              <C.ListArea>
                <C.List>
                  {item.team.country && (
                    <C.ListItens>
                      <C.TypeItem>Pais:</C.TypeItem>
                      {item.team.country}
                    </C.ListItens>
                  )}
                  {item.venue.address && (
                    <C.ListItens>
                      <C.TypeItem>Endereço:</C.TypeItem>
                      {item.venue.address}
                    </C.ListItens>
                  )}
                  {item.venue.city && (
                    <C.ListItens>
                      <C.TypeItem>Cidade:</C.TypeItem>
                      {item.venue.city}
                    </C.ListItens>
                  )}
                  {item.team.logo && (
                    <C.ListItens>
                      <C.Images src={item.team.logo} alt="" />
                    </C.ListItens>
                  )}
                </C.List>
                <C.List>
                  {item.team.founded && (
                    <C.ListItens>
                      <C.TypeItem>Fundado em:</C.TypeItem>
                      {item.team.founded}
                    </C.ListItens>
                  )}
                  {item.venue.capacity && (
                    <C.ListItens>
                      <C.TypeItem>Capacidade:</C.TypeItem>
                      {item.venue.capacity}
                    </C.ListItens>
                  )}
                  {item.venue.name && (
                    <C.ListItens>
                      <C.TypeItem>Estadio:</C.TypeItem>
                      {item.venue.name}
                    </C.ListItens>
                  )}
                  {item.venue.image && (
                    <C.ListItens>
                      <C.Images src={item.venue.image} alt="" />
                    </C.ListItens>
                  )}
                </C.List>
              </C.ListArea>
            </div>
          ))
        ) : (
          <C.ErrorText>Sem detalhes do time disponível</C.ErrorText>
        )}

        <DetailsTable />
      </C.ContainerPage>
    </div>
  );
};

export default DetailsPage;
