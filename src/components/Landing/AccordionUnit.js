import * as Bootstrap from "react-bootstrap";
import "./AccordionUnit.css";
const AccordionUnit = (props) => {
  return (
    <Bootstrap.Accordion defaultActiveKey="0">
      <Bootstrap.Accordion.Item eventKey={props.id}>
        <Bootstrap.Accordion.Header>{props.q1}</Bootstrap.Accordion.Header>
        <Bootstrap.Accordion.Body>{props.q2}</Bootstrap.Accordion.Body>
      </Bootstrap.Accordion.Item>
    </Bootstrap.Accordion>
  );
};
export default AccordionUnit;
