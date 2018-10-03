import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                <li><a href="https://www.facebook.com/andrew.quartey" target="_blank" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.twitter.com/andrequartz" target="_blank" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://www.linkedin.com/in/andrewquartey/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    <li><a href="https://www.github.com/andrewquartey" target="_blank" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="mailto:yestup@gmail.com" target="_blank" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Yestrup Technologies</li><li>Design: <a href="http://gatsbyjs.org">Built with GatsbyJS</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
