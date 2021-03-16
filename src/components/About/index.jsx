import React from 'react'
import  {Aboutsection, About_info,Info_title,Info_s,Info_der,Info_p} from './style.jsx'

const About = () => {
    return(
        <Aboutsection>
            <div class="container">
                <About_info>
                    <Info_title><Info_s>This is</Info_s> Me</Info_title>
                    <Info_der>Creative Director</Info_der>
                    <Info_p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Info_p>
                    <Info_p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Info_p>
                </About_info>
            </div>
        </Aboutsection>
    )
}
export default About;