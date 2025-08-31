'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/projects'
import { GradientBackground } from '../components/GradientBackground'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <main className="main-content">
      
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">Projects</h1>
        <p className="hero-subtitle">
          AI-powered applications and intelligent systems I've built
        </p>
      </motion.div>

      <motion.div
        style={{ marginTop: '4rem', width: '100%' }}
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              style={{
                padding: '2rem',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
              className="project-card-inline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              whileHover={{ 
                scale: 1.02,
                borderColor: 'var(--accent)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(project)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  padding: '0.75rem',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <project.icon size={24} />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600',
                  margin: 0
                }}>
                  {project.title}
                </h3>
              </div>
              
              <p style={{ 
                opacity: 0.8, 
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>
                {project.description}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto',
                paddingTop: '1rem'
              }}>
                <span style={{ 
                  fontSize: '0.85rem', 
                  opacity: 0.6,
                  fontWeight: '500'
                }}>
                  Click to learn more
                </span>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  opacity: 0.6
                }} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="section-title">Ready to Build Something?</h2>
          <p className="section-subtitle">
            Let's create intelligent solutions that make a difference
          </p>
          
          <motion.div
            style={{ marginTop: '2rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="mailto:pranav.duraisaamy@gmail.com" 
              className="btn btn-primary"
              style={{ display: 'inline-block' }}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <ProjectModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </main>
  )
}
