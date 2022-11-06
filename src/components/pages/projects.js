import React from "react";
import '../../css/projects.css';

function Projects() {
    return (
        <div id="portfolio"> 
        {/* cocktail DB card starts */}
            <div class="card">
                <h4>Cocktail DB</h4>

                <img src="/images/cocktail.png" />

                <a href="https://jessalane.github.io/cocktail-group-application/" target="_blank">
                    <i class="fas fa-external-link-square-alt"></i> 
                    live
                </a>
                <a href="https://github.com/jessalane/cocktail-group-application" target="_blank">
                    <i class="fab fa-github"></i> 
                    repository
                </a>
                <div class="cardHover"><h6>group homework project</h6>
                On this project I worked as team lead, to help keep track of the parameters we were supposed to meet, and help others where I could. I helped parse through the Bulma frameworks, and added on personal CSS to style the project. We imported two API's to interface and return the data used.</div>
            </div>
        {/* unplayable dard starts */}
            <div class="card">
                <h4>Unplayable</h4>

                <img src="/images/unplayable.png" />

                <a href="https://unplayable.herokuapp.com" target="_blank">
                    <i class="fas fa-external-link-square-alt"></i> 
                    live
                </a>
                <a href="https://github.com/nvmax/Project2-Threat-Level-Midnight" target="_blank">
                    <i class="fab fa-github"></i> 
                    repository
                </a>
                <div class="cardHover"><h6>group homework project</h6>
                    On this project I primarily worked with the front end which was created with Handlebars. I designed the index, as well as the profile and modal. I created the logic behind the toggle feature, and the modal, and wrote out the logic behind the login, register, and log out forms. In this project we imported two API's to return the data available, and managed our data through the use of Express and Node.</div>
            </div>
        {/* weather dashboard card starts */}
            <div class="card">
                <h4>Weather Dashboard</h4>

                <img src="/images/weather dash.png" />

                <a href="https://jessalane.github.io/Weather-Dashbord/" target="_blank">
                    <i class="fas fa-external-link-square-alt"></i> 
                    live
                </a>
                <a href="https://github.com/jessalane/Weather-Dashbord" target="_blank">
                    <i class="fab fa-github" target="_blank"></i> 
                    repository
                </a>
                <div class="cardHover"><h6>solo homework project</h6>
                This weather dashboard will return weather data by whatever city the user searches. For this project I imported a weather API, and parsed out the data in a front end structure that I created as well.</div>
            </div>
        {/* team roster card starts */}
            <div class="card">
                <h4>Team Roster</h4>

                <img src="/images/team page.png" />

                <a href="https://github.com/jessalane/Team-Roster" target="_blank">
                    <i class="fab fa-github"></i> 
                    repository
                </a>
                <div class="cardHover"><h6>solo homework project</h6>
                This is a Node based application that will generate an HTML index that will display the members of a team or group at work. It will offer access to their email address, as well as their github user name. The image shown is what it will generate, though there is no official live site, as it is meant to generate new code.</div>
            </div>
        {/* jate card starts */}
            <div class="card">
                <h4>Text Editor</h4>

                <img src="/images/JATE.png" />

                <a href="https://powerful-badlands-74655.herokuapp.com/" target="_blank">
                    <i class="fas fa-external-link-square-alt"></i> 
                    live
                </a>
                <a href="https://github.com/jessalane/PWA-Text-Editor" target="_blank">
                    <i class="fab fa-github"></i> 
                    repository
                </a>
                <div class="cardHover"><h6>solo homework project</h6>
                With this project I worked with existing code to create a progressive web application. I altered the webpack file, and made sure the data was saving to IndexedDB, and being returned properly, before rendering to the screen.  </div>
            </div>
        {/* social network backend card starts */}
            <div class="card">
            <h4>Social Network</h4>

                <img src="/images/mongo.avif" />

                <a href="https://github.com/jessalane/Social-Network-Mongo" target="_blank">
                    <i class="fab fa-github"></i> 
                    repository
                </a>
                <div class="cardHover"><h6>solo homework project</h6>
                For this project I created a Mongo Database to sever for the back end of a social network. You are able to register new users, save other uses as friends, make comments, and react to comments. This project was never applied to a front end.</div>
            </div>
        </div>
    );
}

export default Projects;