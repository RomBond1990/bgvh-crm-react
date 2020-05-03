import React from "react";
import p from "./Projects.module.css"

const Projects = (props) => {

    let projectsList = props.projects.map(project => <div className={p.item}>{project.name}</div>)

    return <div>
        {projectsList}
    </div>
}

export default Projects;
