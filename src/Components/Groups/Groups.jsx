import React from "react";
import g from "./Groups.module.css"

const Groups = (props) => {

    let groupsList = props.groups.map(group => <div className={g.item}>{group.name}</div>)

    return <div>
        {groupsList}
    </div>
}

export default Groups;
