import React from 'react'

function About() {
  return (
    <div className='w-full md:h-screen p-2 items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>
                From the minute I got on the internet in elementary school, I wanted to build my own websites. I remember being about 10 years old, staying up way too late researching how to build things like sticky navbars and tables for a Pokémon wiki-style site I created and fan sites for my favorite bands. But as excited as I was about coding, I didn’t have access to formal computer science education in middle or high school, and there weren’t any after school programs that taught it either. So majoring in computer science didn’t feel like an option at that point, making coding feel like just a hobby.
                </p>
                <p className='py-2 text-gray-600'>
                Fast forward to 2021. I’m an educator, about to start a new job as a Program Manager for a nonprofit organization called Code Nation, which provides web development programs to under-resourced high schools, creating paths for underrepresented students to pursue careers in tech. By managing these programs I could give students the opportunities I never got.
                </p>
                <p className='py-2 text-gray-600'>
                I’d been dabbling in HTML, CSS, and JavaScript for a bit, and I’d previously written a lot of curriculum, so I was put on the curriculum team and quickly got to work improving it. I immersed myself in the languages we taught, and used them to build interactive experiences to add to the curriculum. I also got to know our volunteers, and heard their stories of starting their careers at coding bootcamps. Eventually I realized coding didn’t have to be just a hobby, I could become an engineer myself– so I did! 
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out some of my latest projects!
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://i.imgur.com/9zehaTe.jpg" alt=""></img>
            </div>
        </div>
    </div>
  )
}

export default About