import * as React from "react";
import { Link } from "gatsby";
import parse from "html-react-parser";

export const query = graphql`
  query {
    allWpPost {
      nodes {
        id
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

// styles
const pageStyles = {
  color: "#232129",
  padding: "45px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
};

const outerStyle = {
  listStyleType: "none",
  display: "flex",
  justifyContent: "space-evenly",
  paddingBottom: "45px",
};

const footerStyle = {
  textAlign: "center",
  display: "block",
};

// markup
const BlogPage = ({ data }) => {
  const posts = data.allWpPost.nodes;
  return (
    <>
      <main style={pageStyles}>
        <title>Posts</title>
        <ul style={outerStyle}>
          <li>
            {" "}
            <Link style={linkStyle} to="/">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/about">
              {" "}
              About{" "}
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/blog">
              {" "}
              Blog{" "}
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/locations">
              {" "}
              Locations{" "}
            </Link>
          </li>
        </ul>
        <h4>Posts</h4>
        <ol style={{ listStyle: `none` }}>
          {posts.map((post) => {
            const title = post.title;

            return (
              <li key={post.uri}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={`/blog/${post.slug}`} itemProp="url">
                        <span itemProp="headline">{parse(title)}</span>
                      </Link>
                    </h2>
                    <small>{post.date}</small>
                  </header>
                  <section itemProp="description">
                    {parse(post.excerpt)}
                  </section>
                </article>
              </li>
            );
          })}
        </ol>
      </main>
      <footer style={footerStyle}>
        <span>
          <p>
            Build in{" "}
            <span aria-label="emoji" role="img">
              {" "}
              ♥️{" "}
            </span>{" "}
            Gatsby and Contentful
          </p>
        </span>
      </footer>
    </>
  );
};

export default BlogPage;
