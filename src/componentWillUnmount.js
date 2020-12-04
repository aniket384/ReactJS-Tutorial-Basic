import React, { Component } from 'react'

export default class componentWillUnmount extends Component {
    componentWillUnmount(){
        alert("User has been removed!")
    }
    render() {
        return (
            <div>
                <h1>ReactJS-Component Will UnMount</h1>
                <ul>
                    <li>Name:Sanskar Awasthi</li>
                    <li>Email:sanskarawasthi9893@gmail.com</li>
                    <li>Phone:9893852198</li>
                </ul>
            </div>
        )
    }
}
