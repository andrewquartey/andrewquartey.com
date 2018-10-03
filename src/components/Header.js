import React from 'react'

import me from '../assets/images/me.png';
class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <img src={me} width="150px" height="150px" alt="" />
                    <h1>Hi, I'm <strong>Andrew Quartey</strong> a Computer Engineer<br />
                    and a Fullstack Developer from <a href="https://en.wikipedia.org/wiki/Ghana">Ghana</a>.</h1>
                    <p>I am very passionate about technology. <br />
                        And it is my mission to change lives with it.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
