import React, {useState, useEffect} from 'react';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import ScetionFive from './components/ScetionFive';
import SectionSix from './components/SectionSix';
import axios from 'axios';

// import LetterZ from './components/Moaaz';

function App() {
  const [data, setData] = useState([]);

  const res = (data) =>{
    setData(data);
  };

  const filtterdSection = (key) => {
    return data.find(item => item.type === key)
  };

  useEffect(() => {
    axios.get('https://api.dragonteam.dev/callapi?url=api/method/vconnct.v1.vconnct_solution.get_solution_page?page_name=education%26lang=en')
      .then(response => {
        res(response.data.data);
      })

      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []); 

  return (
    <>
    <SectionOne item={filtterdSection("left_cover")}/>
    <SectionTwo item={filtterdSection("small_features")}/>
    <SectionThree item={filtterdSection("right_image")}/>
    <SectionFour item={filtterdSection("left_image")}/>
    <ScetionFive item={filtterdSection("story")}/> 
    <SectionSix item={filtterdSection("footer")}/>
    {/* <LetterZ /> */}
    </>
  );
};

export default App;
