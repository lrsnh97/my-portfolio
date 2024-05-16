import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../assets/css/main.css"
import { Link } from "gatsby"

const ProjectsList = ({ projects = [] }) => {
  return (
    <div className="projects-container">
      {projects.map((project) => {
        const { id, title, bild, technologien } = project
        const pathToImage = getImage(bild)
        return (
          <div key={id} className="project">
            <h3>{title}</h3>
            <Link key={id} to={`/${title}`}>
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="project-img"
              />
            </Link>
            <p>{technologien}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectsList
