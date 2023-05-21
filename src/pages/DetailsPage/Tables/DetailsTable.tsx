import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AccordionBody,
  Accordion,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import * as C from "../styles";
import Players from "../Players";
import StandingsTable from "./StandingsTable";
import LineupsTable from "./LineupsTable";
import Statistic from "./Statistic";

const DetailsTable = () => {
  const { id } = useParams();
  const [leagues, setLeagues] = useState<any[]>([]);
  const [league, setLeague] = useState<number | undefined>(undefined);
  const [season, setSeason] = useState<number | undefined>(undefined);

  const [open, setOpen] = useState("");

  const toggle = (id: string) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  const getTeam = useCallback(async () => {
    const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?team=${id}`;
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
      setLeagues(result.response);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    getTeam();
  }, [getTeam]);

  return (
    <C.StastiscArea>
      {leagues.length > 1 && (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        <Accordion open={open} toggle={toggle}>
          {leagues.map((item) => (
            <div key={item.league.id}>
              <AccordionItem>
                <AccordionHeader
                  targetId={item.league.id.toString()}
                  onClick={() => {
                    setLeague(item.league.id);
                  }}
                >
                  {item.league.name}
                </AccordionHeader>
                <AccordionBody
                  accordionId={item.league.id.toString()}
                  key={item.league.id}
                >
                  {item.seasons.map((season: any) => (
                    <p key={season.year}>
                      Temporada{" "}
                      <button onClick={() => setSeason(season.year)}>
                        {season.year}
                      </button>
                    </p>
                  ))}
                </AccordionBody>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      )}
      {league !== undefined && season !== undefined && (
        <>
          <Players team={id} league={league} season={season} />
          <C.TableArea>
            <StandingsTable id={id} league={league} season={season} />
            <LineupsTable team={id} league={league} season={season} />
            <Statistic id={id} league={league} season={season} />
          </C.TableArea>
        </>
      )}
    </C.StastiscArea>
  );
};

export default DetailsTable;
