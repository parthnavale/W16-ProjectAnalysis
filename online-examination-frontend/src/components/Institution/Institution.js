import React from "react";
import "./Institution.css";


import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


const initialState = {
    institutionList: []
};
export default class Institution extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState }
    }

    componentDidMount() {
        this._getData();
    }
    _getData = () => {
        fetch("http://localhost:8000/api/institutions/listOfInstitutions")
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let errorMessage = 'error';
                    console.log(errorMessage);
                }
            })
            .then(response => response.json())
            .then(json => {
                this.setState({ institutionList: json })
            });
    }

    productsGenerator() {
        let items = [];
        const { institutionList } = this.state;
        if (institutionList) {
            institutionList.forEach((item, index) => {
                items.push({
                    instituteId: item.instituteId,
                    institutionName: item.institutionName,
                    institutionLocation: item.institutionLocation
                });
            })
        }
        return items;
    }



    columnNames() {
        const columns = [
            {
                dataField: "institutionName",
                text: "Institute Name",
                sort: true
            },
            {
                dataField: "institutionLocation",
                text: "Institution Location"
            }
        ];
        return columns;
    }

    render() {
        const productList = this.productsGenerator() || [];
        return (
            <React.Fragment>
                <br />
                <h1 className="display-4" >List of institutions</h1>
                <p className="paragraph1">This are the list of institutions that accepts out test scores.</p>
                <BootstrapTable
                    bootstrap4
                    keyField="instituteId"
                    data={productList}
                    columns={this.columnNames()}
                    pagination={paginationFactory({ sizePerPage: 5 })}
                />
            </React.Fragment>
        );
    }
}
