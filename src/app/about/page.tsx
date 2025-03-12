import React from 'react'
import Banner from './component/Banner'
import Story from './component/Story'
import ProductCategory from './component/ProductCategory'
import Quality from './component/Quality'
import Contact from '../shared/Contact'

const About = () => {
    return (
        <div>
            <Banner />
            <Story />
            <ProductCategory />
            <Quality />
            <Contact />
        </div>
    )
}

export default About