import React, { useContext, useCallback } from 'react'

import Context from '../utils/context'

const Link = ({ children, to }) => {
    const { history } = useContext(Context)

    const handleLinkClick = useCallback(
        (e) => {
            e.preventDefault()
            history.push(to)
        },
        [history, to]
    )

    return (
        <a href={to} onClick={handleLinkClick}>
            {children}
        </a>
    )
}

export default Link
