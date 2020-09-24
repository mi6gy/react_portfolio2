import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component {
    render() {

        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://avatars2.githubusercontent.com/u/67612142?s=460&u=192b95aeb38edd7f6b27e5a15dd9c1f630901163&v=4"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />
                            <p>HTML | CSS | JavaScript | React | NodeJS | Express | MongoDB | MySQL </p>

                            <div className="social-links">
                                {/* github */}
                                <a href="https://github.com/mi6gy" rel="noopener noreferrer" target="_blank">

                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* linkedIN */}
                                <a href="https://www.linkedin.com/in/miguel-jimenez-6808381aa/" rel="noopener noreferrer" target="_blank">

                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;