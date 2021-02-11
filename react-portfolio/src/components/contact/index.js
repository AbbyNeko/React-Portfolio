/*********************************************************
 * 
 *  Renders a page with contact form which will send me
 *  an email if anyone reaches out with questions, freelance
 *  work, etc.
 * 
 ********************************************************/

 import React from 'react';
 import ReactDOM from 'react-dom';
 import './css/index.css';
class ContactForm extends React.Component{

    render(props) {
        return (

            <div className="contact-section">
                <h1>Contact</h1>
                <p>Hello there. <br/> I am currently open to freelance projects including Graphic Design, Web Development, CMS, etc. Please feel free to reach out with questions or enquiries.</p>

                <form id={props.formId}>
                    <input type="text" placeholder="Subject" />
                    <input type="textarea" placeholder="message"/>
                    <input type="button" value="Send Message"/>
                </form>
            </div>
            
        );
    }

}