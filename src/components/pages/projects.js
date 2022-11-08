import React from "react";
import '../../css/projects.css';
import cocktail from '../../images/cocktail.png';
import unplayable from '../../images/unplayable.png';
import weatherDash from '../../images/weather dash.png';
import teamGen from '../../images/team page.png';
import jate from '../../images/JATE.png';
import mongo from '../../images/mongo.avif';


const projects = [
    {
        title: "Cocktail DB",
        image: cocktail,
        liveLink: "https://jessalane.github.io/cocktail-group-application/",
        gitLink: "https://github.com/jessalane/cocktail-group-application",
        projectType: "Group Homework Project",
        about: "On this project I worked as team lead, to help keep track of the parameters we were supposed to meet, and help others where I could. I helped parse through the Bulma frameworks, and added on personal CSS to style the project. We imported two API's to interface and return the data used."
    }, {
        title: "Unplayable",
        image: unplayable,
        liveLink: "https://unplayable.herokuapp.com",
        gitLink: "https://github.com/nvmax/Project2-Threat-Level-Midnight",
        projectType: "Group Homework Project",
        about: "On this project I primarily worked with the front end which was created with Handlebars. I designed the index, as well as the profile and modal. I created the logic behind the toggle feature, and the modal, and wrote out the logic behind the login, register, and log out forms. In this project we imported two API's to return the data available, and managed our data through the use of Express and Node."
    }, {
        title: "Weather Dashboard",
        image: weatherDash,
        liveLink: "https://jessalane.github.io/Weather-Dashbord/",
        gitLink: "https://github.com/jessalane/Weather-Dashbord",
        projectType: "Solo Homework Project",
        about: "This weather dashboard will return weather data by whatever city the user searches. For this project I imported a weather API, and parsed out the data in a front end structure that I created as well."
    }, {
        title: "Team Roster Generator",
        image: teamGen,
        liveLink: "https://drive.google.com/file/d/1IQO1OVaNxYvMPfJfwqgAVvZ5zWmZJyF6/view",
        gitLink: "https://github.com/jessalane/Team-Roster",
        projectType: "Solo Homework Project",
        about: "This is a Node based application that will generate an HTML index that will display the members of a team or group at work. It will offer access to their email address, as well as their github user name. The image shown is what it will generate, though there is no official live site, as it is meant to generate new code."
    }, {
        title: "JATE Text Editor",
        image: jate,
        liveLink: "https://powerful-badlands-74655.herokuapp.com/",
        gitLink: "https://github.com/jessalane/PWA-Text-Editor",
        projectType: "Solo Homework Project",
        about: "With this project I worked with existing code to create a progressive web application. I altered the webpack file, and made sure the data was saving to IndexedDB, and being returned properly, before rendering to the screen."
    }, {
        title: "Social Network DB",
        image: mongo,
        liveLink: "https://drive.google.com/file/d/1w6dozYAB8nZxamhBaaSO3xOiZFCZRgt6/view",
        gitLink: "https://github.com/jessalane/Social-Network-Mongo",
        projectType: "Solo Homework Project",
        about: "For this project I created a Mongo Database to sever for the back end of a social network. You are able to register new users, save other uses as friends, make comments, and react to comments. This project was never applied to a front end."
    }, 

]

function Projects() {
    return (
        <div id="portfolio">
        {projects.map( item => (
            <div class="card">
            <h4>{item.title}</h4>

                <img src={item.image} />
                <a href={item.liveLink} target="_blank">
                    <i class="fas fa-external-link-square-alt"></i> 
                    live
                </a>
                <a href={item.gitLink} target="_blank">
                    <i class="fab fa-github"></i> 
                    repository
                </a>
                <div class="cardHover"><h6>{item.projectType}</h6>
                {item.about}</div>
            </div>
        ))}
        </div>
    );
}

export default Projects;