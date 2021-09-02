import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='red' text = 'add'/>
        </header>
    )
}

//* default props but override anytime
Header.defaultProps = {
    title: 'Task Tracker',
}

// * css in js
// const headingStyle = {
//     color: 'white',
//     backgroundColor: 'red'
// }

export default Header
