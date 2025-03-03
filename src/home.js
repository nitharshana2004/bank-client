import Carousel from 'react-bootstrap/Carousel';
import Bank from './images/bank.jpg'
import Bank1 from './images/bank1.jpg'
import Banking from './images/banking.jpg'

import ExampleCarouselImage from './ExampleCarouselImage'
import './App.css';
 
function Home() {
  return (<>
  <h1 id="heading">Welcome To Our Bank</h1>
  <Carousel className='carousel'>  
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" imagePath={Bank1} />
      
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" imagePath={Bank} />
  
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" imagePath={Banking} />
 
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Home;