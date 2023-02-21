import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import explored from '../public/assets/projects/ExplorED.png'
import groovehound from '../public/assets/projects/Groovehound.png'
import slouch from '../public/assets/projects/Slouch.png'
import stayawhile from '../public/assets/projects/StayAwhile.png'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p>Projects</p>
            <h2 className='text-xl tracking-widest uppercase text-[#5651e5]'>What I've built</h2>
            <div className=' grid md:grid-cols-2 gap-8'>
                <ProjectItem title="ExplorED" backgroundImg={explored} stack="React | Ruby on Rails" projectUrl="/explored" />
                <ProjectItem title="Stay Awhile" backgroundImg={stayawhile} stack="React | Next.js" projectUrl="/stayawhile" />
                <ProjectItem title="Slouch" backgroundImg={slouch} stack="React | Firebase" projectUrl="/slouch" />
                <ProjectItem title="Groovehound" backgroundImg={groovehound} stack="React | Ruby on Rails" projectUrl="/groovehound" />
            </div>
        </div>
    </div>
  )
}

export default Projects