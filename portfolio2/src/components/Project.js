import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {activeTab: 0};
    }
    toggleCategories() {

        if(this.state.activeTab === 0){
          return(
            <div className="projects-grid">
            
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.supplychain247.com/images/article/sick_localization_1019wide.jpg) center / cover'}} >Trace</CardTitle>
                <CardText>

                This application is designed to track packages through user provided tracking number and carrier. 
                In return, the user will receive up to date information on their package. The layout and tracking capabilities should inspire you to streamline package tracking needs. 
                
                </CardText>
                <CardActions border>
                  <Button  colored href="https://github.com/adbergen/trace">GitHub</Button>
                
                </CardActions>

                <CardMenu style={{color: '#fff'}}>

                  <IconButton name="share" />

                </CardMenu>
              </Card>
    
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#FF0000', height: '176px', background: 'url(https://github.com/mi6gy/read_your_movie/raw/master/assets/images/demo.png) center / cover'}} >Read Your Movie</CardTitle>
                <CardText>
                This is a film and literature application that allows the user to manage their time more effectively 
                by finding movie versions of books and vice-versa, as well as different media platforms to view their book or movie. 
                
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/mi6gy/read_your_movie">GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://react.rocks/images/converted/react-employee-directory.jpg) center / cover'}} >Employee Directory</CardTitle>
                <CardText>
                This React application allows managers to quickly filter through non-sensitive data to find employees contact information.
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/mi6gy/Employee-Directory">GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
    
          )}}
      render() {
        return(
          <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>Projects</Tab>
            </Tabs>
    
    
              <Grid>
                <Cell col={12}>
                  <div className="content">{this.toggleCategories()}</div>
                </Cell>
              </Grid>
    
    
          </div>
        )
      }
    }
    
    export default Projects;