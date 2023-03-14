import logo from './logo.svg';
import './App.css';
import FristPage from './FirstPage';
import SecondPage from './SecondPage';
import { useState } from 'react';
function App() {

  const[showFristPage,setshowFristPage] = useState(false);
  const[showSecondPage,setshowSecondPage] = useState(false);



  const userDetails = {
    name:'Teja',
    city:'Vizag'
  };

  const country = 'India';

  const ClassName = 'edyoda';


  const openFstPage = () =>{
       setshowFristPage(true);
  };


  const openSecPage = () =>{
    setshowSecondPage(true);
  }


  return (
    <>
     <div>
      <button onClick={openFstPage}>Call FristPage</button>
      <button onClick={openSecPage}>Call SecondPage</button>
     </div>


     {showFristPage && <FristPage
      data = {userDetails}
      countryDetails = {country}
     />}

     {showSecondPage && <SecondPage
     ClassData = {ClassName}
     />}
    </>
  );
}

export default App;
