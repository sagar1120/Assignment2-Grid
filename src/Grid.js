import img1 from './img/img10.jpg';
import img2 from './img/img11.jpg';
import img3 from './img/img12.jpg';
import img4 from './img/img13.jpg';
import img5 from './img/img14.jpg';
import img6 from './img/img15.jpg';
import img7 from './img/img16.webp'
import {FaFilter} from 'react-icons/fa'
import { FaSortDown } from 'react-icons/fa';
import { FaCcDiscover } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



function Grid(){

    return(
        <>
        <header>
         <div class="logo">
            <h1>EDYODA</h1>
            <p>Stories</p>
            </div>
            <option class="option">Explore Categories</option>
            <FaSortDown className="icons sortdown"/>
            <h5>EdYoda is a learning and knowledgesharing platform for techies</h5>
            <button class="button">Go To Main Website</button>
        </header>

        <main class="main">
            <h3>Latest Posts</h3>
            <div class="icons">
                <FaFilter className="icons filter"/>
                <h6>Filter by Category</h6>
            </div>
            <div class="categorys">
                <p class="category_demo1">All</p>
                <p class="category_demo1">Artificial Intelligence</p>
                <p class="category_demo1">Cloud Computing</p>
                <p class="category_demo1">DevOps</p>
                <p class="category_demo1">Programming Languages</p>
                <p class="category_demo1">Mobile Application Development</p>
              
            </div>
            <div class="categorys2">
            <p class="category_demo1">Technology and Tools</p>
                <p class="category_demo1">Get a Job in a Tech Company</p>
                <p class="category_demo1">Others</p>
            </div>


          <div class="companys">
            <section  class="inner_box">
                <img src={img1} class="img_style"/>
                <h4>Fresh Graduate or IT professional Looking f...</h4>
                <div class="Date_demo1">
                    <p class="Author_demo1">Arman Ahmed</p>
                    <p class="date">|05 Jul 2019</p>
                </div>
                <p class="para_demo">If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to...</p>
            </section>

            <section class="inner_box">
                <img src={img2} class="img_style"/>
                <h4>Introducing you all to EdYoda -...</h4>
                <div class="Date_demo1">
                    <p class="Author_demo1">Arman Ahmed</p>
                    <p class="date">|05 Jul 2019</p>
                </div>
                <p class="para_demo">Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of....</p>
            </section>

            <section class="inner_box">
                <img src={img3} class="img_style"/>
                <h4>From identity crisis to the Success Story - Th...</h4>
                <div class="Date_demo1">
                    <p class="Author_demo1">Kalyan Mahalingam</p>
                    <p class="date">|05 Jul 2019</p>
                </div>
                <p class="para_demo">DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the...</p>
            </section>
            </div>





            
          <div class="companys">
            <section  class="inner_box">
                <img src={img4} class="img_style"/>
                <h4>Typical day of Data Scientist - An insider...</h4>
                <div class="Date_demo1">
                    <p class="Author_demo1">Saurav Ghosh </p>
                    <p class="date">|05 Jul 2019</p>
                </div>
                <p class="para_demo">I,ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the trends that...</p>
            </section>

            <section class="inner_box">
                <img src={img5} class="img_style"/>
                <h4>Amazon Web Services (AWS) Cloud Day -...</h4>
                <div class="Date_demo1">
                    <p class="Author_demo1">Kalyan Mahalingam</p>
                    <p class="date">|05 Jul 2019</p>
                </div>
                <p class="para_demo">It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels...</p>
            </section>

            <section class="inner_box">
                <img src={img6} class="img_style"/>
                <h4>edYoda Meetup #01 : A Date with Cloud</h4>
                <div class="Date_demo1">
                    <p class="Author_demo1">Ashish Pandey</p>
                    <p class="date">|05 Jul 2019</p>
                </div>
                <p class="para_demo">I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the...</p>
            </section>
            </div>
        </main>


        <footer class="footer_style">
            <div class="footer_style1">
                <ul>
                <h1 class="footer_edyoda">EDYODA</h1>
                <li class="footer_details">1st Floor,</li>
                <li class="footer_details">Gopalan Millennium Tower,</li>
                <li class="footer_details">ITPL Main Rd, Brookefield,</li>
                <li class="footer_details">Bengaluru, Karnataka-560037,</li>
                <li class="footer_details">India</li>
                
                <div style={{display:'flex'}}>
                <FaCcDiscover style={{marginTop:"5px",marginRight:"10px"} }/>
                <li class="footer_details">hello@edyoda.com</li></div>


                <div style={{marginTop:"20px"}}>
                 <FaFacebook style={{marginRight:"10px" , fontSize:"25px"}}/>
                 <FaTwitter style={{marginRight:"10px" , fontSize:"25px"}}/>
                 <FaLinkedin style={{marginRight:"10px" , fontSize:"25px"}}/>
                 <FaLocationArrow style={{marginRight:"10px" , fontSize:"25px"}}/>
                </div>
                </ul>
            </div>
            <div class="footer_style1">
                <ul>
                    <h3 class="heading">EDYODA</h3>
                    <li class="footer_details">About Us</li>
                    <li class="footer_details">Contact Us</li>
                    <li class="footer_details">Careers</li>
                    <li class="footer_details">Terms of Use</li>
                    <li class="footer_details">Privacy Policy</li>
                </ul>
            </div>
            <div class="footer_style1">
                <ul>
                    <h3 class="heading">RESOURCES</h3>
                    <li class="footer_details">Learning Paths</li>
                    <li class="footer_details">Courses</li>
                    <li class="footer_details">Learning Videos</li>
                    <li class="footer_details">Educators</li>
                    <li class="footer_details">EdYoda Stories</li>
                    <li class="footer_details">University</li>
                </ul>
            </div>
            <div class="footer_style1">
                <ul>
                    <h3 class="heading">FOR ENTERPRISES</h3>
                    <li class="footer_details">Train Your Employees</li>
                    <h3 class="heading">QUICK LINKS</h3>
                    <li class="footer_details">Learn and Earn</li>
                    <li class="footer_details">Become a Learning-Enabler</li>
                    <li class="footer_details">Tips for Learning-Enabler</li>
                    <li class="footer_details">Request New Topic</li>
                    <li class="footer_details">Certification</li>
                    <li class="footer_details">Affiliate Progam</li>
                </ul>
            </div>
        </footer>
        </>
    )
}
export default Grid;