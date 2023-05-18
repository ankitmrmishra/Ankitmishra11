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

<BlogCard image={image1} projectName={"PROPS IN REACT JS"} Hashnode={"https://ankitmishra.hashnode.dev/props-in-reactjs"} />
<BlogCard image={image2} projectName={"JSX IN REACT JS"} Hashnode={"https://ankitmishra.hashnode.dev/all-about-jsx-in-reactjs"} />
<BlogCard image={image3} projectName={"COMPONENTS IN REACT"} Hashnode={"https://ankitmishra.hashnode.dev/components-the-building-blocks-of-react-js"} />
<BlogCard image={image1} projectName={"OSI MODEL"} Hashnode={"https://ankitmishra.hashnode.dev/osi-model-in-computer-networking"} />



</div> }
{viewBlog1 === "viewBlog12" && <div className="blogs science--blogs">
{/* 
<BlogCard image={image2} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image2} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image2} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image2} projectName={"hello"} Hashnode={"www.ank.com"} /> */}

<div className='card coming-soon'>COMING SOON</div>


</div> }
{viewBlog1 === "viewBlog13" && <div className="blogs fiction--blogs">

{/* <BlogCard image={image3} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image3} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image3} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image3} projectName={"hello"} Hashnode={"www.ank.com"} /> */}
<div className='card coming-soon'>COMING SOON</div>

</div> }
{viewBlog1 === "viewBlog14" && <div className="blogs miscellaneous--blogs">
{/* 
<BlogCard image={image1} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image1} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image1} projectName={"hello"} Hashnode={"www.ank.com"} />
<BlogCard image={image1} projectName={"hello"} Hashnode={"www.ank.com"} /> */}

<div className='card coming-soon'>COMING SOON</div>

</div> }

    </div>
  )
}

export default Blogs