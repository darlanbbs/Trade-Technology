import React, { useState } from "react";
import {
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Accordion as Acc,
} from "reactstrap";

interface AccordionProps {
  name: string;
  seasons: any[];
  getName: (number: number) => void;
  getSeason: (number: number) => void;
  id: number;
}

const Accordion: React.FC<AccordionProps> = ({
  name,
  seasons,
  getName,
  getSeason,
  id,
}) => {
  const [open, setOpen] = useState("");

  const toggle = (id: string) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <Acc open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId={id.toString()} onClick={() => getName(id)}>
          {name}
        </AccordionHeader>
        <AccordionBody accordionId={id.toString()}>
          {seasons.map((items) => (
            <ul key={items.year}>
              <li>
                Temporada:
                <button onClick={() => getSeason(items.year)}>
                  <strong>{items.year}</strong>
                </button>
              </li>
              <li>
                Começo: <strong>{items.start}</strong>
              </li>
              <li>
                Fim: <strong>{items.end}</strong>
              </li>
            </ul>
          ))}
        </AccordionBody>
      </AccordionItem>
    </Acc>
  );
};

export default Accordion;
