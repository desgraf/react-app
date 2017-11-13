import React, {Component} from 'react';
import fotoDni from './fotoDni.jpg';
import cv from './cv.pdf';
import './whoami.css';

class UisWhoAmI extends Component {
    render() {
        return (
            <div id="whoami">
                <h1>Who Am I?</h1>
                <span>
                    <img className="img-circle" alt="whoami" src={fotoDni}></img>
                    <h3>Sergio Rubio Lafuente</h3>
                    <h5>Full Stack Developer</h5>
                    <a title="Linkedin" href="https://www.linkedin.com/in/sergio-rubio-lafuente-693825a2/" target="_blank"><i id="social-ln" className="fa fa-linkedin-square fa-3x"></i></a>
                    <a title="GitHub" href="https://github.com/desgraf" target="_blank"><i id="social-git" className="fa fa-github-square fa-3x"></i></a>
                    <a title="Curriculum" href={cv} target="_blank" download><i id="social-curriculum" className="fa fa-file-pdf-o fa-3x"></i></a>
                </span>

            </div>
        );
    }
}
export default UisWhoAmI;