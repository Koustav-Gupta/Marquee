import React from 'react';
import Marquee from 'react-fast-marquee';
import './App.css';

const imageLinks = [
  'https://i.postimg.cc/Yq82ZjXd/image-1.jpg',
  'https://i.postimg.cc/rmLLKLnd/image-10.jpg',
  'https://i.postimg.cc/8CvSpCHQ/image-2.jpg',
  'https://i.postimg.cc/pX0xk4T7/image-3.jpg',
  'https://i.postimg.cc/NMhQmXMj/image-4.jpg',
  'https://i.postimg.cc/FFVhk7Qh/image-5.jpg',
  'https://i.postimg.cc/nhCxW29L/image-6.jpg',
  'https://i.postimg.cc/rmC24Y3f/image-7.jpg',
  'https://i.postimg.cc/8cpQmmVN/image-8.jpg',
  'https://i.postimg.cc/7Zd4rzSn/image-9.jpg'];

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Marquee Component</h1>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5}>
          {imageLinks.map((link, index) => (
            <div className="image_wrapper" key={index}>
              <img src={`${link}`} alt={`image- ${index + 1}`} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default App;
