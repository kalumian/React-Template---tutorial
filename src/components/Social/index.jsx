import axios from 'axios'
import React, { Component } from 'react'
import {Social_media_section, Social_bar, Icon,Social_P,S_span,P_pan_info2} from'./style.jsx'

export default class Social extends Component{
    



state = {
    social:[]
}



    componentDidMount(){
        axios.get('js/data.json').then(res => this.setState({social : res.data.social}))
    }
    render(){
        const {social} = this.state
        const socialList = social.map( (social) => {
            return(
                <Social_bar kind={social.body} key={social.id}>
            <Icon className={social.icon}></Icon>
            <Social_P>
                <S_span>{social.title}</S_span>
                <P_pan_info2>{social.body}</P_pan_info2>
            </Social_P>
        </Social_bar>
            )
        })
    return(
        <Social_media_section>
         {socialList}
    </Social_media_section>
    )
    }
}
