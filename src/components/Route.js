import React, { useState, useContext } from 'react'
import { matchPath } from '../utils/match'

import Context from '../utils/context'

const Route = (props) => {
    const { location } = useContext(Context)

    const match = props.computedMatch ? props.computedMatch : matchPath(location.pathname, props.path)

    return <Context.Provider value={{ match }}>{match ? props.children : null}</Context.Provider>
}

export default Route
