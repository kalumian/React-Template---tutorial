import React from 'react'
import './style.jsx'
import { ContactSection,Input_submit,FormInput, Contact_title, Title_span, Form, Input_text,TextArea, Input_emil,Input_sub} from './style.jsx';

const Contact = () => {
    return(
        <ContactSection>
        <div className="container">
            <Contact_title><Title_span>Drop </Title_span>Me A line</Contact_title>
            <Form action="">
                <FormInput>
                    <Input_text type="text" placeholder="Your Name"/>
                    <Input_emil type="email" placeholder="Your Email"/>
                </FormInput>
                <Input_sub type="text" className="sub" placeholder="Your Subject"/>
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <Input_submit type="submit" value="Send Message"/>
            </Form>
        </div>
    </ContactSection>
    )
}
export default Contact;