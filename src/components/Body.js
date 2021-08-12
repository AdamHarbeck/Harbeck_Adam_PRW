import React from "react";
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";
import Prof1 from "../images/person1.jpg";
import Prof2 from "../images/person2.jpg";

// This will contain the CreatePost and PostCard containers.
const Body = () =>{
    return(
        <div style={styles.contentContain}>
            <CreatePost />
            <div style={styles.pCardContain}>
                <PostCard avatar={Prof1} username={'Gregory Berks'} title={"Had the most amazing day!"}
                          description={`We went surfing at La Jolla Beach and it was a BLAST! I couldn't believe how clear the water was.
                      Then we went and had burgers at this place that had old cars as your booth. SOOOO COOOL`}/>
                <PostCard avatar={Prof2} username={'Thomas Freed'} title={"Forged in Flame"}
                          description={`I am binge watching the entire series. I'm on fire with this binging lol. Terrible joke, but I haven't slept in a while.
                      Thank you coffee for providing caffeine. Another cup bites the dust. And another cup gone.`}/>
            </div>

        </div>
    )
}
export default Body;

const styles ={
    contentContain: {
        width: 'calc(100%/6 * 3.9)',
        background: '#D9E5D6',

    },
    pCardContain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }

}