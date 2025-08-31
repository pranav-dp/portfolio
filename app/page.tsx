'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Github, Linkedin, Mail } from 'lucide-react'
import { GradientBackground } from './components/GradientBackground'

export default function Home() {
  const router = useRouter()

  return (
    <main className="main-content">
      
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '1rem', fontSize: '0.9rem' }}
        >
          Hey! I'm 
        </motion.div>
        
        <motion.h1
          className="hero-title"
          whileHover={{ scale: 1.02 }}
          style={{ fontFamily: 'Geist Mono, monospace' }}
        >
          Pranav
        </motion.h1>
        <br />
        
        <motion.div
          className="hero-container"
        >
          <motion.h2>
             Building AI Multi-Agent Systems
          </motion.h2>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ marginBottom: 0 }}
          >
            Building intelligent systems that understand and interact with multiple data types. 
            From conversational AI to computer vision, I create solutions that bridge the gap 
            between human needs and machine capabilities.
          </motion.p>
        </motion.div>
        
        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/projects')}
          >
            View Projects
          </motion.button>
          
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/about')}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="features-section relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="section-title">Ready to Connect?</h2>
        <p className="section-subtitle">
          Let's build something amazing together
        </p>
        
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '3rem',
            flexWrap: 'wrap'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href="https://github.com/pranav-dp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            GitHub
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/pranavdp30/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>
          
          <motion.a
            href="mailto:pranav.duraisaamy@gmail.com"
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Email
          </motion.a>
        </motion.div>
      </motion.div>
    </main>
  )
}
