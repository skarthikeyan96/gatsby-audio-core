import * as React from "react"
import { Link } from "gatsby"


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


function Location({ data }) {
  console.log(data)
  return (
    <>
     <main style={pageStyles}>
        <title>Locations</title>
        <ul style={outerStyle}>
        <li> <Link style={linkStyle} to="/"> Home </Link></li>
        <li><Link style={linkStyle} to="/about"> About </Link></li>
        <li><Link style={linkStyle} to="/locations"> Locations </Link></li>
       </ul>
       </main>
     
      <div style={{textAlign:"center"}}>
        <p> Check out our office in  <span style={{textTransform:"capitalize"}}> {data.contentfulLocations.state} </span> </p>
        <Link to='/locations'> Back to locations </Link>
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
    contentfulLocations(id: {eq : $id}) {
      id
      slug
      country
      state
    }
  }
`


export default Location