import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import impact from '../assets/images/impact.jpg'

import completeFarmer from '../assets/images/completefarmer.jpg'
import gizzeo from '../assets/images/gizzeo.png'
import sfa from '../assets/images/sfa.jpg'

import resume from '../assets/pdfs/resume.pdf'

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Impact</h2>
                            </header>
                            <p>I am also an agent of change in my local community and and strong advocate of the SDGs. I am involed in a number social projects aimed at driving change in young people.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={impact} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Skills</h2>
                            </header>
                            <p>Experienced Fullstack Engineer with a demonstrated history of working in the tech industry. 
                            Skilled in ReactJS, NodeJS, Python, DevOps & IoT. Strong business development professional 
                            with a Bsc in Computer Engineering from Kwame Nkrumah' University of Science and Technology, Kumasi.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section> 

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Projects</h2>
                            </header>
                            <p>These are some of the projects I'm working currently working on.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={completeFarmer} alt="" /></span>
                            <h3>Complete Farmer</h3>
                            <p>Complete Farmer is a farm management and crowdfarming platform that enables users to farm remotely.</p>
                            <ul className="actions">
                                <li><a href="https://www.completefarmer.com" target="_blank" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={sfa} alt="" /></span>
                            <h3>Scholarships For Africa</h3>
                            <p>Scholarships For Africa is an online platform that connects african students to scholarship opportunities abroad.</p>
                            <ul className="actions">
                                <li><a href="http://www.scholarshipsforafrica.org" target="_blank" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={gizzeo} alt="" /></span>
                            <h3>Gizzeo Biodigester</h3>
                            <p>A portable device that converts kitchen organic waste to methane gas for cooking in homes.</p>
                            <ul className="actions">
                                <li><a href="http://www.gizzeo.com" target="_blank" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Resume</h2>
                        </header>
                        <ul className="actions uniform">
                            <li><a href={resume} className="button special">My Resume</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;