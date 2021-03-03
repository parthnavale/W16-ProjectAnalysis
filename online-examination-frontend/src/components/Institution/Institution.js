import React, {Component} from "react";
import "./Institution.css";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import $ from 'jquery';

export default class Institution extends React.Component {
    constructor(props) {
      super(props);
      this.getHeader = this.getHeader.bind(this);
      this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);
      this.state = {data: 'false'};
    }
    componentDidMount() {
        this._getData();
    }
    _getData = () => {
        fetch("http://localhost:8000/institutions")
        .then(response => {
            if (response.ok) {
                    return response;
            } else {
                let errorMessage = 'error';
                console.log(errorMessage);
            }
        })
        .then(response => response.json())
        .then(json =>{
           console.log(json);
           this.setState({ data: json.data })
        });
    }
    getKeys = function(){
        return Object.keys(this.props.data[0]);
    }
    
    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
        })
    }
    
    getRowsData = function(){
        var items = this.props.data;
        var keys = this.getKeys();
        return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }
    render() {
        return (
        <div>
        <table data={this.state.data}>
        <thead>
        <tr>{this.getHeader()}</tr>
        </thead>
        <tbody>
        {this.getRowsData()}
        </tbody>
        </table>
        </div>
        
        );
        }
  }
  const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
    })
   }