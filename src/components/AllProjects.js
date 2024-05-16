import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectsList from "./ProjectsList"
import "../assets/css/main.css"

const query = graphql`
  query {
    allContentfulProject {
      nodes {
        id
        title
        bild {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
        beschreibung {
          beschreibung
        }
        technologien
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulProject.nodes
  return (
    <section>
      <ProjectsList projects={projects} />
    </section>
  )
}

export default Projects
