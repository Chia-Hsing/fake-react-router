import React, { useContext } from 'react'

import Context from '../utils/context'
import { matchPath } from '../utils/match'

const Switch = (props) => {
    const { location, match: contextMatch } = useContext(Context)

    let element,
        match = null

    React.Children.forEach(props.children, (child) => {
        if (match === null && React.isValidElement(child)) {
            element = child

            const path = child.props.path

            match = path ? matchPath(location.pathname, child.props.path) : contextMatch
        }
    })

    return match ? React.cloneElement(element, { location, computedMatch: match }) : null
}

export default Switch
