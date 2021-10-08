import React from 'react'

function AppWrap(props) {
    return (
        <section className="app-wrap">
           {props.children} 
        </section>
    )
}

export default AppWrap
