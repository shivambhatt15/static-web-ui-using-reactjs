// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Card from './Cards';
import Data from './Data';

function App() {
  return (
    <div className="App">
    <>
      <h1 className="text-center text-success">App component</h1>
      <div className="container my-4">
<div className="row">
       <Card
        imgsrc={Data[0].imgsrc}
        title={Data[0].title}
        sname={Data[0].sname}
        lname1={Data[0].lname1}
        lname2={Data[0].lname2}
        lname3={Data[0].lname3}
        link1={Data[0].link1}
        link={Data[0].link}
      />

<Card
        imgsrc={Data[1].imgsrc}
        title={Data[1].title}
        sname={Data[1].sname}
        lname1={Data[1].lname1}
        lname2={Data[1].lname2}
        lname3={Data[1].lname3}
        link1={Data[1].link1}
        link={Data[1].link}
      />

<Card
        imgsrc={Data[2].imgsrc}
        title={Data[2].title}
        sname={Data[2].sname}
        lname1={Data[2].lname1}
        lname2={Data[2].lname2}
        lname3={Data[2].lname3}
        link1={Data[2].link1}
        link={Data[2].link}
      />
      
<Card
        imgsrc={Data[3].imgsrc}
        title={Data[3].title}
        sname={Data[3].sname}
        lname1={Data[3].lname1}
        lname2={Data[3].lname2}
        lname3={Data[3].lname3}
        link1={Data[3].link1}
        link={Data[3].link}
      />
      
<Card
        imgsrc={Data[4].imgsrc}
        title={Data[4].title}
        sname={Data[4].sname}
        lname1={Data[4].lname1}
        lname2={Data[4].lname2}
        lname3={Data[4].lname3}
        link1={Data[4].link1}
        link={Data[4].link}
      />
      
<Card
        imgsrc={Data[5].imgsrc}
        title={Data[5].title}
        sname={Data[5].sname}
        lname1={Data[5].lname1}
        lname2={Data[5].lname2}
        lname3={Data[5].lname3}
        link1={Data[5].link1}
        link={Data[5].link}
      />

      
<Card
        imgsrc={Data[6].imgsrc}
        title={Data[6].title}
        sname={Data[6].sname}
        lname1={Data[6].lname1}
        lname2={Data[6].lname2}
        lname3={Data[6].lname3}
        link1={Data[6].link1}
        link={Data[6].link}
      />
      
<Card
        imgsrc={Data[7].imgsrc}
        title={Data[7].title}
        sname={Data[7].sname}
        lname1={Data[7].lname1}
        lname2={Data[7].lname2}
        lname3={Data[7].lname3}
        link1={Data[7].link1}
        link={Data[7].link}
      />
</div>
</div>

    </>

    </div>
  );
}

export default App;
