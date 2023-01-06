import React from 'react'
import ReactDOM from 'react-dom/client';
//PROJECT SPECIFIC IMPORTS
import "../styles/Submit.css";

//REACT/FIREBASE IMPORTS
import { useState, useEffect } from "react";

import { db, storage } from '../firebase/firebase-config';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
 
const root = ReactDOM.createRoot(document.getElementById('root'));

function Submit() {
  //INITIALIZE VARIABLES
  const [newTitle, setNewTitle] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newFile, setNewFile] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "submittedNotes"); //LOOK: This DB DOESN't MEAN ANYTHING

  // function containsAnyLetters(str) {
  //   return /[a-zA-Z]/.test(str);
  // }

    //uploadAll() --> Takes command from the submit button, Sets name of file, Calls uploadFile and uploadNotes
  const uploadAll = () => {
    var tdDate = new Date();
    var dateNums = (tdDate.getUTCDate()).toString() + "-" + ((1+tdDate.getMonth())).toString() + "-" + ((tdDate.getYear())%100).toString();
    const fileName = (3000 - tdDate.getYear()).toString() + "." + dateNums + "." + Math.random().toString(36).substring(2, 7);
    
    if (!(newFile == "" || newTitle == "")) {
    //   alert(newSubject);
    //   alert('hey');
    //   if (!(containsAnyLetters(newSubject))){
    //     newSubject = "magnet-chemistry";
    //     alert("true");
    //   }
    // alert("false");
    // alert(newSubject);
    // alert("calling upload file function");
    uploadFile(fileName);

    // alert("calling upload notes function in 5000 milliseconds");
    setTimeout(() => { uploadNotes(fileName); }, 3000);
    }
    else{
      alert("Please make sure all required entries are filled in.");
    }
  }


  //uploadFile() --> Sends the uploaded file to the Cloud Storage DB
  function uploadFile(fileName){
    // alert("1. Inside file function")
    if (newFile == "") return;
    const fileRef = ref(storage, fileName);
    uploadBytes(fileRef, newFile).then(() => {
      // alert("2. Your file has been uploaded");
    })

    return ;
  };   
    
  //uploadNotes() --> Sends the string data (title, subject, description, url) to the Firestore DB
    //also gets firebase url for recently uploaded notes file
    function uploadNotes(fileName) {
      // alert("6. inside uploadNotes");
      const storage = getStorage();
      // const docRef = doc(db, subject, fileName); //LOOK: This db is where it actually saves to

      getDownloadURL(ref(storage,  fileName))
        .then((url) => {
          // alert("return url");
          alert("View Your Notes: " + url);
          
          const data = {
            title: newTitle,
            subject: newSubject,
            description: newDescription,
            url: url
          }
          setDoc(doc(db, newSubject, fileName), data);

          return url;
        });
    }

    useEffect(() => {
      const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc)=> ({ ...doc.data(), id: doc.id })));

        };
      getUsers();
  }, [])
  
  return (
    <div className="submit">

      {/* ACUTAL CONTENT OF SUBMIT FORM */}
      <h1>Submit Your Notes Here!</h1>

      <label>Title*</label>
      <div>
        <input type="text" placeholder="Title..."
          onChange={(event) => {
          setNewTitle(event.target.value)
          }}
        />
      </div>

      {/* <label>Subject</label>
      <div>
        <input type="text" placeholder="Subject..."
          onChange={(event) => {
          setNewSubject(event.target.value)
          }}
        />
      </div> */}
      
      <label for="subject">Subject* </label>
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
       <option value="ai">Computer Modeling & Simulation</option>
 
       <option value="r&e">R&E</option>
       <option value="magnet-fot">FOT</option>
      </select>
      
      <br></br>
      <br></br>

      <label>Description</label>
      <div>
        <textarea placeholder = "Description..."
          onChange={(event) => {
          setNewDescription(event.target.value)
          }}
        />
      </div>

      <label>Upload Your Notes*</label>
      <h6>Supported File Types: pdf, jpeg, jpg, png</h6>
     <div>
        <input type="file"
          onChange={(event) => {
          setNewFile(event.target.files[0]);
          }}
        />
     </div>
    
    {/* CALL THE UPLOAD METHOD - will upload notes to database */}
     <button onClick={uploadAll}>Submit Notes!</button>

    </div>
  )
}

export default Submit;