
import React from 'react';
import image from '../img/imageInSrc.jpg'
import '../style.css'


function App() {
  return (
    <React.Fragment>
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">Your name here</h1>

<br/>

<img src={image} alt="camera"/>

<br/>

<img src="img/imageInPublic.jpg" alt="camera"/>

</div>

<video style={{ width:"320", height:"240px"}} controls>

<source src="myVideo.mp4" type="video/mp4"/>

</video>
    </React.Fragment>
  );
}

export default App;
