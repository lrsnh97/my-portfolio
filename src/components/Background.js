import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import "../assets/css/main.css"

const Background = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Background3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: AUTO
            layout: FULL_WIDTH
          )
        }
      }
    }
  `)

  const imageData = data.file.childImageSharp.gatsbyImageData

  return (
    <div>
      <GatsbyImage image={imageData} alt="Background" className="background" />
      {children}
    </div>
  )
}

export default Background
