import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
    render() {
        return (
            <div className="aboutme-body">
                <Grid className="aboutme-grid">
<Cell col={6}>
<h2>Miguel J Jimenez</h2>
                       <img alt="miguel jimenez"
                       src="https://i.ibb.co/42fyRsP/hikeMe.jpg"
                       style={{height: "250px"}}
                       />
    </Cell>
<Cell col={6}>
<p style={{width: "75%", margin:"auto",paddingTop:"1em"}}>
                       Miguel J Jimenez is a web developer based out of New Jersey. Some of his passions outside
                        of web development include traveling, motorcyles, live music, and crafting complex cocktails.</p>
</Cell>
                </Grid>
            </div>
        )
    }
}

export default About;