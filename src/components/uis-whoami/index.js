import React, {Component} from 'react';
import fotoDni from './fotoDni.jpg';
import './whoami.css';

class UisWhoAmI extends Component {
    render() {
        return (
            <div>
                <h1>Who I Am ?</h1>
                <p>
                    <img className="img-circle" alt="whoami" src={fotoDni}></img>
                    <h3>Sergio Rubio Lafuente</h3>
                    <h5>Full Stack Developer</h5>
                </p>

            </div>
        );
    }
}
export default UisWhoAmI;