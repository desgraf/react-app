import React, {Component} from 'react';
import fotoDni from './fotoDni.jpg';
import './whoami.css';

class UisWhoAmI extends Component {
    render() {
        return (
            <div>
                <h1>Who I Am ?</h1>
                <span>
                    <img className="img-circle" alt="whoami" src={fotoDni}></img>
                    <h3>Sergio Rubio Lafuente</h3>
                    <h5>Full Stack Developer</h5>
                    <a href="https://www.linkedin.com/in/sergio-rubio-lafuente-693825a2/" target="_blank"><i id="social-ln" className="fa fa-linkedin-square fa-3x"></i></a>
                    <a href="https://github.com/desgraf" target="_blank"><i id="social-git" className="fa fa-github-square fa-3x"></i></a>
                </span>

            </div>
        );
    }
}
export default UisWhoAmI;