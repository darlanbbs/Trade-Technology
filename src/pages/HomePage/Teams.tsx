import { CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

import * as C from "./styles";
import { Link } from "react-router-dom";
type Props = {
  team: any;
};

const Teams = ({ team }: Props) => {
  return (
    <C.ContainerCards>
      <C.Cards>
        <C.Card color="dark" outline>
          <img src={team.team.logo} alt={team.team.name} />
          <CardBody>
            <CardTitle tag="h5">
              {team.team.name}-{`(${team.team.code})`}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {team.venue.city}
            </CardSubtitle>
            <Link to={`/team/${team.team.id}`}>
              <Button>Detalhes</Button>
            </Link>
          </CardBody>
        </C.Card>
      </C.Cards>
    </C.ContainerCards>
  );
};

export default Teams;
