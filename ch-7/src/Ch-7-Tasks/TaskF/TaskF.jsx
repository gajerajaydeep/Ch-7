import React, { lazy, Suspense } from 'react'
import { CircleLoader } from 'react-spinners'
import Header from './Header'
import Footer from './Footer'
const Model = lazy(() => import('./Model'))
import './TaskF.css'

export default function TaskF() {

    return (
        <>

            <Header />
            <div className="suspence-main">

                <Suspense fallback={<CircleLoader loading={true} size={100} className='suspense-middle' />}>
                    <Model />
                </Suspense>
            </div>
            <Footer />
        </>
    )
}
