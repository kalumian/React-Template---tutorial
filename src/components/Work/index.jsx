import React, { Component } from 'react'
import {WorkSection,  Work_Title,  Span_title, Part_section,  Icon,  Line, Part_desc, Part_title} from './style.jsx'
import axios from "axios"
export default class Work extends Component {
 state = {
    works:[]
}
    componentDidMount(){
        axios.get('js/data.json').then( res => {this.setState({  works : res.data.works}) })
    }



    render(){

        const {works} = this.state
        const WorkList = works.map( (workItem, index)=> {
            console.log(index)
            return ( 
            <Part_section first={index} key={index}>
            <Icon className={workItem.icon_name}></Icon>
            <Part_title>{workItem.title}</Part_title>
            <Line/>
                <Part_desc>
                    {workItem.body}
                </Part_desc>
        </Part_section>
        )})

    return(
        <WorkSection>
            <div className="container">
                <Work_Title><Span_title>My</Span_title> Work</Work_Title>
               {WorkList}
            </div>
        </WorkSection>
    )
    }
}
