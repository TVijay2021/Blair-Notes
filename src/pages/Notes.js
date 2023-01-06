import React from 'react'
import { useState, useEffect } from "react";
import "../styles/Notes.css";
import { db, storage } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";


function Notes() {

  const [users, setUsers] = useState([]);
  const [newSubject, setNewSubject] = useState("");

  // const usersCollectionRef = collection(db, subject) //LOOK: this db is the one displayed

  function myFunction(theSubject) {

    if (theSubject == ""){
      theSubject = "magnet-chemistry";
    }
    
    const getUsers = async (subject) => {

      const data = await getDocs(collection(db, subject)); //LOOK: this db is the one displayed
      console.log(data);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getUsers(theSubject)
  };

  return (   
  <div className="Notes">

    {/* CHOOSE THE SUBJECT */}
    <br></br>

    <label for="subject">Subject:  </label>
    <select name="subject" id="subject" onChange={(event) => {
          setNewSubject(event.target.value)
          }}>
        <option value="magnet-chemistry" selected>Magnet Chemistry</option>
        <option value="magnet-physics">Magnet Physics</option>
        <option value="magnet-ess">Magnet ESS</option>
        <option value="magnet-biology">Magnet Biology</option>
        <option value="math-phys">Mathematical Physics</option>
        <option value="marine-biology">Marine Biology</option>
        <option value="genetic-analysis">Genetic Analysis</option>
        <option value="cellular-physiology">Cellular Physiology</option>
        <option value="quantum-physics">Quantum Physics</option>
        <option value="thermodynamics">Thermodynamics</option>
        <option value="optics">Optics</option>
        <option value="p-chem">Physical Chemistry</option>
        <option value="a-chem">Analytical Chemistry</option>
        <option value="organic-chem">Organic Chemistry</option>

        <option value="magnet-precalcAB">Magnet Precalc AB</option>
        <option value="magnet-precalcC">Magnet Precalc C</option>
        <option value="magnet-functions">Magnet Functions</option>
        <option value="magnet-analysis1">Analysis 1</option>
        <option value="magnet-analysis2">Analysis 2</option>
        <option value="applied-statistics">Applied Statistics</option>
        <option value="discrete-mathematics">Discrete Mathematics</option>
        <option value="linear-algebra">Linear Algebra</option>
        <option value="complex-analysis">Complex Analysis</option>
        <option value="sports-statistics">Sports Statistics</option>

        <option value="FOCS">FOCS</option>
        <option value="magnet-adsab">Algorithms & Data Structures</option>
        <option value="aoa">Analysis of Algorithms</option>
        <option value="computer-graphics">Computer Graphics</option>
        <option value="software-design">Software Design</option>
        <option value="mod-sim">Computer Modeling & Simulation</option>
        <option value="ai">Artificial Intelligence</option>

        <option value="r&e">R&E</option>
        <option value="magnet-fot">FOT</option>
        <option value="robotics">Robotics</option>
        <option value="clubs">Clubs</option>
    </select>

    <hr></hr>

    {myFunction(newSubject)}

    {/* <p>Viewing Notes from {newSubject}</p> */}
    
    {" "}


    {/* DISPLAYING THE BOXES */}
    {users.map((user) => {
      return (
        <div id="box">
          <h2>{user.title} </h2>

          <br></br>
          <h3>{user.subject} </h3>

          <br></br>
          <h4>{user.description}</h4>

          <br></br>
          <h5><a href={user.url} target="_blank" rel="noopener noreferrer">Open Notes Here</a></h5>


        </div> 
      );
    })}   
  </div>
  );
}

export default Notes