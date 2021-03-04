import React from 'react'
import './Story.css'

export const Story = ({story_pic,name}) => {
    return (
        <div className="story">
            <img
                src={story_pic} alt="" />
            <p>{name}</p>
        </div>
    )
}
