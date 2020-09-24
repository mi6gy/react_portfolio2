import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return(
           <div className="contact-body">
               <Grid className="contact-grid">

                   <Cell col={6}>
                       <h2>Miguel J Jimenez</h2>
                       <img alt="miguel jimenez"
                       src="https://avatars2.githubusercontent.com/u/67612142?s=460&u=192b95aeb38edd7f6b27e5a15dd9c1f630901163&v=4"
                       style={{height: "250px"}}
                       />
                       <p style={{width: "75%", margin:"auto",paddingTop:"1em"}}>
                           Always looking for work!</p>

                   </Cell>
                   <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr/>
                       <div className="contact-list">
              <List>
            

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Peddana'}}>
                    <i className="fas fa-discord" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Peddana'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    mjimenez@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Peddana'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    <a href={"https://www.linkedin.com/in/miguel-jimenez-6808381aa/"} target='_blank'>LinkedIn</a>
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
                   </Cell>
                   



               </Grid>
           </div>
        )
    }
}

export default Contact;