import React from 'react'

function AppWrap(props) {
    return (
        <section className={`app-wrap ${props.loader && 'click-off'}`}>
           {props.children} 
        </section>
    )
}

export default AppWrap
