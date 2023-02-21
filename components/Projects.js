import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import explored from '../public/assets/projects/ExplorED.png'
import groovehound from '../public/assets/projects/Groovehound.png'
import slouch from '../public/assets/projects/Slouch.png'
import stayawhile from '../public/assets/projects/StayAwhile.png'
import ProjectItem from './ProjectItem'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

function Projects() {
  return (
    <div id="projects" className='w-full py-16'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <h2 className='text-md tracking-widest text-[#5651e5] py-4'>Projects</h2>
            <div className=' grid md:grid-cols-2 gap-8'>
                <ProjectItem title="ExplorED" backgroundImg={explored} stack="React | Ruby on Rails" projectUrl="/explored" />
                <ProjectItem title="Stay Awhile" backgroundImg={stayawhile} stack="React | Next.js" projectUrl="/stayawhile" />
                <ProjectItem title="Slouch" backgroundImg={slouch} stack="React | Firebase" projectUrl="/slouch" />
                <ProjectItem title="Groovehound" backgroundImg={groovehound} stack="React | Ruby on Rails" projectUrl="/groovehound" />
            </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
          </Link>
        </div>
    </div>
  )
}

export default Projects