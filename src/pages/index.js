import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import impact from '../assets/images/impact.jpg'

import nas from '../assets/images/nas.png'
import ohcs from '../assets/images/ohcs.png'
import thon from '../assets/images/thon.png'

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
                            <p>I am also an agent of change in my local community and a strong advocate of the SDGs. I am involved in a number social projects aimed at driving positive change in young people.</p>
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
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Skills</h2>
                            </header>
                            <p>I am Fullstack Engineer with a demonstrated history of working in the tech industry. 
                            Skilled in ReactJS, NodeJS, Python, DevOps & IoT and a strong business development professional 
                            with a BSc in Computer Engineering from Kwame Nkrumah University of Science and Technology, Kumasi, Ghana.</p>
                        </div>
                    </div>
                </section> 

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Projects</h2>
                            </header>
                            <p>Here are some of the client projects I have worked on.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={nas} alt="" /></span>
                            <h3>Nigerian Actuaries Society</h3>
                            <p>Nigerian Actuarial Society (NAS)is the professional organization for actuaries in Nigeria established in 1986 for the advancement of actuarial knowledge.</p>
                            <ul className="actions">
                                <li><a href="https://actuaries.org.ng" target="_blank" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={ohcs} alt="" /></span>
                            <h3>OHCS Online</h3>
                            <p>OHCS Online is an online registration platform for Ghanaians who want to apply to become civil servants.</p>
                            <ul className="actions">
                                <li><a href="https://ohcsonline.com" target="_blank" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={thon} alt="" /></span>
                            <h3>The House of Nubian</h3>
                            <p>The House of Nubian is a an international fashion house loated in dubai. They focus on elegant styles for the African woman.</p>
                            <ul className="actions">
                                <li><a href="https://www.thehouseofnubian.com" target="_blank" className="button">More</a></li>
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