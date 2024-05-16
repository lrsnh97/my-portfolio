import * as React from "react"
import Layout from "../components/Layout"
import AllProjects from "../components/AllProjects"

const Projects = () => {
  return (
    <Layout>
      <h1 className="h1projects">Projects</h1>
      <AllProjects />
    </Layout>
  )
}

export default Projects
