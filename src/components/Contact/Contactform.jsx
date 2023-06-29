import React,{useState} from 'react'
import './Contactformcss.css';
import ptyOverlay from '../../assets/images/contact/Pty-Contact-img-Overlay.png';
import ptyimage from '../../assets/images/contact/Pty-Contact-img.webp';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';


const Contactform = () => {
  const { getAuth } = useAuth();
  const [result, setResult] = React.useState("");
    const [SpringContactformdata,setSpringContactformdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
    const contactformhandleChange = (e) => {
    setSpringContactformdata({ ...SpringContactformdata, [e.target.name]: e.target.value });
  };
const Contactformsubmit = async(e) => {
  e.preventDefault();
  setResult("Sending....");
  const formData = new FormData(e.target);
  formData.append("access_key", "e7c8d071-98d7-4382-9b9d-cecefbec546e");
  formData.append("subject", "New Form Submission from ContactUs page");
  formData.append("from_name","PetsKart");
  formData.append("botcheck","");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
   
    
    async function setindatabase(){
  

    await axios
    .post(`/formdata/`, SpringContactformdata
    ,{
      headers: {
        'Authorization':`Bearer ${getAuth()?.token}`,
        'Content-Type': 'multipart/form-data', 
      },
    }) // Assuming the server is running on the same host
    .then((response) => {
      console.log(response.data.message);
      setTimeout(()=>{setResult(response.data.message)},6000); // Handle the response as needed
    })
    .catch((error) => {
      // console.error(error);
      if (error.response) {
        console.log('Server responded with status code:', error.response.status);
        console.log('Response data:', error.response.data);
      } else if (error.request) {
        console.log('No response received:', error.request);
      } else {
        console.log('Error creating request:', error.message);
      }
    });

  }
  
  setindatabase();

    setSpringContactformdata({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setResult("")}, 10000);


};
// 'https://pettie.wpengine.com/wp-content/themes/petty/assets/images/Pty-Contact-img-Overlay.png'
// 'https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Contact-img-1.webp'
  return (
        <div className='cfcenterform'>
     <div className='cf'>
        <div className='formimage'>
          <img id='shaper' src={ptyOverlay}></img>
          <img id='formgirl' src={ptyimage}></img>
        </div>
        <div className='contactbody'>
            <div className='formcontainer'>
              <h4>Book Your Slot</h4>
                <form className='cfmaincontactform' onSubmit={Contactformsubmit}>
                <div class="input-box">
                  <input size ="40" type="text" name="name" onChange={contactformhandleChange} value={SpringContactformdata.name} placeholder="Name" required></input>

                </div>
                <div class="input-box">
                  <input size ="40" type="email" name="email" onChange={contactformhandleChange} value={SpringContactformdata.email}  placeholder="Email Address" required></input>
                </div>
                <div class="input-box">
                  <input size ="40" type="subject" name="subject" onChange={contactformhandleChange} value={SpringContactformdata.subject} placeholder="Subject" required></input>
                </div>
                <div class="input-box message-box">
                    <textarea id="textarea" rows="4" cols="40" size ="50" name="message" onChange={contactformhandleChange} value={SpringContactformdata.message}  placeholder="Enter Your Message"  required></textarea>
          
                </div>
                <div class="button" id="submit_button">
                  <input type="submit" id='cfsubmitbutton' value="SUBMIT" ></input>
                </div>
                </form>  
                <span className='cfresult'>{result}</span>
            </div>
      

       </div>
       </div>
    </div>
  )
}

export default Contactform