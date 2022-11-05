import './home.css';

function HomePage() {
  return (
    <section id="aboutMe"> 
      <div class="bioImg" >
        <div class="bioContainer">
          <h1>Jessica Lane</h1>
          <h2>MERN Stack Development Student</h2>
        </div>
      </div>
      <div class="bioContent">
        <div id="section1">
          <h1>Junior Developer</h1>
          <p>
          I am a bootcamp educated MERN Stack Developer that is due to finish her program at the end of November 2022. I particularly love working with front end, but am excited for opportunities to grow more familiar with back end development.
          </p>
        </div>
        <div id="section2">
        <div class="skills">
            <h3>front end</h3>
            <ul>
              <li> CSS </li>
              <li> JavaScript </li>
              <li> Handlebars </li>
              <li> React </li>
              <li> CSS Frameworks </li>
            </ul>
          </div>
          <div class="skills"> 
            <h3>databases</h3>
            <ul>
              <li> MySql </li>
              <li> GraphQL </li>
              <li> MongoDB </li>
            </ul>
          </div>
          <div class="skills">
            <h3>back end</h3>
            <ul>
              <li> Express </li>
              <li> Node </li>
              <li> APIs </li>
            </ul>
          </div>
          <div class="skills"> 
            <h3>other</h3>
            <ul>
              <li> Git </li>
            </ul>
          </div>
        </div>
        <div id="section3">
        <h1>About Me</h1>
          <p>
            My start with coding came from an impractical source. I began playing games on forums at around the age of thirteen, and over time I learned to design my own code for them. It was something that was always just a hobby to me. I did it because I enjoyed the challenge of teaching myself, and I was good at it.
            <br></br><br></br>
            While it took me a fair bit of time to realize it was something I could pursue as a career, I've been enjoying the journey of developing my skills in the field, and look forward to finding a company as invested in my growth as I am.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
