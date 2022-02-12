import React, { useState, useCallback } from 'react'
import { createBrowserHistory } from 'history'

import Context from '../utils/context'

const Router = (props) => {
    // 建立 history 物件
    const history = createBrowserHistory()

    const [location, setLocation] = useState(history.location)

    const computeRootMatch = useCallback((pathname) => {
        return { path: '/', url: '/', params: {}, isExact: pathname === '/' }
    }, [])

    // 監聽 location 的改變
    history.listen(() => setLocation(history.location))

    return (
        <Context.Provider value={{ history, location, match: computeRootMatch(location.pathname) }}>
            {props.children}
        </Context.Provider>
    )
}

export default Router
