import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Project from '@/components/Project'
import Skills from '@/components/Skills'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path: '/about',
    	name: 'about',
    	component: About
    },
    {
    	path: '/contact',
    	name: 'contact',
    	component: Contact
    },
    {
    	path: '/projects',
    	name: 'projects',
    	component: Projects
    },
    {
      path: '/project/:key',
      name: 'project',
      component: Project
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    }
  ]
})
