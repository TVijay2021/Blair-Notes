import React from 'react'
import "../styles/Submit.css";
import BlairSchool from "../assets/Blair_School.jpeg";


function Home() {
    return (
        <div>
            <h1>Welcome to Blair Notes, Blazers!</h1>

            <h3>&emsp;&emsp;<i>"Knowledge shared is knowledge squared"</i></h3>

            <br></br>

            <h2>Guide:</h2>
                <li>About: Learn about the website!</li>
                <li>Notes: View class notes posted by Blair students!</li>
                <li>Submit: Upload your notes as a file for students to view!</li>

            <br></br>
            <br></br>

            <img src={BlairSchool}
                width = "1400"
                height = "400"/>
        </div>
    )  
}

export default Home