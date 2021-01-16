import React,{Component} from 'react';
import './portfolio.css';
import profilePic from '../Resource/Profilepic.jpg';


export default class portfolio extends Component{
    render(){
        return (
            <div>
            <div className="Header-Intro">
            <div className="Nav-Header">
              <button className="btn-header">Contact Me</button>
              <button className="btn-header">Experience</button>
              <button className="btn-header">Skill</button>
              <button className="btn-header">About</button>
            </div>
            <div className="ProfilePic">
              <img className="img-responsive" src={profilePic}/>
              <div className="ProfileContent">
              <div className="name-banner">Berno Raj A</div>
              <div className="sub-banner">Full Stack Engineer</div>
              <pre className="quote-banner">
                  {
                  `do {
                  succeed=try();
                  } while(!succeed);`
                  }
                </pre>
              </div>
            </div>
            </div>
            <div className="ParallaxSection">
      
            </div>
      
            <div id="Experience">
                  <header>
                    <h2>Experience</h2>
                    <button id="btnFlip">Flip</button>
                  </header>
                  <div id="experienceSection">
                  <div className="PanelCards card-1">
                      <h2>Associate</h2>
                      <h4>Experience as Cloud Architect and Developer:</h4>
                      <ol>
                      <li>As a part of CCPA, hosted BigID tool in AWS EC2 instance. BigID discovers and manages personal and sensitive information stored on-premise.It can also handle ad-hoc requests for individuals.</li>
                      <li>Created a Python script and deployed to AWS Lambda for managing latest three versions of MongoDB backup in S3 bucket by removing the old versions and always maintain latest three versions at anypoint.It reduced the cost of storing and manual interventions.</li>
                      <li>Created a bash script to choose any one of the 3 versions of MongoDB backup from S3 bucket and host MongoDB from a docker image and restore the selected version of backup to the new instance.</li>
                      <li>Created CI/CD pipeline with Jenkins hosted on AWS EC2 instance and WebHooked with Github Enterprise Repo. When code commit happens Jenkins builds artifact and deploys to Tomcat hosted in another EC2 instance.</li>
                      <li>Created another pipeline in Jenkins to dockerize Microservices and push the docker image to AWS ECR. Then triggers AWS ECS to deploy the docker image from ECR.</li>
                      </ol>
                      <h4>Other Roles and Responsibilities:</h4>
                      <ol>
                      <li> HomeManager of 3 associates : I will be managing their Year End Appraisal , discuss about their deliverables in each quarters , encourage them to do certification and get up skilled , manage their leave requests.</li>
                      <li>Business Analyst and Developer : In my current project there is no BA , so I manage both developer and BA role.</li>
                      <ul>
                      <li>Gather the requirements from Onsite users.</li>
                      <li>Prepare requirement document and get approval.</li>
                      <li>Create UI design document based on the requirement and get approval.</li>
                      <li>Split the requirement in sprint release.</li>
                      <li>Develop the application based on the collected requirement and perform unit testing.Release in sprint</li>
                      </ul>
                      </ol>
                  </div>
                  <div className="PanelCards card-2">
                  <h2>Orbit Shifter - Programmer Analyst</h2>
                  <h4>Experience as Angular Full Stack Developer:</h4>
                      <ol>
                      <li>Developed Auto-Payment system for Natural-Gas Operation in MyAccounts of Direct Energy. Workflow was in Agile Methodologies, daily scrum and monthly VC with onsite to integrate the code with onsite developers.</li> 
                      <li>Integrated the system with Western Union for payment.</li> 
                      <li>SiteCore integration for generating reports and dynamic email.</li> 
                      <li>Developed Quick Message system to send grievances of user along with file attachments and forward it to respective department (Electric or Natural Gas).</li> 
                      https://myaccount.directenergy.com/
                      </ol>
                      <h4>Roles and Responsibilities:</h4>
                      <ol>
                      <li> Quick Transition: A member of this project left , so I had to make quick transition from my previous project to this one so that the sprint releases didn't get interrupted.</li> 
                      <li>I understood the business model and coding paradigm. I preserved the same.</li> 
                      </ol>
                  </div>
                  <div className="PanelCards card-3">
                  <h2>Programmer Analyst Trainee</h2>
                  <h4>Experience as AngularJS and DotNet Developer:</h4>
                      <ol>
                      <li>Started my career with Cognizant on Direct Energy Account. Energy Portfolio was my first project.I worked on the development of LFBI(Load Following Block and Index) which is new LOB in EP. </li>
                      https://energyportfolio.directenergy.com/
                      <li>Worked on the end to end development with front end being AngularJS and Backend being SQL Server and Services with WebAPI.</li>
                      <li>Developed Indicative Pricing and Consumption prediction for which got appreciation from clients.</li>
                      </ol>
      
                      <h4>Other Roles and Responsibilities:</h4>
                      <ol>
                      <li>EP has iPad version Hence I will have meeting with iOS developers team to sync up the newly written services in each sprint so that they can connect the iPad version to WebAPI.</li>
                      <li>Collaboration with DB team to fix the data in the system.</li>   
                      </ol>
                  </div>
                  </div>
                  
                 
            </div>
            </div>
        )
    }
}

