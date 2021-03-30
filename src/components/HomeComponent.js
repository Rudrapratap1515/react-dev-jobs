import React, { Component } from "react";
import Card from "./CardComponent";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            page: 1,
            searchedCompany: '',
            searchedLocation: '',
            fullTimeCheck: false,
        }

        this.loadFunc = this.loadFunc.bind(this);
        this.load = this.load.bind(this);
        this.searchFilter = this.searchFilter.bind(this);
    }

    loadFunc(){
        var that = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                that.setState({
                    data: JSON.parse(xhttp.responseText),
                })
            }
        };
        xhttp.open("GET", `https://jobs.github.com/positions.json?page=${this.state.page}`, true);
        xhttp.send();
    }

    load(){
        this.setState({
            page: this.state.page + 1
        })
        var that = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            that.setState({
                data: that.state.data.concat(JSON.parse(xhttp.responseText)),
            })
        };
        xhttp.open("GET", `https://jobs.github.com/positions.json?page=${this.state.page}`, true);
        xhttp.send();
    }

    searchFilter(){
        this.setState({
            searchedCompany : document.getElementById('searched-company').value,
            searchedLocation : document.getElementById('searched-location').value,
            fullTimeCheck : document.getElementById('full-time-check').checked,
        })
        var that = this;
        if(this.state.searchedLocation || this.state.searchedCompany || this.state.fullTimeCheck == true){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    that.setState({
                        data: JSON.parse(xhttp.responseText),
                    })
                }
            };
            xhttp.open("GET", `https://jobs.github.com/positions.json?description=${this.state.searchedCompany}&location=${this.state.searchedLocation}&full_time=${this.state.fullTimeCheck}&page=${this.state.page}`, true);
            xhttp.send();
        }
    }

    fetchPersonalId() {
        window.open("file:///Users/rudrapratapsinghrathore/Documents/Frontend%20Projects/Jobs%20Project/company_details.html?id=" + this.id);
    }

    componentDidMount() {
        this.loadFunc()
        // if (document.getElementById("searched-company").value === "" && document.getElementById("searched-location").value === "") {
        //     document.getElementsByClassName('load')[0].style.display = "none"
        // }
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="header">
                        <h2>Dev Jobs</h2>
                        <div className="search-inputs">
                            <div className="title-company">
                                <i className="fas fa-search"></i>
                                <input id="searched-company" type="text" placeholder="Filter by title, companies, expertise..."/>
                            </div>
                            <div className="location">
                                <i className="fas fa-map-marker-alt"></i>
                                <input id="searched-location" type="text" placeholder="Filter by location..."/>
                            </div>
                            <div className="full-time-check">
                                <input id="full-time-check" type="checkbox"/>
                                <label for="full-time-check">Full Time Only</label>
                                <button onClick={this.searchFilter}>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="job-card-box">
                        {
                            this.state.data ? <Card entries={this.state.data} /> : ''
                        }
                    </div>
                    <center><button className="load-more-button" onClick={this.load}>Load More...</button></center>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;