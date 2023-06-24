import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import mainDivBG from '/Users/jorgepita/portresu/src/FireflyBG-2.jpg'
import AdobeLogo from '/Users/jorgepita/portresu/src/adobelogo.png';
import FusionLogo from '/Users/jorgepita/portresu/src/fusion360logo.png';
import CSSLogo from '/Users/jorgepita/portresu/src/csslogo.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import lightbulb from '/Users/jorgepita/portresu/src/lightbulbiinno.png';
import useIntersectionObserver from './useIntersectionObserver';






const Modal = ({ message, closeModal }) => (
  <div 
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      width: '500px', 
      height: '500px', 
      zIndex: '100',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    }}
  >
    <Carousel showThumbs={false}>
      <div>
        <img src="image1_url" alt="image1" />
      </div>
      <div>
        <img src="image2_url" alt="image2" />
      </div>
      <div>
        <img src="image3_url" alt="image3" />
      </div>
      <div>
        <img src="image4_url" alt="image4" />
      </div>
    </Carousel>
    <button onClick={closeModal}>Close</button>
  </div>
);
const Engexp = () => {
  const { ref: ref22, animate: animate22 } = useIntersectionObserver();

  
  const [isExpanded, setIsExpanded] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const toggleExpansion = () => { setIsExpanded(!isExpanded); };
  const handleClick = () => { alert("Sublogo clicked!"); };

  const openModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      {isModalOpen && <Modal message={modalMessage} closeModal={closeModal} />}
      <div 

ref={ref22} className={`logoctn1 ${animate22 ? 'animate' : ''}`}


        style={{
         
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          alignContent:'center',
width:'100%',
          position:'relative',
         
        
          
          transform: isExpanded ? 'scale(0.8)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
      >
        <div className='adobelogo' 


         onClick={toggleExpansion}
          style={{
            display:'flex',
            flexWrap:'wrap',
            justifyContent: 'center',
    alignContent: 'center',
          position:'relative',
          zIndex:'2',
          borderRadius:'15px',
          width: '100%',
        
          alignContent:'center',
          justifyContent:'center',
       
          backgroundSize:'cover',
          transform: isExpanded ? 'scale(0.8)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}> 

         <h2 
        className= 'adbe' 
        style={{
          backgroundColor:'#f5f5f5',
          height: '70px',}}
        data-text= ' Portfolio combined'>
Projects |>          </h2>

        </div>
        <div className='subadlogos' style={{
          borderRadius:'50%',
          top:'10%',
          left:'50%',
          width: '00px',
          backgroundColor:'red',
          height: '50%',
          backgroundSize:'cover',
          position: 'absolute',
          zIndex:'1',
        }}>
          <div 
            className={`sublogo ${isExpanded ? 'expand adpsdiv' : 'retract'}`} 
            style={{width: '50px',color:'#59a5ea', height: '50px', backgroundColor: '#091e33' }}
            onClick={() => openModal('You clicked on green logo!')}
          > PS</div>

          <div 
            className={`sublogo ${isExpanded ? 'expand adxddiv' : 'retract'}`}  
            style={{width: '50px',color:'#e9a343',height: '50px', backgroundColor: '#2f0a08' }}
            onClick={() => openModal('You clicked on yellow logo!')}
          >AI</div>
          <div 
            className={`sublogo ${isExpanded ? 'expand adaidiv' : 'retract'}`}  
            style={{width: '50px', height: '50px',color:'#9a9bf2', backgroundColor: '#01005d' }}
            onClick={() => openModal('You clicked on orange logo!')}
          >PR</div>
          <div 
            className={`sublogo ${isExpanded ? 'expand addwdiv' : 'retract'}`} 
            style={{width: '50px', height: '50px', backgroundColor: 'pink' }}
            onClick={() => openModal('You clicked on pink logo!')}
          >CAD</div>
        </div>
      </div>
    </>
  );
}



const Logo3 = () => {
  
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='logoctn3' 
     
    
      style={{
        display:'flex',
        justifyContent:'center',
        position:'relative',
      
        width: '100%',
        height: '25%',


        backgroundSize:'cover',
        transform: isExpanded ? 'scale(0.8)' : 'scale(1)', // Add this line
        transition: 'transform 0.3s ease', // Add this line to animate the scaling

        
      }}
    >
      <div className='csslogo' 
       onClick={toggleExpansion}
        style={{
        position:'relative',
        zIndex:'2',
        borderRadius:'50%',
        width: '50%',
        height: '100%',
        backgroundColor:'blue',
        backgroundSize:'cover',
        transform: isExpanded ? 'scale(0.8)' : 'scale(1)', // Add this line
        transition: 'transform 0.3s ease', // Add this line to animate the scaling

        
      }}></div>
      <div className='subcsslogos' style={{

        borderRadius:'50%',
        top:'10%',
        left:'50%',
        width: '00px',
        backgroundColor:'red',
        height: '50%',
        backgroundSize:'cover',
        position: 'absolute',
        
        zIndex:'1',
      }}>
        <div className={`subcsslogo ${isExpanded ? 'expand csscodepen' : 'retract'}`} style={{width: '50px', height: '50px', backgroundColor: 'green' }}></div>
     
      </div>
    </div>
  );
}



const Skills = () => {
  const { ref: ref1, animate: animate1 } = useIntersectionObserver();
  const { ref: ref2, animate: animate2 } = useIntersectionObserver();
  const { ref: ref3, animate: animate3 } = useIntersectionObserver();
  const { ref: ref4, animate: animate4 } = useIntersectionObserver();
  const { ref: ref5, animate: animate5 } = useIntersectionObserver();
  const { ref: ref6, animate: animate6 } = useIntersectionObserver();
  const { ref: ref20, animate: animate20 } = useIntersectionObserver();

  const [isClickedSociable, setIsClickedSociable] = useState(false);
  const [isClickedKind, setIsClickedKind] = useState(false);
  const [isClickedIntelligent, setIsClickedIntelligent] = useState(false);
  const [isClickedLightningLearner, setIsClickedLightningLearner] = useState(false);
  const [isClickedLeader, setIsClickedLeader] = useState(false);
  const [isClickedSophisticated, setIsClickedSophisticated] = useState(false);
  const sociableRef = useRef(null);
  const kindRef = useRef(null);
  const intelligentRef = useRef(null);
  const LIGHTRef = useRef(null);
const LeaderRef = useRef(null);
const SophisticatedRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {

      if (sociableRef.current && !sociableRef.current.contains(event.target)) {
        setIsClickedSociable(false);
      }
      if (kindRef.current && !kindRef.current.contains(event.target)) {
        setIsClickedKind(false);
      }
      if (intelligentRef.current && !intelligentRef.current.contains(event.target)) {
        setIsClickedIntelligent(false);
      }
      if (LIGHTRef.current && !sociableRef.current.contains(event.target)) {
        setIsClickedSociable(false);
      }
      if (LeaderRef.current && !kindRef.current.contains(event.target)) {
        setIsClickedKind(false);
      }
      if (SophisticatedRef.current && !intelligentRef.current.contains(event.target)) {
        setIsClickedIntelligent(false);
      }
    };

    // Attach the listeners on component mount.
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Detach the listener on component unmount.
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const skillseach = {

   

    color:'#f5f5f5',
        fontSize:'40px',
        transition: 'all 0.5s ease',
        display:'inline',
        width:'10%',
      
      }
  return (
  
    
   
<div

className={`testdiv ${animate1 ? 'animate' : ''}`}
>
<span  
ref={ref1} className={`skillss ${animate1 ? 'animate' : ''}`}
>S
<span 

ref={(element) => {
  ref20.current = element;
  sociableRef.current = element;
}}
 className={`sociable ${animate20 ? 'animate' : ''}`}



 onClick={() => setIsClickedSociable(!isClickedSociable)} 
 style={{color:'white',
 position:'relative',
       
 transition:'visibility 0.1s ease',

 visibility: isClickedKind ? 'hidden' : 'visible',

 transition:'top 0.5s ease',
 textTransform:'lowercase',

 top: isClickedSociable ? '-25px' : '0',
 zIndex:'5',
 }} >ociable
 </span>
<span className='sociablespanclass' style={{ 
  left:'15px',
       opacity: isClickedSociable ? '1' : '0',
       top: isClickedSociable ? '15px' : '0px',
       transition: 'all 0.5s ease',
      
            textAlign:'center',
      
      position:'absolute',

      display:'inline-flex',
      width:'400px',
      zIndex:'3',

     
      
     
      
      
      }} > lightly introverted though  </span>
</span>
<span 
ref={ref2} className={`skillsk ${animate2 ? 'animate' : ''}`}
style={{color:'white'}}>K
<span  

ref={(element) => {
  ref20.current = element;
  kindRef.current = element;
}}
 className={`kind ${animate20 ? 'animate' : ''}`}




 onClick={() => setIsClickedKind(!isClickedKind)} 
 style={{color:'white',
 position:'relative',
       

 transition:'all 1.0s ease',
 textTransform:'lowercase',
 color: isClickedKind ? 'transparent':'#f5f5f5',


 zIndex:1,
 }} >ind
 </span>
<span className="kindspanclass" style={{ 
       
       opacity: isClickedKind ? '1' : '1',
       top: isClickedKind ? '10px' : '10px',
       transition: 'all 1.0s ease',
      left:'20px',
      opacity: isClickedKind ? '1':'0',
       textAlign:'center',
      color: '#f5f5f5',
      zIndex:0,
 
 position:'absolute',

 display:'inline-flex',
 width:'400px',

 
      
     
      
      
      }} >  een generosity   </span>
      
      </span>
<span
ref={ref3} className={`skillsi ${animate3 ? 'animate' : ''}`}
style={{color:'white'}}>I


<span  
ref={(element) => {
  ref20.current = element;
  intelligentRef.current = element;
}}
 className={`intelligent ${animate20 ? 'animate' : ''}`}



 onClick={() => setIsClickedIntelligent(!isClickedIntelligent)} 
 style={{color:'white',
 position:'relative',
       
 transition:'all 1s ease',

 left:'-5px',
 textTransform:'lowercase',
zIndex:5,
color: isClickedIntelligent ? 'transparent':'#f5f5f5',
 
 }} >ntelligent
 </span>
<span  className="intelligentspanclass"style={{ 
       opacity: isClickedIntelligent ? '1' : '0',
       top: isClickedIntelligent ? '9.5px' : '10px',
       transition: 'all 1.0s ease',
      
       textAlign:'left',
      color: '#f5f5f5',
 left:'15px',
 lineHeight:'10px',
 
 position:'absolute',

 display:'inline-flex',
 width:'400px',

 
     
      
      
      }} >  am relatively <br></br> competent individual  </span>

</span>
<span 
ref={ref4} className={`skillsl ${animate4 ? 'animate' : ''}`}
style={{color:'white'}}>L
<span
ref={(element) => {
  ref20.current = element;
  LeaderRef.current = element;
}}
 className={`leader ${animate20 ? 'animate' : ''}`}

 onClick={() => setIsClickedLeader(!isClickedLeader)} 
 style={{color:'white',
 position:'relative',
       


 transition:'all 1.0s ease',
 textTransform:'lowercase',
 zIndex:'5',

 color: isClickedLeader ? 'transparent' : '#f5f5f5',
 
 }} >eader
 </span>
<span  className="leaderspanclass"style={{ 
        
        opacity: isClickedLeader ? '1' : '0',
        
        top: isClickedLeader ? '10px' : '10px',
        transition: 'all 0.5s ease',
 
        textAlign:'left',
        color: '#f5f5f5',
     
   left:'18px',
   
   position:'absolute',
  
   display:'inline-flex',
   width:'400px',

  
  
       
       }} > ogical directionist <br></br> </span>


      </span>
<span 
ref={ref5} className={`skillsli ${animate5 ? 'animate' : ''}`}
style={{color:'white'}}>L
<span 
ref={(element) => {
  ref20.current = element;
  LIGHTRef.current = element;
}}
 className={`learner ${animate20 ? 'animate' : ''}`}


 onClick={() => setIsClickedLightningLearner(!isClickedLightningLearner)} 
 style={{color:'white',
 position:'relative',
       


 transition:'all 1.0s ease',
 textTransform:'lowercase',
zIndex:5,
color: isClickedLightningLearner ? 'transparent' : '#f5f5f5',
 
 }} >earner
 </span>
<span className='learnerspanclass' style={{ 
          transition: 'all 0.5s ease',

          left:'0px',
          textAlign:'left',
         color: '#f5f5f5',
       
        textAlign:'left',
        color: '#f5f5f5',
   left:'20px',
   
   position:'absolute',
  
   display:'inline-flex',
   width:'400px',
   zIndex:1,
       
   opacity: isClickedLightningLearner ? '1' : '0',


      
      
      }} > igntning comprehension   <br></br> 
       </span></span>
<span
ref={ref6} className={`skillssi ${animate6 ? 'animate' : ''}`}
 style={{color:'white'}}>S
 <span  
 
 ref={(element) => {
  ref20.current = element;
  SophisticatedRef.current = element;
}}
 className={`strategic ${animate20 ? 'animate' : ''}`}

 onClick={() => setIsClickedSophisticated(!isClickedSophisticated)} 
 style={{color:'white',
 position:'relative',
       
 transition:'all 1s ease',

color: isClickedSophisticated ? 'transparent':'#f5f5f5',
 textTransform:'lowercase',
zIndex:5,
 
 }} >trategic
 </span>
  <span  className='sociable2spanclass' style={{ 
              transition: 'all 0.5s ease',


     
    opacity: isClickedSophisticated ? '1':'0',


         color: '#f5f5f5',
        textAlign:'left',
        color: '#f5f5f5',
   left:'20px',
   
   position:'absolute',
  
   display:'inline-flex',
   width:'400px',
  


    
      }} >  imple but tactical </span>
</span>




</div>
   
    
     
    
  );
}





function App() {

  
  const { ref: ref7, animate: animate7 } = useIntersectionObserver();
  const { ref: ref8, animate: animate8 } = useIntersectionObserver();
  const { ref: ref9, animate: animate9 } = useIntersectionObserver();
  const { ref: ref10, animate: animate10 } = useIntersectionObserver();
  const { ref: ref11, animate: animate11 } = useIntersectionObserver();
  const { ref: ref12, animate: animate12 } = useIntersectionObserver();
  const { ref: ref13, animate: animate13 } = useIntersectionObserver();
  const { ref: ref14, animate: animate14 } = useIntersectionObserver();
  const { ref: ref15, animate: animate15 } = useIntersectionObserver();
  const { ref: ref16, animate: animate16 } = useIntersectionObserver();
  const { ref: ref17, animate: animate17 } = useIntersectionObserver();
  const { ref: ref18, animate: animate18 } = useIntersectionObserver();


  const [buttonActive, setButtonActive] = useState(false);

  const toggleButtonActive = () => {
    setButtonActive(!buttonActive); // toggle button active state
  }

  function scrollToMainHomeCtnSection() {
    var targetPos = window.pageYOffset + window.innerHeight;
    window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
    });
}



 



  const SKmidlogos= {

  
    width: '17%',
    height: '100px',
    backgroundImage: `url(${AdobeLogo})`,
    backgroundSize:'cover',
  
  }
  const lightbulbcss= {

 

  display:'flex',
    width: '100%',
    height: '200px',
    backgroundImage: `url(${lightbulb})`,
    backgroundSize:'contain',
    zIndex:1,
    backgroundRepeat:'no-repeat',
  
  }

  const lightbulbctncss = 
  {
    justifyContent:'end',
    display:'flex',
     position:'relative',
      width:'100vw',
      height:'500px'

  }



  const alignlefttexth1 = {
    textAlign:'left',
    fontSize: '30px' ,
    fontWeight:'500',
    marginBottom:'20px'
  }
  const alignrightexth1 = {
    textAlign:'right',
    fontSize: '30px' ,
    fontWeight:'500',
    marginBottom:'20px'
  }

  const btnnextviewcss = {
    width:'100%',
 
    textAlign:'center',
 
    marginBottom:'20px'
  }
  const baseBoxStyles = {
  
    position: 'relative',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', // assuming you meant this instead of alignContent
  height: '100%',
  fontSize: 100,
  };
 
  let baseBoxHoverStyles = {

 
    transform:'scale(1.05)',
    display:'flex',
    justifyContent: 'center',
    alignContent: 'center',
    justifyItems: 'center',
    position: 'relative',
    width: '100%',
    borderRadius:'20px',
  
    height:'200px',
   
    background:'radial-gradient(90deg, hsla(12, 64%, 51%, 1) 5%, hsla(214, 71%, 45%, 1) 24%, hsla(146, 72%, 28%, 1) 42%, hsla(281, 59%, 47%, 1) 65%, hsla(352, 70%, 40%, 1) 77%, hsla(184, 71%, 37%, 1) 100%)',
  };

 

 
  return (  

    


    <div className="mainDiv" style={{
      display: 'flex',
      flexWrap:'wrap',
      flexDirection:'row',
      maxWidth:'100vw',
      overflowX:'hidden',
    

      width:'100%',
    
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      backgroundAttachment: 'fixed'}}
    >

 

     
     
        <div className='blurmaindiv' style={{ 


}}> <div className="section1" style={{
          display: 'flex',
          flexWrap:'wrap',
          padding:'20px',
         justifyContent:'center',
          flexDirection:'row',
          height:'100vh',
    
           width:'100%',
 // Add a gradient background from navy blue to transparent

       
        


      }}>
        <div style={{ width:'80%',}}>
        <div className='resuportHeader' style={{
   display: 'flex',
   flexWrap:'wrap',
   flexDirection:'row',
   paddingRight: '40px',
   paddingLeft: '40px',


margin:'0',position:'relative',
width:'100%',
height:'100%',
 

        }} >



        <div className='resuporth1ctn'> 
        <h1 className='resuporth1I' data-text='I'> 
        
        I 
        <div className='headerbox' style={{border:'1px solid #f5f5f5',
        borderLeft:'0px',
        fontSize:'10px',
        display: 'flex',
        flexDirection:'column',
        boxShadow:'15px 15px 15px -10px #0f0f0f99',
        justifyContent:'space-between',
    flexWrap: 'wrap',
    borderTopRightRadius:'7px',
    borderBottomRightRadius:'7px',
    padding:'10px',
       
        transform: 'translateY(1.5px)',
         width:'80%',height:'137.5px', overflow:'hidden',}} >

         <h1 className='headerboxname' style={{fontSize:'18px',
                 textAlign:'right',
                 fontWeight:'500',
               display:'flex',
               justifyContent:'flex-end',
               alignItems:'center',

        width:'100%',}}>AM  JORGE RODRIGUEZ <br></br> 
        </h1> 
        <h1 className='headerboxhead'
        style={{fontSize:'16px',
                 textAlign:'right',
                 display:'flex',
                 justifyContent:'flex-end',
                 alignItems:'center',

       width:'100%',}}>This is my resume <br></br> 
        </h1> 
        
        <h1 className='headerboxnum'style={{fontSize:'16px',
                 textAlign:'right',
                 display:'flex',
                 justifyContent:'flex-end',
                 alignItems:'center',
       width:'100%',}}>786-731-9196  <br ></br> 
       
        </h1> 
        <h1 className='headerboxemail'style={{fontSize:'16px',
                 textAlign:'right',
                 display:'flex',
                 justifyContent:'flex-end',
                 alignItems:'center',

       width:'100%',
        letterSpacing:'1.5px',}}>jorgepita123@gmail.com <br ></br> 
       
        </h1> 
        

        

          
        </div>

        
        </h1>
       
      
  
      
        </div>

      

     
        </div>
        </div>
       

<div className="TOCButtonsCTN" 
style={{width:'100%', padding:'70px',
display:'flex',
flexWrap:'wrap',
gap:'1px',
justifyContent:'center',
transform:'scale(0.99)',
alignContent:'center',}}>

  <div className='Objgotobtn'
  style={{
    justifyContent:'center',
     display:'flex',
  alignContent:'center',
  alignItems:'center',
    width:'25%', height:'50px', border:'1px solid #f5f5f599',}}
  >
    Objective
  </div>
  <div className='enggotobtn' 
    style={{
      justifyContent:'center',
      display:'flex',
   
   alignContent:'center',
   alignItems:'center',width:'25%', height:'50px', border:'1px solid #f5f5f599',}}
    >
 Engineering
    </div>
  <div className='essgotobtn'   style={{
     justifyContent:'center',
     display:'flex',
  alignContent:'center',
  alignItems:'center',width:'25%', height:'50px', border:'1px solid #f5f5f599',}}
>
 Soft Skills
</div>
  <div className='edugotobtn'   style={{
     justifyContent:'center',
     display:'flex',
  alignContent:'center',
  alignItems:'center',width:'25%', height:'50px', border:'1px solid #f5f5f599',}}
>Education</div>
  <div className='congotobtn'   style={{
     justifyContent:'center',
     display:'flex',
  alignContent:'center',
  alignItems:'center',width:'25%', height:'50px', border:'1px solid #f5f5f599',}}
>Contact Me</div>
<div className='resudownloadbtn'   style={{
   justifyContent:'center',
   display:'flex',
alignContent:'center',
alignItems:'center',width:'25%', height:'50px', border:'1px solid #f5f5f599',}}
> Resume </div>

</div>



          
          <div class="blur-div1">
      
     

      <div class="mainpgexplorebtn" onClick ={() => scrollToMainHomeCtnSection('')}>
  <span class="mainpgexplorebtn-text" style={btnnextviewcss} >Begin</span>
  
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path class="svgmainarrow-path-1" fill="none" stroke="#f5f5f525" stroke-width="0.5" stroke-linecap="round" d="M6 10l6 6 6-6" />
  </svg>
 
  
  </div>
    </div>
        </div>
        <div className="section2" style={{
justifyContent: 'center',
alignItems: 'center',
justifyItems: 'center',
display: 'flex',
flexWrap:'wrap',
height:'auto',
      

      }}>
      

        <h1 className="objh1" style={{ 

          position:'relative',
          top:'25%',
           textAlign:'center',
           color: '#f5f5f5cc',
           textShadow:'0px 5px 10px #0f0f0f',
         
           marginLeft: '20px',
      zIndex:2,
      width:'100%',
     }}> Objective</h1>

<div
className="lightbulbctn"

 style={lightbulbctncss}>
  <div style={{width:'100%',}}
   ref={ref7}>
<svg className="lightbulb"style={{width:'100%',}}id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-40 -20 200.51 250.18">
  <defs>

  </defs>
  <path 
 
 className={`cls-3 ${animate7 ? 'animate' : ''}`}

  d="m102.65,154.87c0-2.9-3.42-4.47-5.6-2.55-5.01,4.43-11.55,6.97-18.42,6.91-8.04-.07-14.01-3.66-17.93-7.16-2.17-1.94-5.61-.38-5.61,2.53v26.52c0,6.58,5.34,11.92,11.92,11.92h23.72c6.58,0,11.92-5.34,11.92-11.92v-26.25Z"/>
  <path 
  class="cls-3" 
  d="m122.27,73.74c0-23.97-19.44-43.41-43.41-43.41s-43.41,19.44-43.41,43.41c0,15.19,7.81,28.55,19.63,36.31v15.52c0,13.13,10.65,23.78,23.78,23.78s23.78-10.65,23.78-23.78v-15.52c11.82-7.76,19.63-21.12,19.63-36.31Z"/>
   <circle className={`cls-31 ${animate7 ? 'animate' : ''}`}  cx="79" cy="73.5" r="42.5" stroke="#f5f5f525" stroke-width="0.5" fill="none"/>
   <circle className={`cls-32 ${animate7 ? 'animate' : ''}`}  cx="79" cy="73.5" r="41.5" stroke="#f5f5f525" stroke-width="0.5" fill="none"/>
   <circle className={`cls-33 ${animate7 ? 'animate' : ''}`}  cx="79" cy="73.5" r="40.5" stroke="#f5f5f525" stroke-width="0.5" fill="none"/>
   <circle className={`cls-34 ${animate7 ? 'animate' : ''}`}  cx="79" cy="73.5" r="39.5" stroke="#f5f5f525" stroke-width="0.5" fill="none"/>
   <circle className={`cls-35 ${animate7 ? 'animate' : ''}`}  cx="79" cy="73.5" r="38.5" stroke="#f5f5f525" stroke-width="0.5" fill="none"/>
   <circle className={`cls-36 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="37.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-37 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="36.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-38 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="35.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-39 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="34.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-40 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="33.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-41 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="32.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-42 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="31.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-43 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="30.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-44 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="29.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-45 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="28.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-46 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="27.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-47 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="26.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-48 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="25.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />

<circle className={`cls-49 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="24.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-50 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="23.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-51 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="22.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-52 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="21.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-53 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="20.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-54 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="19.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-55 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="18.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-56 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="17.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-57 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="16.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-58 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="15.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-59 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="14.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-60 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="13.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-61 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="12.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-62 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="11.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-63 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="10.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-64 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="9.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-65 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="8.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-66 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="7.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-67 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="6.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-68 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="5.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-69 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="4.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-69 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="3.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-70 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="2.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />
<circle className={`cls-71 ${animate7 ? 'animate' : ''}`} cx="79" cy="73.5" r="1.5" stroke="#f5f5f525" strokeWidth="0.5" fill="none" />

  <path 
   className={`cls-1 ${animate7 ? 'animate' : ''}`}

   d="m61.53,172.42s25.49,7.35,34.68,0"/>
  <path
  className={`cls-1 ${animate7 ? 'animate' : ''}`}
  d="m61.53,181.79s25.49,7.35,34.68,0"/>
  <path 
  className={`cls-1 ${animate7 ? 'animate' : ''}`}
  
  d="m61.53,163.94s25.49,7.35,34.68,0"/>
  <line 
   className={`cls-21 ${animate7 ? 'animate' : ''}`}
  x1=".03" y1="69.87" x2="27.05" y2="70.73"/>
  <line
   className={`cls-22 ${animate7 ? 'animate' : ''}`}
  x1="7.2" y1="36.54" x2="31.14" y2="49.06"/>
  <line 
   className={`cls-23 ${animate7 ? 'animate' : ''}`}
  x1="29.9" y1="12.6" x2="44.14" y2="35.57"/>
  <line 
  className={`cls-24 ${animate7 ? 'animate' : ''}`}
  x1="61.63" y1=".1" x2="64.46" y2="26.97"/>
  <line 
  className={`cls-25 ${animate7 ? 'animate' : ''}`}
  x1="106.63" y1=".78" x2="95.4" y2="25.36"/>
  <line 
   className={`cls-26 ${animate7 ? 'animate' : ''}`}
  x1="134.61" y1="20.28" x2="113.81" y2="37.51"/>
  <line 
   className={`cls-27 ${animate7 ? 'animate' : ''}`}
  x1="148.67" y1="42.57" x2="124.01" y2="53.64"/>
  <line 
  className={`cls-28 ${animate7 ? 'animate' : ''}`}
  x1="156.84" y1="75.68" x2="129.83" y2="74.91"/>
</svg>
</div>


</div>









        <p style={{ 
          width:'65%',
         
          position:'relative',
          lineHeight:'2',
            textAlign:'justify',
           color: '#f5f5f5cc',
         
      paddingLeft:'20px', 
      paddingRight:'20px', 
      zIndex:3,
     
      
      
      }}>
          I aspire to be a great innovative figure and while I am only begining to get on the road, I hope to make a stop at a suitable company for a couple years, possibly longer.
        </p>

      
        <div class="mainpgexplorebtn" onClick ={() => scrollToMainHomeCtnSection('')}>
  <span class="mainpgexplorebtn-text" style={btnnextviewcss} >Engineering / Design</span>
  
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path class="svgmainarrow-path-1" fill="none" stroke="#f5f5f525" stroke-width="0.5" stroke-linecap="round" d="M6 10l6 6 6-6" />
  </svg>

  
  </div>

      </div>



      <div className="section3" style={{
height:'fit-content',
display: 'flex',
flexWrap:'wrap',
gap:'100px',

      

      }}>

        <div className="gridcssctn" ref={ref9} style={{height:'600px',width:'100%',
      }}>
            <h1 className='engh1'
      
      > Engineering/Design</h1>


<div style={{display:'flex', width:'600px',
height:'600px',}}>
        <div 
        className={`vgl ${animate9 ? 'animate' : ''}`}

         style={{height:'100%',
      width:'100%',
      position:'relative', display: 'flex'
      }}>
          <div
        ></div>
          <div >''</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`hgl ${animate9 ? 'animate' : ''}`}
         style={{height:'600px',
      width:'600px',
      

      display: 'flex',
      flexWrap:'wrap',
      }}>
          <div
          ></div>
          <div ></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
       
        <div className='engskills  '  ref={ref8}>
     
     <p
      className={`engdesp1 ${animate8 ? 'animate' : ''}`}
>Problem Solving Capabilites</p>
     <p 
      className={`engdesp2 ${animate8 ? 'animate' : ''}`}
     
      
       
       
       >CAD<br></br></p>
     <p 
      className={`engdesp3 ${animate8 ? 'animate' : ''}`}
      > 
     D modeling & Printing<br></br></p>
     <p  
      className={`engdesp4 ${animate8 ? 'animate' : ''}`}
      > UX / UI Design</p>
     
     
     <Engexp />
     </div>
       
        </div>
    
      
    
        </div>
      


    


 
        <div class="blur-div1">
      
     

      <div class="mainpgexplorebtn" onClick ={() => scrollToMainHomeCtnSection('')}>
  <span class="mainpgexplorebtn-text" style={btnnextviewcss} >Web & App <br></br>Development/Design</span>
  
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path class="svgmainarrow-path-1" fill="none" stroke="#f5f5f525" stroke-width="0.5" stroke-linecap="round" d="M6 10l6 6 6-6" />
  </svg>
  
  
  </div>
    </div>
         
      </div>
     

      <div className="section4" style={{
height:'1096px',
marginTop:'0px',

width:'100%',
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'center',

      }}>
        <div className="skillsmainctn" style={{height:'fit-content', width:'100%',
            justifyContent:'center',
            display:'flex',
            flexWrap:'wrap',
          }}>

        <h1 className="essentialh1" > 
   Essential </h1 > 
<Skills/>




        </div>
     



    
        

     <div className='scrollortoc' style= {{
      display: 'flex',
      position:'relative',
      flexWrap: 'wrap',
      flexDirection:'row',
      top:'100px',
     }}>  <div >
      <div class="mainpgexplorebtn" onClick ={() => scrollToMainHomeCtnSection('')}>
  <span class="mainpgexplorebtn-text" style={btnnextviewcss}>Education</span>
  
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path class="svgmainarrow-path-1" fill="none" stroke="#f5f5f525" stroke-width="0.5" stroke-linecap="round" d="M6 10l6 6 6-6" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path class="svgmainarrow-path-2" fill="none" stroke="#f5f5f525" stroke-width="0.5" stroke-linecap="round" d="M6 10l6 6 6-6" />
  </svg>
  
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path class="svgmainarrow-path-3" fill="none" stroke="#f5f5f525" stroke-width="0.5" stroke-linecap="round" d="M6 10l6 6 6-6" />
  </svg>
  
  </div>
    </div>

</div>
      

         
      </div>


      <div className="section6"
      ref={ref14}
       style={{
        gap:'50px',
        width:'100%',

display: 'flex',
paddingRight:'50px',
paddingLeft:'50px',

flexWrap:'wrap',
      

      }}>
     
<h1 

className={`educationh1 ${animate14 ? 'animate' : ''}`}

style={{width:'100%',
paddingRight:'50px',
paddingLeft:'50px',
textAlign:'center',}}> 

      Education</h1>

        <p
        
        style={{paddingRight:'20px',
        paddingLeft:'20px',
        width:'100%',
        textAlign:'center',
        fontSize:'22px',}}>I plan on pursuing further education in Miami.</p>

      <div className='edupclasses'>
        <div className='edutimeline'
      style={{width:'100%',
      display:'flex',
      flexWrap:'wrap',
      position:'relative',
      color:'white',
      height:'500px',
      gap:'0px',}}>


        <div className="timelinectn1style" ref={ref10} style={{width:'100%',
      height:'100px',
      display:'flex',
      flexDirection:'row-reverse',
      gridTemplateColumns:'1fr 1fr 1fr',
    justifyItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',}}>




<div style={{width:'100%',
display:'flex',
justifyContent:'center',
alignItems:'center',
}}>
 <svg 
  className={`ball1 ${animate10 ? 'animate' : ''}`}
  style={{transform:'scaleX(-1)',}}
  id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 100.99 130.1">
  <defs>
    <pattern id="image" patternUnits="userSpaceOnUse" width="150" height="130">
      <image xlink:href="/mdccirclelogo.png" href="src/mdccirclelogo.png" x="-30" y="-10" width="175" height="175" />
    </pattern>
  </defs>
  <path 
    style={{transform:'scaleX(-1)',}} 
    class="cls-1ball" 
    d="m52.44.5C31.18.5,12.39,11.04.97,27.16h33.02v72.78H.97c11.42,16.12,30.21,26.66,51.47,26.66,34.82,0,63.05-28.23,63.05-63.05S87.26.5,52.44.5Z" 
    fill="url(#image)" />
</svg>


<div
       className={`line1h3style ${animate10 ? 'animate' : ''}`}
        style={{
          display:'flex',
          flexWrap:'wrap',
          left: '-60px',
          alignContent:'center',
          boxShadow:'0px 5px 10px #0f0f0fcc',
          alignItems:'center',
          alignContent:'space-between',
  
        width:'399px',
        height:'50px',
        position:'relative',
        top:'-1px',
        fontSize:'12px',
        textAlign:'left',
    justifyContent:'space-between',
    borderRadius:'0px',
    border: '1px solid #f5f5f5',
  
    padding:'10px',}}><h3  style={{   
      fontSize:'10px',}}
    >Miami Springs <br></br>High School</h3>
     <h3 style={{   
      textAlign:'right',  fontSize:'10px',}}>
    Graduated <br></br>2018
    </h3>
    </div>
    


</div>


        </div>
        

       
        <div className="timelinectn3style" ref={ref10} style={{width:'100%',
      height:'100px',
      display:'flex',
      flexDirection:'row-reverse',
      gridTemplateColumns:'1fr 1fr 1fr',
    justifyItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',}}>


     

<div style={{width:'100%',
display:'flex',
justifyContent:'center',
alignItems:'center',
}}>
 <svg 
  className={`ball3 ${animate10 ? 'animate' : ''}`}
  style={{transform:'scaleX(-1)',}}
  id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 100.99 130.1">
  <defs>
    <pattern id="image" patternUnits="userSpaceOnUse" width="150" height="130">
      <image xlink:href="/mdccirclelogo.png" href="src/mdccirclelogo.png" x="-30" y="-10" width="175" height="175" />
    </pattern>
  </defs>
  <path 
    style={{transform:'scaleX(-1)',}} 
    class="cls-1ball" 
    d="m52.44.5C31.18.5,12.39,11.04.97,27.16h33.02v72.78H.97c11.42,16.12,30.21,26.66,51.47,26.66,34.82,0,63.05-28.23,63.05-63.05S87.26.5,52.44.5Z" 
    fill="url(#image)" />
</svg>


<div
       className={`line3h3style ${animate10 ? 'animate' : ''}`}
        style={{
        display:'flex',
        left: '-25px',
        alignContent:'center',
        boxShadow:'0px 5px 10px #0f0f0fcc',
        alignItems:'center',

        width:'399px',
        height:'50px',
        position:'relative',
        top:'-1px',
        fontSize:'12px',
        textAlign:'left',
    justifyContent:'space-between',
    borderRadius:'0px',
    border: '1px solid #f5f5f5',
  
    padding:'10px',}}>
         <h3 style={{   
        textAlign:'left',     fontSize:'10px',
}}>SFTEC Automotive <br></br>
    Technician Training<br></br> 
   
    </h3>
    <h3 style={{   
      textAlign:'right',  fontSize:'10px',}}>
    Attended <br></br>2018-2019
    </h3>
      </div>


</div>


        </div>
        <div className="timelinectn4style" ref={ref10} style={{width:'100%',
      height:'100px',
      display:'flex',
      gridTemplateColumns:'1fr 1fr 1fr',
    justifyItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',}}>



<div style={{width:'100%',
display:'flex',
justifyContent:'center',
alignItems:'center',
}}>
 <svg 
  className={`ball4 ${animate10 ? 'animate' : ''}`}
  style={{transform:'scaleX(-1)',}}
  id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 100.99 130.1">
  <defs>
    <pattern id="image" patternUnits="userSpaceOnUse" width="150" height="130">
      <image xlink:href="/mdccirclelogo.png" href="src/mdccirclelogo.png" x="-30" y="-10" width="175" height="175" />
    </pattern>
  </defs>
  <path 
    style={{transform:'scaleX(-1)',}} 
    class="cls-1ball" 
    d="m52.44.5C31.18.5,12.39,11.04.97,27.16h33.02v72.78H.97c11.42,16.12,30.21,26.66,51.47,26.66,34.82,0,63.05-28.23,63.05-63.05S87.26.5,52.44.5Z" 
    fill="url(#image)" />
</svg>


<div
       className={`line4h3style ${animate10 ? 'animate' : ''}`}
        style={{
        display:'flex',
        left: '-25px',
        alignContent:'center',
        boxShadow:'0px 5px 10px #0f0f0fcc',
        alignItems:'center',

        width:'399px',
        height:'50px',
        position:'relative',
        top:'-1px',
        fontSize:'12px',
        textAlign:'left',
    justifyContent:'space-between',
    borderRadius:'0px',
    border: '1px solid #f5f5f5',
  
    padding:'10px',}}> 
        <h3 style={{   
        textAlign:'left',     fontSize:'10px',
}}>Weighing Options on <br></br>
    Further Education<br></br> 
   
    </h3>
    <h3 style={{   
      textAlign:'right',  fontSize:'10px',}}>
    Attending <br></br>2025 - ∞
    </h3>
    </div>


</div>


        </div>
      </div>

      <div className='continuededu'> 
     
      <div className='currentstudies'>
        <h3>
        - Associate in Arts, Engineering-Mechanical  
        
        </h3>

        <h3>
      - Mechatronics Minor
        </h3>
        </div>

        <div className='prevwork'>
        <h1 style={{borderBottom:'1px solid #f5f5f5',}}> Work Experience</h1>
      </div>      </div>

     
      </div>

        <div class="blur-div1">
      
     

 
    </div>
         
      
      </div>

      <div className="section7" style={{width:'100%',height:'1000px',}}>
<div className='contactfoot' style={{width:'100%',height:'fit-content', borderTop:'1px solid #f5f5f5',
padding:'50px',
display:'flex',
flexWrap:'wrap',
justifyContent:'justify',
alignContent: 'center',}}> 
<div className="emaildiv"style={{    display: 'flex',
    width: '100%',
    height: '100px',
    fontSize:'22px',
    alignContent: 'space-around',
    flexWrap: 'wrap',
    color:'#f5f5f5',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    position:'relative',
    right:'-5%',
}}>

 
</div>


<h2></h2> 

</div>
        <div className='couplelinks' style={{display:'flex',
      justifyContent:'space-evenly',
      alignItems:'center',
      padding:'50px',}}>
          <div className='sqq1' style={{ width:'25%', height: '100px', border:'1px solid #f5f5f599',borderRadius:'10px',
        overflow:'hidden',}}>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-35 -20 225.0 151.5">
  <defs>
    <style>
    
    </style>
  </defs>
  <path class="ph-1" d="m102.42,58.93c-4.1,7.5-8.9,14.6-15.1,21.1-6.2,6.6-13.9,12.6-23.8,17.7-.7.4-1.4.4-2.1.1-1-.3-1.9-1.1-2.9-2.1-.7-.7-1.7-1.9-2.6-3.2-3.8-5.1-8.6-11.3-15.3-8.2-.2.1-.3.2-.4.2l-22.4,12.9c-.1,0-.2.1-.2.2-3,2-4.2,5.1-4.2,8.7s1.3,7.7,3.3,11.1c2.6,4.5,6.4,7.5,10.8,9.5,4.2,1.9,8.8,2.9,13.3,3.6,7,1,13.6.4,20.3-1.7,6.6-2,13.2-5.4,20.4-9.8l.5-.3c3.3-2.1,6.9-4.3,10.4-6.9,12.8-9.7,25.9-23.7,34.5-39.1,7.2-12.9,11-26.9,8.9-40.2-1.2-7.3-4.3-13.9-9.8-18.3-4.8-3.8-11.2-5.9-19.5-5.2-1,.1-1.8.6-2.2,1.4l-14.5,24.2c-2.1,2.7-2.4,5.4-1.2,8.1.9,2.2,2.9,4.2,5.5,6.2.8.7,1.7,1.3,2.7,2,3.2,2.3,6.8,5,5.6,8h0Z"/>
  <path class="ph-22" d="m28.59,73.16s-2.49-42.96,52.25-45.4"/>
  <path class="ph-23" d="m16.22,73.71S13.07,18.96,80.35,15.96"/>
  <path class="ph-24" d="m4.03,74.25S.21,7.55,79.75,4"/>
</svg>
          </div>
          <div className='sqq1' style={{ width:'25%', height: '100px', border:'1px solid #f5f5f599',borderRadius:'10px'}}>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-100 -20 375.0 301.5">
  <defs>

  </defs>
  <path class="mg-3" d="m133.86,244.83H31.34c-17.03,0-30.83-13.8-30.83-30.35V81.13l164.18-.48v133.35c0,17.03-13.8,30.83-30.83,30.83Z"/>
  <g>
    <rect class="mg-31" x="20.1" y="105.05" width="54.38" height="5.14"/>
    <rect class="mg-31" x="20.1" y="151" width="54.38" height="5.14"/>
    <rect class="mg-31" x="85.75" y="105.05" width="54.38" height="5.14"/>
    <rect class="mg-31" x="12.61" y="93.76" width="137.95" height="137.95"/>
  </g>
  <polyline class="mgtop" points=".35 80.32 80.55 .7 164.76 80.32"/>
  <polygon class="mg-1" points="83.04 222.04 .99 145.63 .99 119.45 83.04 222.04"/>
  <polygon class="mg-1" points="82.16 222.01 164.21 145.61 164.21 119.45 82.16 222.01"/>
  <path class="mg-2" d="m82.72,220.97L2.63,146.58c-.57-.53-1.4-.67-2.12-.36h0v68.53c0,16.61,13.47,30.08,30.08,30.08h103.42c16.98,0,30.75-13.77,30.75-30.75l-.07-67.84h0c-.67-.32-1.46-.19-2,.31l-79.98,74.41h0Z"/>
</svg>
          </div>
          <div className='sqq1' style={{ width:'25%', height: '100px', border:'1px solid #f5f5f5cc',borderRadius:'10px'}}></div>
    
        </div>
      </div>
      </div>
       
      </div>

    
  );
}

export default App;
