import * as React from "react"
import { Link } from "gatsby"
import parse from 'html-react-parser'

// styles
const pageStyles = {
  color: "#232129",
  padding: "45px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
  textTransform:"capitalize"
}

const outerStyle = {
  listStyleType:"none",
   display: "flex",
   justifyContent: "space-evenly",
   paddingBottom: "45px"
}

const footerStyle ={
    textAlign: "center",
    display: "block",
}


const Post = ({ data }) => {
    console.log(data)
  return (
    <>
     <main style={pageStyles}>
        <title>Blog post</title>
        <ul style={outerStyle}>
        <li> <Link style={linkStyle} to="/"> Home </Link></li>
        <li><Link style={linkStyle} to="/about"> About </Link></li>
        <li><Link style={linkStyle} to="/locations"> Locations </Link></li>
       </ul>
       </main>
     
        <div>
            <h3>{parse(data.wpPost.title)}</h3>
            <p> {parse(data.wpPost.content)} </p>
        </div>
      <div style={{textAlign:"center"}}>
        <Link to='/blog'> Back to blogs </Link>
      </div>
    
    <footer style={footerStyle}>
          <span>
              <p>Build in <span aria-label='emoji' role='img'> ♥️ </span> Gatsby and Contentful</p>
          </span>
      </footer>
    </>

  )
}

export const query = graphql`
  query ($id:String) {
    wpPost(id: {eq : $id}) {
      id
      slug
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`


export default Post