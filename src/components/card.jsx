import React , {useState} from 'react'
import '/src/css/card.css'
import {BsGithub , BsFileEarmarkCodeFill} from 'react-icons/Bs'
function card({image, projectName, Github , LiveLink}) {


// const [showMessage , setShowMessage] = useState(false);
// const [showImage , setShowImage] = useState(true);
const handleHover = () => {
  console.log();
}

  return (
    <>
<div className="card"  >
    <div className="img--part">
        <img src={image} alt="Project Image"  />
      
   
    </div>
    <div className="project--description"   
>
        <h1 className="LOREM">{projectName}</h1>
        <a href={Github}><BsGithub/></a>
         <a href={LiveLink}><BsFileEarmarkCodeFill/></a>
         
    </div>
    
</div>
 

      {/* {showMessage && <span className="details" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident modi consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae debitis quisquam fugiat, tenetur velit expedita optio doloribus, id aliquid voluptatem, autem excepturi consequuntur. Deleniti reprehenderit, sed nisi asperiores iure aliquam. vitae cupiditate veniam!</span>}
       */}
    </>
  )
}

export default card