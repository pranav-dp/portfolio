'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="navbar"
      style={{
        position: 'relative',
        top: 'auto',
        marginTop: '4rem'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        padding: '0 2rem'
      }}>
        <p style={{ opacity: 0.7 }}>
          Made by{' '}
          <a
            href="https://github.com/pranav-dp"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--foreground)',
              textDecoration: 'underline',
              textDecorationColor: 'var(--foreground)'
            }}
          >
            Pranav
          </a>
        </p>
      </div>
    </motion.footer>
  )
}
