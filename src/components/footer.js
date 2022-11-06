import React from "react";

function Footer() {
    return (
    <div id="footer">
        <h3>find me at</h3>
        <a href="https://www.linkedin.com/in/jess-a-lane/" target="_blank" class="footerContact">
        <i class="fab fa-linkedin"></i>
        <h5>jess-a-lane @ linkedin</h5>
        </a>
        <a href="https://github.com/jessalane" target="_blank" class="footerContact">
        <i class="fab fa-github"></i>
        <h5>jessalane @ github</h5>
        </a>
        <a href="mailto:jessica.lane.a@gmail.com" class="footerContact">
        <i class="fas fa-envelope-square"></i>
        <h5>jessica.lane.a@gmail.com</h5>
        </a>
    </div>
    );
}

export default Footer;