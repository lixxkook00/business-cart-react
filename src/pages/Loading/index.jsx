import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Loading() {

    const globalState = useSelector(state => state.loading)

    useEffect(() => {
        console.log("dcmm tao doi ne con cho",globalState)
    },[globalState])

    return (
        <>
            {
                globalState
                &&
                <div id="loading">
                    <div className="header-name">
                        Core Power
                    </div>
                    <div className="loader loader--style6" title="5">
                        
                    </div>
                </div>
            }
        </>
    )
}
