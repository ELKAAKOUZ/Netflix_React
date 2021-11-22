import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./InputGroupcomponent.css";

const InputGroupcomponent =()=>{
    return(
        <div className="test2">
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Enter Your Email "
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                Start
                </Button>
            </InputGroup>
        </div>
        
    )
};
export default InputGroupcomponent ;