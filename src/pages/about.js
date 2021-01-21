import * as React from "react"
import { Link } from "gatsby"

import { graphql } from 'gatsby'

 export const query = graphql`
  query aboutQuery {
    contentfulAbout {
      description {
        description
      }
      title
    }
  }
`

// styles
const pageStyles = {
    color: "#232129",
    padding: "45px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }
  const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
  }
  const paragraphStyles = {
    marginBottom: 48,
  }
  const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: "16px",
    verticalAlign: "5%",
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




  
const AboutPage = ({data}) => {
    const temp = data.contentfulAbout;
    const title = temp.title;
    const description = temp.description.description;
  
    return (
      <>
      <main style={pageStyles}>
        <title>{title}</title>
        <ul style={outerStyle}>
        <li> <Link style={linkStyle} to="/"> Home </Link></li>
        <li><Link style={linkStyle}  to="/about"> About </Link></li>
        <li><Link style={linkStyle}  to="/locations"> Locations </Link></li>
       </ul>
        <h1 style={headingStyles}>
          {title}
        </h1>
        <p style={paragraphStyles}> { description } </p>
      </main>
      <footer style={footerStyle}>
          <span>
              <p>Build in <span aria-label='emoji'  role='img'> ♥️ </span>  Gatsby and Contentful</p>
          </span>
      </footer>
      </>
    )
  }
  
  export default AboutPage