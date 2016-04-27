import React from 'react'
import { Content } from 'react-mdl/lib/Layout'
import Background from './Background'
import KLFooter from './KLFooter'
import '../../../css/footer.css'

const Layout = () => (
  <div>
    <Background />
    <Content />
    <KLFooter />
  </div>
)

export default Layout
