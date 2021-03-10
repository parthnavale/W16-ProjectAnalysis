import React from 'react'
import './ActualResult.css'
import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { AuthContext } from '../../App'

const initialState = {
  resultList: []
}
export default class ActualResult extends React.Component {
  constructor (props) {
    super(props)
    this.state = { ...initialState }
  }

  componentDidMount () {
    this._getData()
  }
  _getData = () => {
    let userObj = JSON.parse(localStorage.getItem('user'))
    fetch(
      'http://localhost:8000/api/exam/listOfTestScoresOfUser?userId=' +
        userObj.userId +
        '&isPractice=false'
    )
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = 'error'
          console.log(errorMessage)
        }
      })
      .then(response => response.json())
      .then(json => {
        this.setState({ resultList: json })
      })
  }

  resultsGenerator () {
    let items = []
    const { resultList } = this.state
    if (resultList) {
      resultList.forEach((item, index) => {
        items.push({
          resultId: item.resultId,
          grade: item.grade,
          createdDate: item.createdDate
        })
      })
    }
    return items
  }

  columnNames () {
    const columns = [
      {
        dataField: 'grade',
        text: 'Grade',
        sort: true
      },
      {
        dataField: 'createdDate',
        text: 'Date'
      }
    ]
    return columns
  }

  render () {
    const resultList = this.resultsGenerator() || []
    return (
      <AuthContext.Consumer>
        {context => {
          if (!context.isLoggedIn) {
            return <Redirect to='/login' />
          }

          return (
            <React.Fragment>
              <br />
              {(!resultList || resultList.length <= 0) && (
                <h3 className='paragraph1'>No Result Available yet</h3>
              )}
              {resultList && resultList.length > 0 && (
                <React.Fragment>
                  <h1 className='display-4'>List of grades</h1>
                  <p className='paragraph1'>
                    Following are the actual test results
                  </p>
                  <div className='tableResult'>
                    <BootstrapTable
                      bootstrap4
                      keyField='resultId'
                      data={resultList}
                      columns={this.columnNames()}
                      pagination={paginationFactory({ sizePerPage: 5 })}
                    />
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          )
        }}
      </AuthContext.Consumer>
    )
  }
}
