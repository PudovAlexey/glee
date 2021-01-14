import React from 'react'
import globalStyles from './App.scss'
import Layout from './hoc/layout/layout'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import Container from "./hoc/Container/Container"
import {Route} from 'react-router-dom'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Services from './components/pages/Services/Services'
import Pages from './components/pages/Pages/Pages'
import News from './components/pages/News/News'
import Contact from './components/pages/Contact/Contact'

function App() {
  
  return (
    <div className={globalStyles.App}>
      <Container>
    <Header/> 
    <Layout>
    <Route exact path="/" component={Home}/>
    <Route path="/About" component={About}/>
    <Route path="/Services" component={Services}/>
    <Route path="/Pages" component={Pages}/>
    <Route path="/News" component={News}/>
    <Route path="/Contact" component={Contact}/>
    </Layout>
    <Footer/>
    </Container> 
    </div>
  );
}


export default App;
