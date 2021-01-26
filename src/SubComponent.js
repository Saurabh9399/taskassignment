import React from 'react'
import "./SubComponent.css"

function SubComponent({Icon, name}) {
    return (
        <div className="subComponent">
            <Icon className="subcomponent__icon"/>
            <p>{name}</p>
        </div>
    )
}

export default SubComponent
