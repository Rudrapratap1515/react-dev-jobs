import React, { Component } from 'react'

export default class JobDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: []
        }
    }

    componentDidMount() {
        var that = this;
        const { match: { params } } = that.props;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var json_data = JSON.parse(this.responseText)
                that.setState({
                    description: json_data
                })
            }
        }
        xhttp.open("GET", `https://jobs.github.com/positions/${params.id}.json`, true);
        xhttp.send();

    }


    render() {
        if(this.state.description.length!==0){
            var str = this.state.description.how_to_apply.slice(this.state.description.how_to_apply.indexOf('http'),this.state.description.how_to_apply.indexOf('">'))
        }
        return (
            <React.Fragment>
                <div className="container">
                    <div style="margin-bottom: 130px;" className="header">
                        <h2>Dev Jobs</h2>
                        <div className="company-name-heading">
                            <img className="heading-company-logo" src={this.state.description.company_logo}/>
                            <div className="heading-company-name">
                                <div className="floating-heading">
                                    <h3 className="post-name">{this.state.description.company}</h3>
                                    <div className="time-stamp">{this.state.description.company_url}</div>
                                </div>
                                <a className="hidden-url" href={this.state.description.company_url}><button className="company-site-button">Company Site</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="description-card mb-2">
                        <button className="apply-button">Apply Now</button>
                        <div className="time-stamp">1m ago . {this.state.type}</div>
                        <h3 className="post-name">{this.state.description.title}</h3>
                        <div className="mb-2 location"></div>
                        <div className="description time-stamp">{this.state.description.description}</div>
                    </div>
                    <div className="how-to-apply-card">
                        <h3 className="text-white post-name">How to Apply</h3>
                        <div className="text-white description time-stamp">{this.state.description.how_to_apply}</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


