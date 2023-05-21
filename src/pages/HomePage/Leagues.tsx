import { useCallback, useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import Accordion from "./Accordion";
import { useForm } from "./../../Components/UseContext";

interface League {
  league: {
    id: number;
    name: string;
  };
  seasons: any[];
}

const Leagues = () => {
  const [values, setValues] = useState<League[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setUseContext, useContext } = useForm();

  const getLeagues = useCallback(async (league: string) => {
    const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?country=${league}`;
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
      setValues(result.response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getLeagues(useContext.country);
  }, [getLeagues, useContext.country]);

  const getName = (value: number) => {
    setUseContext((prevState: any) => ({
      ...prevState,
      league: value,
    }));
  };

  const getSeason = (value: number) => {
    setUseContext((prevState: any) => ({
      ...prevState,
      season: value,
    }));
  };

  return (
    <div>
      {isLoading ? (
        <Spinner>Loading...</Spinner>
      ) : (
        <>
          {values.length > 0 && (
            <div>
              {values.map((league) => (
                <Accordion
                  getName={getName}
                  getSeason={getSeason}
                  id={league.league.id}
                  key={league.league.id}
                  name={league.league.name}
                  seasons={league.seasons}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Leagues;
