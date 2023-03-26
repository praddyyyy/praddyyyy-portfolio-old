import { useEffect } from 'react'

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import TagCloud from 'TagCloud'
import Nav from '@/components/Nav';

function About() {

    useEffect(() => {
        return () => {
            const cotainer = '.tagcloud';
            const texts = [
                'JavaScript',
                'React',
                'Nodejs',
                'Express.js',
                'HTML5',
                'MongoDB',
                'CSS3',
                'Git',
                'GitHub',
                'Figma',
                'Python'
            ];
            const options = {
                radius: 200,
                maxSpeed: 'normal',
                initSpeed: 'normal',
                keep: true,
            }
            TagCloud(cotainer, texts, options);
        }
    }, [])

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <section id="about" className="bg-site bg-no-repeat bg-cover overflow-hidden h-screen section" ref={ref}>
            <Nav />
            <div className='container mx-auto'>
                <div className='flex flex-col items-center gap-y-2 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='tagcloud'
                    ></motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1'
                    >
                        <h2 className='h2 text-accent'>About Me</h2>
                        <h3 className='h3 mb-4 leading-[1.3]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</h3>
                        <p className='mb-6 leading-[1.5]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        {/* Stats */}
                        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                    {
                                        inView ? <CountUp start={0} end={3} duration={3} /> : null
                                    }
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Years of <br /> Experience
                                </div>
                            </div>

                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                    {
                                        inView ? <CountUp start={0} end={10} duration={3} /> : null
                                    }
                                    +
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Projects <br /> Completed
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='btn btn-lg'>Contact Me</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
