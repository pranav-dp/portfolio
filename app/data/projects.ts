import { 
  Zap, 
  GraduationCap, 
  MessageCircle, 
  Sparkles,
  Chrome,
  Eye,
  Building
} from 'lucide-react'

export const projects = [
  {
    title: "Bolt",
    description: "A multi-agent AI assistant for events built at Fanpit. Features real-time semantic search, conversational memory, and context-aware interactions using LangGraph and LLMs with scalable AI workflows.",
    icon: Zap,
    github: "https://github.com/pranav-dp/fanpitfinal"
  },
  {
    title: "RWD - IFP",
    description: "Real-time computer vision system for agricultural pest detection using Flutter web frontend and Python Flask backend. Integrates OpenCV for live camera processing and accurate weevil identification.",
    icon: Eye,
    github: "https://github.com/pranav-dp/reddd"
  },
  {
    title: "Power Eng Website",
    description: "Modern, responsive website for a precision engineering components manufacturer in Bangalore. Built with Next.js, React, and Tailwind CSS for optimal performance and user experience.",
    icon: Building,
    github: "https://powerengineering.vercel.app"
  },
  {
    title: "UpskillPlus",
    description: "An AI-powered career platform using Claude 4 for intelligent resume analysis and personalized career guidance. Full-stack solution with smart AI integration and user-friendly UI/UX.",
    icon: GraduationCap,
    github: "https://github.com/pranav-dp/upskill"
  },
  {
    title: "Jarvis",
    description: "A proactive Telegram-based AI companion that initiates conversations, sends personalized nudges, and understands life context. Your AI life coach for productivity, health, and personal growth.",
    icon: MessageCircle,
    github: "https://github.com/pranav-dp/JarvisAI"
  },
  {
    title: "Prompt Enhancer",
    description: "Open-source AI-powered Chrome extension that upgrades your AI prompts with a single shortcut (Ctrl+Shift+P). Makes prompt engineering effortless and accessible.",
    icon: Sparkles,
    github: "https://github.com/pranav-dp/prompt-enhancer"
  },
  {
    title: "LinkedIn Lunatics",
    description: "AI-powered Chrome extension that hides cringe LinkedIn posts so you can focus on meaningful networking. Clean up your feed and connect with what matters.",
    icon: Chrome,
    github: "https://github.com/pranav-dp/linkedin-lunatics"
  }
]
