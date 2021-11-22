import AccordionComponent from "./AccordionComponent";




const FrequantlyAskedQuestions =()=>{
    const Questions=[
        {
            id:1,
            q1:"What is Netflix ?",
            q2:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
        },
        {
            id:2,
            q1:"How much does Netflix cost ?",
            q2:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP120 to EGP200 a month. No extra costs, no contracts."
        },
        {
            id:3,
            q1:"Where can i watch ?",
            q2:"Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
        },
        {
            id:4,
            q1:"How do i cancel ?",
            q2:"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            id:5,
            q1:"What can i watch in Netflix ?",
            q2:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        }
    ];
    return(
        <AccordionComponent Questions={Questions}/>
    );
};
export default FrequantlyAskedQuestions;