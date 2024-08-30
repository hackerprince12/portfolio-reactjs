import React from 'react'
import Project from './Project'
import bookStore from '../Cards/bookStore1.png';
import portfolio from '../Cards/portfolio1.png';
import codeEditor from '../Cards/codeimg1.png';
import ChatApp from '../Cards/ChatApp.png';
const Projectpage = () => {
  return (
   <>
      <h className=' flex text-5xl font-bold text-center justify-center'>Projects</h>
       <p className= ' text-center py-2 text-gray-500'>Here are some of my recent projects</p>
   <div id='projects' className='grid sm:grid-cols-3  gap-y-8 items-center justify-center sm:m-12  m-12  sm:mb-12 gap-x-8'>
     

   <Project name="ChatApp" image={ChatApp} title='' link='https://chatapp2-j0ol.onrender.com'/>

<Project name="Portfolio" image={portfolio} title='' link='https://princekumarpatelportfolio.netlify.app/'/>
<Project name="BookStore" image={bookStore} title='' link='https://bookstore-frontend-l4e5.onrender.com/'/>
<Project name="CodeEditor" image={codeEditor} title='' link='https://silver-meerkat-c71d63.netlify.app/' />


</div>
   </>
  )
}

export default Projectpage;