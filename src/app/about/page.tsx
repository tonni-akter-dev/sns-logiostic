import React from 'react'
import Banner from './component/Banner'
import Story from './component/Story'
import ProductCategory from './component/ProductCategory'
import Quality from './component/Quality'
import Contact from '../shared/Contact'
import Subscribe from '../components/Subscribe'

const About = () => {
    return (
        <div>
            <Banner />
            <Story />
            <ProductCategory />
            <Quality />
            <Contact />
            <Subscribe/>
        </div>
    )
}

export default About