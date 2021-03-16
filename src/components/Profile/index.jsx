import axios from 'axios'
import React, { Component } from 'react'
import {Profile_skills, Porofile,  Profile_title,  Profile_List, Profile_item, Profile_item_span ,Skills, Skills_desc, Bar, Bar_title,Bar_perc,Parent_span,Bar_parent} from './style.jsx'


export default class Profile extends Component {

state = {
    skils:[]
}


componentDidMount(){
    axios.get('js/data.json').then( res => {this.setState({ skils : res.data.skils})})
}


    render(){
        const {skils} = this.state
        const listSkils = skils.map((skil) => {
            return(
                <Bar>
                    <Bar_title>{skil.name}</Bar_title>
                    <Bar_perc>{skil.perc}</Bar_perc>
                    <Bar_parent>
                        <Parent_span  pers={skil.perc} ></Parent_span>
                    </Bar_parent>
                </Bar>
            )
        })



    return(
        <Profile_skills>
        <div className="container">
            <Porofile>
                <Profile_title><span style={{fontWeight: "normal"}} >My </span>Profile</Profile_title>
                <Profile_List>
                    <Profile_item>
                        <Profile_item_span>Name</Profile_item_span>
                        Hamza Nabil
                    </Profile_item>
                    <Profile_item>
                        <Profile_item_span>Birthday</Profile_item_span>
                        21/1/1996
                    </Profile_item>
                    <Profile_item>
                        <Profile_item_span>Address</Profile_item_span>
                        Ain shams
                    </Profile_item>
                    <Profile_item>
                        <Profile_item_span>Phone</Profile_item_span>
                        4444 5555 6666
                    </Profile_item>
                    <Profile_item>
                        <Profile_item_span>Email</Profile_item_span>
                        hamza@hamza.com
                    </Profile_item>
                    <Profile_item>
                        <Profile_item_span>Website</Profile_item_span>
                        <Profile_item_span web >www.google.com</Profile_item_span>
                    </Profile_item>
                </Profile_List>
            </Porofile>
            
            <Skills>
                <Profile_title>Some <span style={{fontWeight: "normal"}}>skills</span></Profile_title>
                <Skills_desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </Skills_desc>
                {listSkils}
            </Skills>
            
        </div>
    </Profile_skills>
    )
}}
