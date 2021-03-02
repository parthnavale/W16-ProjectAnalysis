import React from 'react';
import "./Scores.css";
//import { Container, Row,Col,Image,Navbar, Button } from 'react-bootstrap';
import { Tab, Tabs, Table } from 'react-bootstrap';



const Scores = () =>{
    return(
        <div className="mainDiv">
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="CGPA"> 
            <br/>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Percentage</th>
                        <th>CGPA</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>85 - 100</td>
                        <td>8.5 or more</td>
                        <td>
                        Can use language flexibly and effectively for most social, academic, and professional purposes.
                        </td>
                    </tr>
                    <tr>
                        <td>80 - 84</td>
                        <td>8.0 - 8.4</td>
                        <td>
                            Can fulfill most communication goals, even on unfamiliar topics.
                        </td>
                        
                    </tr>
                    <tr>
                        <td>70 - 79</td>
                        <td>7.0 - 7.9</td>
                        <td>
                            Can interact with proficient speakers fairly easily.
                        </td>
                    </tr>
                    <tr>
                        <td>60 - 69</td>
                        <td>6.0 - 6.9</td>
                        <td>
                            Can describe experiences, ambitions, opinions, and plans, although with some awkwardness or hesitation.
                        </td>
                    </tr>
                    <tr>
                        <td>50 - 59</td>
                        <td>5.0 - 5.9</td>
                        <td>
                            Can understand the main points of concrete speech or writing on routine matters such as work and school.
                        </td>
                    </tr>
                    <tr>
                        <td>40 - 49</td>
                        <td>4.0 - 4.9</td>
                        <td>
                            Can understand straightforward information and express themselves in familiar contexts
                        </td>
                        </tr> 
                    <tr>
                        <td>0 - 39</td>
                        <td>0 - 3.9</td>
                        <td>
                            Can understand very basic English words and phrases.
                        </td>
                           
                    </tr>
                </tbody>
            </Table>
            </Tab>
            <Tab eventKey="profile" title="Grade"> 
            <br/>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Percentage</th>
                        <th>Grade</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>85 - 100</td>
                        <td>A+</td>
                        <td>
                        Can use language flexibly and effectively for most social, academic, and professional purposes.
                        </td>
                    </tr>
                    <tr>
                        <td>80 - 84</td>
                        <td>A</td>
                        <td>
                            Can fulfill most communication goals, even on unfamiliar topics.
                        </td>
                        
                    </tr>
                    <tr>
                        <td>70 - 79</td>
                        <td>B</td>
                        <td>
                            Can interact with proficient speakers fairly easily.
                        </td>
                    </tr>
                    <tr>
                        <td>60 - 69</td>
                        <td>C</td>
                        <td>
                            Can describe experiences, ambitions, opinions, and plans, although with some awkwardness or hesitation.
                        </td>
                    </tr>
                    <tr>
                        <td>50 - 59</td>
                        <td>D</td>
                        <td>
                            Can understand the main points of concrete speech or writing on routine matters such as work and school.
                        </td>
                    </tr>
                    <tr>
                        <td>40 - 49</td>
                        <td>E</td>
                        <td>
                            Can understand straightforward information and express themselves in familiar contexts
                        </td>
                        </tr> 
                    <tr>
                        <td>0 - 39</td>
                        <td>F</td>
                        <td>
                            Can understand very basic English words and phrases.
                        </td>
                           
                    </tr>
                </tbody>
            </Table>
            </Tab>           
        </Tabs>
        </div>
    );
}

export default Scores;