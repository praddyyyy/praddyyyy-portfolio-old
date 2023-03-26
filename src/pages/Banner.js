import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

function Banner() {
    
    return (
        <section id='home' className='min-h-[100vh] lg:min-h-[85vh] flex items-center'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-8 lg:items-center lg:flex-row lg:gap-x-12'>
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='text-[40px] uppercase font-bold leading-[0.8] lg:text-[90px]'
                        >
                            Pradeeshwar
                        </motion.h1>
                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='mb-4 text-[24px] lg:text-[50px] font-secondary uppercase font-semibold leading-[2]'
                        >
                            <span className='mr-2 text-white'>I am a</span>
                            <TypeAnimation
                                cursor={true}
                                speed={50}
                                className='text-gradient'
                                wrapper='span'
                                repeat={Infinity}
                                sequence={[
                                    'Web Developer',
                                    2000,
                                    'Designer',
                                    2000,
                                ]}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn('up', 0.5)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='mb-8 mx-auto lg:mx-0 max-w-lg'
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
                        >
                            <button className='btn btn-lg'>Contact Me</button>
                            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 0.7)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
                        >
                            <a href='#'>
                                <FaGithub />
                            </a>
                            <a href='#'>
                                <FaLinkedin />
                            </a>
                            <a href='#'>
                                <FaInstagram />
                            </a>
                        </motion.div>
                    </div>
                    <div className='lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner