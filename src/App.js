import './App.css';
import tatooImage_01 from './assets/tatoowp1.jpg'
import tatooImage_02 from './assets/tatoowp-2.jpg'
import tatooImage_03 from './assets/tatoowp3.jpg'
import PageOne from './components/PageOne'
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
       <PageOne imageSrc={tatooImage_01}/>


       <Slider imageSrc={tatooImage_02} title={"BlackOut Tatoo Design"}
        subtitle={"Discover the most rude and impressive designs in black and shades of gray"}/>


       <Slider imageSrc={tatooImage_03} title={"Color Tatoo Design"} 
       subtitle={"Discover the most rude and impressive designs in color and colors impresionant"} flipped={true}/>
       
    </div>
  );
}

export default App;

