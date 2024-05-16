import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectTemplate = ({ data }) => {
  const project = data.contentfulProject
  const image = getImage(project.bild)

  return (
    <Layout>
      <h2>{project.title}</h2>
      <GatsbyImage image={image} alt={project.title} />
      <p>{project.beschreibung.beschreibung}</p>
      <p>{project.technologien}</p>
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
