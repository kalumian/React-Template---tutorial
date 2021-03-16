import React, {useEffect, useState} from 'react'
import {Portfolio_section, Portfolio_title, Portfolio__title_span, PortUl, Portfolio_item, Box_section, Box_img,  P_box, Box_span} from './style.jsx'
import axios from "axios"

const Portfolio = () => {


    const [ images, setImages ] = useState([])

    useEffect( ()  => {
        axios.get('js/data.json').then( res => {setImages( res.data.portfolio) })
    },[])


    const listImges = images.map( (imagesItem,index) => {
        return(
            <Box_section key={imagesItem.id}>
                <Box_img src={imagesItem.image} alt=""/>
                <P_box>
                    <Box_span>
                        Show Image
                    </Box_span>
                </P_box>
            </Box_section>
        )
    })
    return(
        <Portfolio_section>
        <Portfolio_title><Portfolio__title_span>My</Portfolio__title_span> Portfolio</Portfolio_title>
        <PortUl>
            <Portfolio_item active>All</Portfolio_item>
            <Portfolio_item>HTML</Portfolio_item>
            <Portfolio_item>Photoshop</Portfolio_item>
            <Portfolio_item>Wordpress</Portfolio_item>
            <Portfolio_item>Mobile</Portfolio_item>
        </PortUl>
        
        <div className="box">
            {listImges}
        </div>
    </Portfolio_section>
    
    )
}
export default Portfolio;