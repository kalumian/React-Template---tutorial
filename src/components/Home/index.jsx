import React from 'react'
import {Home_, Home_btn, Home_info, Home_title, Span, Home_information, Home_desc} from './style.jsx'

const Home = () => {
    return(
        <div>
           <Home_>
            <div className="container">
                <Home_information>
                    <Home_title>Hamza Nabil</Home_title>
                    <Home_info>Creative Director</Home_info>
                    <Home_desc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </Home_desc>
                    <Home_btn>Let's Begin</Home_btn>
                </Home_information>
            </div>
        </Home_>
        
        </div>
    )
    
}
export default Home;