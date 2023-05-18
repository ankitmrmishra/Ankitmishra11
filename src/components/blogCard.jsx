import React from 'react'
import {SiHashnode} from 'react-icons/si'
function blogCard({image , projectName , Hashnode}) {
  return (
    <div>

       < div className="card blog-card"  >
    <div className="img--part">
        <img src={image} alt="Project Image"  />
      
   
    </div>
    <div className="project--description"   
>
        <h1 className="LOREM">{projectName}</h1>
       
         <a href={Hashnode}><SiHashnode /></a>
         
    </div>
    
</div>
    </div>
  )
}

export default blogCard