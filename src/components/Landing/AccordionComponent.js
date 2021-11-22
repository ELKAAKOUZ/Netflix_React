
import classes from  "./AccordionComponent.module.css";
import AccordionUnit from "./AccordionUnit";

const AccordionComponent =(props)=>{

    const questions_list=props.Questions.map( item => (<AccordionUnit key={item.id} id={item.id} q1={item.q1} q2={item.q2} />));
    console.log(props.Questions)
    return(
        <div className={classes.accordion}>
            {questions_list}
        </div>
    );
}
export default AccordionComponent;









