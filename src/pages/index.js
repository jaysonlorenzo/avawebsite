import * as React from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import AllinOne from "../components/AllinOne"
import Support from "../components/Support"
import Seo from "../components/seo"
import Layout from "../components/layout"

      /**<About />
      *<Support />
      *<AllinOne />*/


const IndexPage = () => (
  <Layout>
    <Seo title="A Vision Associates"/>
    <Hero />
    <About />
    <Support />
    <AllinOne />

  </Layout>

)

export default IndexPage
