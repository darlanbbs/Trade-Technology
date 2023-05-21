import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { useForm } from "./../../Components/UseContext";
import LeaguePage from "./LeaguePage";
import { Spinner } from "reactstrap";

import Header from "../../Components/sidebar/Header/Header";

interface YourInterface {
  errors: string[];
  get: string;
  paging: {
    [key: string]: any;
  };
  parameters: any[];
  response: any[];
  results: number;
}

const HomePage = () => {
  const initialValues: YourInterface = {
    errors: [],
    get: "",
    paging: {},
    parameters: [],
    response: [],
    results: 0,
  };

  const [values, setValues] = useState<YourInterface>(initialValues);
  const navigate = useNavigate();
  const { useContext, setUseContext } = useForm();
  const getDetails = useCallback(async () => {
    const url = "https://api-football-v1.p.rapidapi.com/v3/countries";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": useContext.key,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setValues(result);
    } catch (error) {
      const errorMessage = error;
      console.error("errorMessage", errorMessage);
    }
  }, [useContext.key]);

  useEffect(() => {
    if (!useContext.key) {
      navigate("/");
    } else {
      getDetails();
    }
  }, [getDetails, useContext.key]);
  const getLeague = (value: string) => {
    setUseContext((prevState: any) => ({
      ...prevState,
      country: value,
    }));
  };
  return (
    <div>
      <C.ListArea>
        {values.response && values.response.length > 0 ? (
          <C.List>
            {values.response.map((response) => (
              <C.ListItem key={response.name}>
                <C.Images
                  src={response.flag}
                  alt={response.name}
                  onClick={() => {
                    getLeague(response.name);
                  }}
                />
              </C.ListItem>
            ))}
          </C.List>
        ) : (
          <Spinner>Loading...</Spinner>
        )}
        <Header />
        <LeaguePage />
      </C.ListArea>
    </div>
  );
};

export default HomePage;
