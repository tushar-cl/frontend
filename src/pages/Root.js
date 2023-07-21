import React from 'react'
import MainNavigation from '../components/MainNavigation'
import { Outlet } from 'react-router-dom'
function Root() {
    // const navigation = useNavigation()   
    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>...loading</p>} */}
                <Outlet/>
            </main>
        </>
    )
}

export default Root