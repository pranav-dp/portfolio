'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Heart } from 'lucide-react'
import { GradientBackground } from '../components/GradientBackground'

export default function About() {
  return (
    <main className="main-content">
      
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">About</h1>
        <p className="hero-subtitle">
          Full Stack Developer passionate about building intelligent systems that solve real-world problems. 
          Currently working with LLMs, LangGraph, and cutting-edge AI to create practical, user-focused solutions.
        </p>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        style={{ marginTop: '4rem', width: '100%', textAlign: 'left' }}
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          <Briefcase size={24} />
          <h2 className="section-title" style={{ margin: 0 }}>Experience</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <motion.div
            style={{
              padding: '2rem',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              position: 'relative',
              lineHeight: '1.3'
            }}
            className="about-container"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
              <Heart size={16} color="#8b5cf6" fill="#8b5cf6" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.3rem' }}>
              SWE Intern
            </h3>
            </div>
            <p style={{ fontWeight: '500', marginBottom: '0.3rem' }}>
              <a
                href="https://www.fanpit.live"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Fanpit · Startup
              </a>
            </p>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '0.8rem' }}>Aug 2025 - Present · 1 mo</p>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: '1.4' }}>
              Built Bolt, a multi-agent AI assistant for events using LangGraph and LLMs. 
              Designed scalable AI workflows with real-time semantic search and conversational memory.
            </p>
          </motion.div>
          
          <motion.div
            style={{
              padding: '2rem',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              lineHeight: '1.3'
            }}
            className="about-container"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.3rem' }}>
              Technical Team Member
            </h3>
            <p style={{ fontWeight: '500', marginBottom: '0.3rem' }}>ACM Student Chapter, SSN</p>
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>May 2024 - Present · 1 yr 4 mos</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        style={{ marginTop: '4rem', width: '100%', textAlign: 'left' }}
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          <GraduationCap size={24} />
          <h2 className="section-title" style={{ margin: 0 }}>Education</h2>
        </div>
        
        <motion.div
          style={{
            padding: '2rem',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)'
          }}
          className="experience-card"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            B.E. Computer Science and Engineering
          </h3>
          <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>SSN College of Engineering, Chennai</p>
          <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>2023 - 2027 · Chennai</p>
        </motion.div>
      </motion.div>
    </main>
  )
}
