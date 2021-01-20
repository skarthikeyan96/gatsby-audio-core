import * as React from "react";
import { Link } from "gatsby";

import { graphql } from "gatsby";

export const query = graphql`
  query locationsQuery {
    allContentfulLocations {
      nodes {
        id
        state
        country
        slug
      }
    }
  }
`;

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


const locations = ({ data }) => {
  const temp = data.allContentfulLocations.nodes;
  return (
    <>
    <main style={pageStyles}>
        <title>Locations</title>
        <ul style={outerStyle}>
        <li> <Link style={linkStyle} to="/"> Home </Link></li>
        <li><Link style={linkStyle} to="/about"> About </Link></li>
        <li><Link style={linkStyle} to="/locations"> Locations </Link></li>
       </ul>
       <ul style={{}} className='links'>
       {temp.map((t) => {
        return (
          <li style={{paddingBottom:'10px'}}>
            <Link style={linkStyle} to={`/locations/${t.slug}`}>{t.country}</Link>
            <br />
          </li>
        );
      })}
       </ul>
      </main>
      <footer style={footerStyle}>
          <span>
              <p>Build in  <span aria-label='emoji'  role='img'> ♥️ </span>  Gatsby and Contentful</p>
          </span>
      </footer>
    </>
  );
};

export default locations;
