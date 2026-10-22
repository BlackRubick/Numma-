import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../common/Logo'

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Equipo', path: '/equipo' },
  { label: 'Contacto', path: '/contacto' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar el menú móvil y volver arriba al cambiar de página
  useEffect(() => {
    setIsMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleKey = e => e.key === 'Escape' && setIsMobileMenuOpen(false)
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isMobileMenuOpen])

  const isSolid = isScrolled || isMobileMenuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        isSolid
          ? 'bg-white/95 shadow-[0_1px_0_rgb(229_229_229)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`shell flex items-center justify-between transition-[height] duration-300 ${
          isSolid ? 'h-16' : 'h-20'
        }`}
      >
        <Logo />

        <nav className="hidden md:block" aria-label="Principal">
          <ul className="flex items-center gap-8">
            {navItems.map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `relative py-2 text-[17px] font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-accent-600 after:transition-transform after:duration-200 ${
                      isActive
                        ? 'text-brand-900 after:scale-x-100'
                        : 'text-neutral-600 after:scale-x-0 hover:text-brand-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 grid h-11 w-11 place-items-center rounded text-neutral-800 transition-colors hover:bg-neutral-900/5 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-neutral-200 bg-white md:hidden"
          aria-label="Principal"
        >
          <ul className="shell py-2">
            {navItems.map(item => (
              <li
                key={item.path}
                className="border-b border-neutral-100 last:border-0"
              >
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `flex py-4 text-lg font-semibold ${
                      isActive ? 'text-brand-900' : 'text-neutral-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
