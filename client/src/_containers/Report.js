import React, { Component } from 'react';
import Header from '../Header';
import { getReport, updateReport } from '../_actions/ReportActions';
import ReportData from '../_stores/ReportData';
import DatePicker from 'react-date-picker'; 
import {XYPlot, RadialChart, ArcSeries} from 'react-vis';


class Report extends Component {
  constructor(props){
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    this.setState({
      data: ReportData.getData()
    });
  }

  formSubmit = (event) => { 
    event.preventDefault();
    getReport( this.state.data.fromDate, this.state.data.toDate, this.state.data.postType );
  }

  handleDate = ( date, type ) => {
    updateReport(
        [type]: date
    );
  }

  handleChange = (e) => {
    updateReport({ 
        postType: e.target.value 
    });
  }

  render() {
    let reportComponent = "";
    if(this.state.data.report){
      const data = [
        { angle: this.state.data.report.achieved, color: "#28a745" },
        { angle: this.state.data.report.partiallyAchieved, color: "#ffc107" }, 
        { angle: this.state.data.report.didNotAchieve, color: "#dc3545" }
      ];
      reportComponent = (
      <div>
        <p className="p-3 mb-2 bg-success text-white">Achieved: { this.state.data.report.achieved }</p>
        <p className="p-3 mb-2 bg-warning text-dark">Partially achieved: { this.state.data.report.partiallyAchieved }</p>
        <p className="p-3 mb-2 bg-danger text-white">Did not achieve: { this.state.data.report.didNotAchieve }</p>
        <h3 className="mt-5">Reference Chart: </h3>
        <div className="mx-auto d-table  mt-3">
          <RadialChart width={300} height={300} data={data} showLabels={true} colorType="literal"/>
        </div> 
      </div> );
    }
    return (
      <div>
        <Header />
        <div className="container-fluid mw-1500">
          <div className="row d-flex justify-content-between">
            <article id="main-col" className="mt-2 pt-5">
              <h3 className="mb-5">Choose dates to show a report: </h3>
              <form class="form-inlines" onSubmit={ this.formSubmit }>
                <div className="row mb-4">
                  <div className="col-md-3">
                    <div class="form-group">
                      <label htmlFor="formGroupExampleInput">From:  &nbsp;</label>    
                      <DatePicker onChange={ ( date ) => { this.handleDate( date, 'fromDate'  ) } } value={ this.state.data.fromDate }/>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="form-group">
                      <label htmlFor="formGroupExampleInput">To:  &nbsp;</label>
                      <DatePicker onChange={ ( date ) => { this.handleDate( date, 'toDate' ) } } value={ this.state.data.toDate }/>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="input-group">
                        <div className="input-group-prepend">
                          <label>Blog Type: &nbsp;</label>
                        </div>
                        <select name="post-type" id="select-post-type" className="form-control" onChange = { this.handleChange } value = { this.state.data.postType } required>
                            <option value="ebp">EBP</option>
                            <option value="tbp">TBP</option>
                        </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <button type="button" type="submit" className="btn btn-primary"> Show Report </button>
                  </div>
                </div>
              </form>
              { reportComponent }
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
