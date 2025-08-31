'use client'

import { motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { Github } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ]

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-content">
        <motion.div
          className="nav-brand"
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push('/')}
          style={{ cursor: 'pointer' }}
        >
          Pranav D
        </motion.div>
        
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <a 
                onClick={() => router.push(item.path)}
                style={{ 
                  opacity: pathname === item.path ? 1 : 0.7,
                  fontWeight: pathname === item.path ? '600' : '400'
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="nav-right">
          <motion.a
            href="https://github.com/pranav-dp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            style={{ display: 'flex', alignItems: 'center', opacity: 0.7 }}
            className="github-icon"
          >
            <Github size={20} />
          </motion.a>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
