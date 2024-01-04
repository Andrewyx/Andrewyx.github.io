import './App.css'
import selfie from './selfie.jpg'

function App() {

  return (
    <>
      <section id="landing">
        <h1>Hello, I'm Andrew!</h1>
        <p id="snippet">I am a Programmer, Roboticist, Game Dev</p>
        <button id="contact"> Contact Me</button>

        </section>
      <section id="about">
        <h2>About Me</h2>
        <div>
        <p>I have a mixed background in software and hardware design, 
          with experience with languages such as Python, C++, and C#. 
          I am a hardware hobbyist with proficiency in many design programs 
          such as Autodesk Inventor, Fusion360, Ultimaker Cura, Fritzing, and the Arduino IOT Cloud.
          I absolutely adore game design, so if you ever have an idea you would like to share or
           would simply like to try out some of my projects, I would love to connect with you!
           </p>
           <img src={selfie} alt='Andrew'></img>
           </div></section>

      <section><h2>Projects</h2>
      
      <div>
        <div>
          <h3>Flint</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium, consectetur sunt quis magni dicta. Accusantium, soluta libero tenetur, nam delectus nihil voluptates doloribus modi quaerat voluptatibus quam dolorum. Debitis.<img src="" alt="" /></p>
        </div>
      </div>
      <div>
        <div>
          <h3>Soccer Bots</h3>
          <p>Excepturi accusamus voluptatem itaque, nesciunt magni quas dolores porro, modi expedita minus sit velit beatae sequi debitis consequatur a tenetur iusto quidem quis assumenda, perferendis dolorum enim ea dolore! Ipsam!<img src="" alt="" /></p>
        </div>
      </div>
      <div>
        <div>
          <h3>Collidy Road</h3>
          <p>Animi voluptas neque repellendus! Soluta itaque alias quas rem libero nihil, temporibus eum ad sed illum vitae, voluptate laudantium sint veritatis quidem magnam saepe iure, perferendis neque? Incidunt, tempore aut.<img src="" alt="" /></p>
        </div>
      </div>
      <div>
        <div>
          <h3>Treescape</h3>
          <p>Possimus facilis quia mollitia labore? Dolorem obcaecati adipisci facere, vitae error recusandae eos unde velit voluptates, optio impedit hic, at eaque minima. Porro maiores reiciendis, harum voluptas hic ex dolore.<img src="" alt="" /></p>
        </div>
      </div>
      
      </section>


    </>
  )
}

export default App
