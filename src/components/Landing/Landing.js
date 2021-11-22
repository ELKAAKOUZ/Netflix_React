import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from  "./Landing.module.css";

import secondimg from "./second.png";
import thirdimg from "./third.png";
import fourthimg from "./fourth.png"
import InputGroupcomponent from "./InputGroupcomponent";
import AccordionComponent from "./AccordionComponent";
import FrequantlyAskedQuestions from "./FrequantlyAskedQuestions";



const Landing =()=>{
    return(
        <Fragment>
        <section class={classes.first}>
        {/* <img id="netflixlogo" src="./img/logo.png" alt="netflixlogo" /> */}
        {/* <Link to=""><button id="loginbutton" type="button" class="btn btn-danger">Sign in</button></Link> */}
        <div class={classes.first11}>
            <p> Unlimited movies, TV <br/> shows, and more.</p>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <InputGroupcomponent/>

        </div>
        </section>
         <section className={classes.second}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12 text-right">
                        <h2>Enjoy on your TV.</h2>
                        <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <img src={secondimg} alt="second image "/>
                    </div>
                </div>
            </div>
        </section>
        <section className={classes.third}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <img src={thirdimg} alt="third image "/>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <h2>Download your shows<br/> to watch offline.</h2>
                        <h3>Save your favorites easily and always have something to watch.</h3>
                    </div>
                </div>
            </div>
        </section>
        <section className={classes.fourth}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <h2>Watch everywhere.</h2>
                        <h3>Stream unlimited movies and TV shows on <br/>your phone, tablet, laptop, and TV without<br/>paying more.</h3>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <img src={fourthimg} alt=" fourth image "/>
                    </div>
                </div>
            </div>
        </section>
    <section className={classes.fifth}>
            <h1>Frequently Asked Questions</h1>
            <FrequantlyAskedQuestions/>
            <div className={classes.fifth3}>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='test2'>
                     <InputGroupcomponent/>  
                </div>
            </div>
        </section>
        </Fragment>
    )
};
export default Landing;