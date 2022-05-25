import './App.css';
import tatooImage_01 from './assets/tatoowp1.jpg'
import tatooImage_02 from './assets/tatoowp-2.jpg'
import tatooImage_03 from './assets/tatoowp3.jpg'
import PageOne from './components/PageOne'
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const navbarLinks = [{url:"#", title:"Home"},
                     {url:"#", title:"BlackOut"},
                     {url:"#", title:"Color"}]

function App() {
  return (
    <div className="App">
       <Navbar navbarLinks={navbarLinks}/>

       <PageOne imageSrc={tatooImage_01}/>


       <Slider imageSrc={tatooImage_02} title={"BlackOut Tatoo Design"}
        subtitle={"Discover the most rude and impressive designs in black and shades of gray"}/>


       <Slider imageSrc={tatooImage_03} title={"Color Tatoo Design"} 
       subtitle={"Discover the most rude and impressive designs in color and colors impresionant"} flipped={true}/>
       
       <Footer/>
       
    </div>
  );
}

export default App;

