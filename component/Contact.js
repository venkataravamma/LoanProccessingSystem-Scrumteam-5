import React from 'react'
import emailjs from 'emailjs-com';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
  
export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_4yvgsi7', 'template_oc5chfh', e.target, 'user_kughAMoBoNh6hNkOoz3SR')
          .then((result) => {
              console.log(result);
              toast.success("Message sent successfully",{position: toast.POSITION.TOP_RIGHT});
          }).catch((error )=>{ 
              console.log(error);
              toast.error("something went wrong",{position: toast.POSITION.TOP_RIGHT});
          });
          e.target.reset()
      }
    return (
        <div className="container border"
        style={{marginTop:"50px" ,
        width:"50%",
        backgroundImage:`url('https://th.bing.com/th/id/OIP.TwzrosbNab1GGjI_WN0x7gHaDq?pid=ImgDet&rs=1')`,
        backgroundPosition:'center',
        backgroundSize: 'cover'}}>
            <h1 style={{marginTop:'25px'}}>Contact Form</h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}> 
               
                    <label >Name:</label>
                    <input type="text" id="name" className="form-control" placeholder="Enter Name"  required />
               
                    <label >email:</label>
                    <input type="email" id="user_email" className="form-control"  placeholder="Enter Email" required />
               
                    <label >Message:</label>
                    <textarea id="Message"  className="form-control" placeholder="Enter Message"  rows="4" required />
               
                   <input type="submit"value="Send" className="form-control btn btn-primary" style={{marginTop: "30px"}}/>
            </form>
        </div>
    )
}
