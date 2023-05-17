import React , {useState} from 'react'
import './css/Blogs.css'
import BlogCard from './components/blogCard.jsx'
import image1 from './assets/portfolio/3d-business-man-and-woman-working-at-the-table.png'
import image2 from './assets/portfolio/3d-business-man-has-an-idea.png'
import image3 from './assets/portfolio/3d-business-young-woman-working-online.png'
function Blogs() {

const [viewBlog1 , SetviewBlog1] = useState("viewBlog11");


  return (
    <div className='Blogs'>

        <h1>BLOGS</h1>
        <span>Here You Will See My LATEST Writings</span>

<div className="buttons">
  <button className='Technical'   onClick={() => SetviewBlog1("viewBlog11")}>Technical</button>
  <button className='Science' onClick={() => SetviewBlog1("viewBlog12")}>Science</button>
  <button className='Fictional' onClick={() => SetviewBlog1("viewBlog13")}>Fictional</button>
  <button className='Miscellaneous' onClick={() => SetviewBlog1("viewBlog14")}>Miscellaneous</button>
</div>
{viewBlog1 === "viewBlog11" && <div className="blogs Technical--blogs">

<BlogCard image={image1} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image1} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image1} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image1} projectName={"hello"} Hashnode={"www.ank.com"} />



</div> }
{viewBlog1 === "viewBlog12" && <div className="blogs Technical--blogs">

<BlogCard image={image2} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image2} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image2} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image2} projectName={"hello"} Hashnode={"www.ank.com"} />




</div> }
{viewBlog1 === "viewBlog13" && <div className="blogs Technical--blogs">

<BlogCard image={image3} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image3} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image3} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image3} projectName={"hello"} Hashnode={"www.ank.com"} />


</div> }
{viewBlog1 === "viewBlog14" && <div className="blogs Technical--blogs">

<BlogCard image={image1} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image1} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image1} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image1} projectName={"hello"} Hashnode={"www.ank.com"} />



</div> }

    </div>
  )
}

export default Blogs