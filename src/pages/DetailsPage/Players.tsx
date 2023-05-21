/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCallback, useEffect, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import * as C from "./styles";

type Player = {
  player: {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
    nationality: string;
  };
};

type Props = {
  team: any;
  league: number;
  season: number;
};

const Players = ({ team, season, league }: Props) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [open, setOpen] = useState("");

  const getTeam = useCallback(async () => {
    const url = `https://api-football-v1.p.rapidapi.com/v3/players?team=${team}&league=${league}&season=${season}`;
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
      setPlayers(result.response);
    } catch (error) {
      console.error(error);
    }
  }, [team, season, league]);

  useEffect(() => {
    getTeam();
  }, [getTeam]);

  const toggle = (id: string) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      {players.length > 0 ? (
        //@ts-ignore
        <Accordion open={open} toggle={toggle}>
          {players.map((player) => (
            <AccordionItem key={player.player.id}>
              <AccordionHeader targetId={player.player.id.toString()}>
                {player.player.firstname}
              </AccordionHeader>
              <AccordionBody accordionId={player.player.id.toString()}>
                <strong>Nome:</strong> {player.player.firstname}{" "}
                {player.player.lastname}
                <br />
                <strong>Idade:</strong> {player.player.age}
                <br />
                <strong>Nacionalidade:</strong> {player.player.nationality}
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <C.ErrorText>Nenhum jogador encontrado</C.ErrorText>
      )}
    </div>
  );
};

export default Players;
