import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaArrowLeft } from "react-icons/fa"

const ProjectTemplate = ({ data }) => {
  const project = data.contentfulProject
  const image = getImage(project.bild)

  return (
    <Layout>
      <Link className="back-button" to="/projects">
        <FaArrowLeft />
      </Link>
      <div className="oneProject">
        <h1>{project.title}</h1>
        <div className="oneProject-image-wrapper">
          <GatsbyImage
            className="oneProject-image"
            image={image}
            alt={project.title}
          />
          <p>{project.beschreibung.beschreibung}</p>
          <p>{project.technologien}</p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleProject($id: String) {
    contentfulProject(id: { eq: $id }) {
      title
      beschreibung {
        beschreibung
      }
      technologien
      bild {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default ProjectTemplate
