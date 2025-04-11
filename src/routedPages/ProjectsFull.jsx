import Layout2 from '@/Layout2'
import Projects from '@/projects/Projects'
import React from 'react'

const ProjectsFull = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around w-full'>
      <Projects/>
    </div>
  )
}

export default ProjectsFull