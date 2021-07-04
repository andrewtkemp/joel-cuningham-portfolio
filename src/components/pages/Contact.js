import { Link, Route } from "react-router-dom";

function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>
            <ul className="contacts">
                <li>
                    Email:<a href="mailto:cunningham.joel84@gmail.com">cunningham.joel84@gmail.com</a>
                </li>
                <li>
                    Linkedin:<a href="https://www.linkedin.com/in/joel-cunningham-64695b1bb/">Joel Cunningham</a>
                </li>
                <li>
                    GitHub:<a href="https://github.com/Cunnjoel">Cunnjoel</a>
                </li>
                <li>
                    Resume:<a href="https://docs.google.com/document/d/1KSjvVYYPeRxu5OjY9fQqsRZ9CS5DmWCxHEFSwGvfFlc/edit?usp=sharing">My Resume</a>
                </li>
            </ul>
        </div>
    )
}

export default Contact;