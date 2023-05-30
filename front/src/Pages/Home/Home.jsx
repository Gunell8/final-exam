import React from 'react'
import { BackData } from '../../Components/BackData/BackData'
import { Business } from '../../Components/Business/Business'
import { Meet } from '../../Components/Meet/Meet'
import { Projects } from '../../Components/Projects/Projects'
import {Helmet} from "react-helmet";
export const Home = () => {
  return (
    <div>
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Business/>
        <BackData/>
        <Projects/>
        <Meet/>
        </>
    </div>
  )
}
