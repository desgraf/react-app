import React, {Component} from 'react';
import './footer.css';

class UisFooter extends Component {
    render() {
        return (
            <footer className="text-center center-block">
                <hr/>
                <p className="txt-railway"> Uis App</p>
                <p>
                    <img draggable="false" className="margins" alt="©" src="http://twemoji.maxcdn.com/16x16/a9.png"/>
                    Lolaso Leroy Enterprise 2017
                </p>
                <p>
                    <a className="margins" href="https://www.facebook.es" target="_blank"><i id="social-fb" className="fa fa-facebook-square fa-3x"></i></a>
                    <a className="margins" href="https://twitter.es" target="_blank"><i id="social-tw" className="fa fa-twitter-square fa-3x"></i></a>
                    <a className="margins" href="https://plus.google.com/+Bootsnipp-page" target="_blank"><i id="social-gp" className="fa fa-google-plus-square fa-3x"></i></a>
                    <a className="margins" href="mailto:serlaf88@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x"></i></a>
                </p>
            </footer>
        );
    }
}

export default UisFooter;