import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

import completeFarmer from '../assets/images/completefarmer.jpg'
import gizzeo from '../assets/images/gizzeo.png'
import sfa from '../assets/images/sfa.jpg'

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
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
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
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
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
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
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