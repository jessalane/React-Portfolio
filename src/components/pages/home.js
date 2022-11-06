import '../../css/home.css';

// importing different sections
import BioIntro from './bioIntro';
import Skills from './skills';
import AboutMe from './aboutMe';

function App() {
  return (
    <section id="aboutMe"> 
      <div class="bioImg" >
        <div class="bioContainer">
          <h1>Jessica Lane</h1>
          <h2>MERN Stack Development Student</h2>
        </div>
      </div>
      <div class="bioContent">
        <BioIntro />
        <Skills />
        <AboutMe />
      </div>
    </section>
  );
}

export default App;
