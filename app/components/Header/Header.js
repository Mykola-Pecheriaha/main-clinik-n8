'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubMenu, setActiveSubMenu] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSubMenuToggle = (menuName) => {
    setActiveSubMenu(activeSubMenu === menuName ? null : menuName)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/logo2.jpg"
          alt="Logo"
          width={40}
          height={40}
          className={styles.logoImage}
        />
        <strong>PlasticP</strong>
      </div>
      <div className={styles.headerRignt}>
        <nav className={styles.nav}>
          <Link href="/">Головна</Link>
          <Link href="/news">Новини</Link>

          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubMenuToggle('hospital')}
            onMouseLeave={() => handleSubMenuToggle(null)}
          >
            <Link href="/hospital">Про лікарню</Link>
            {activeSubMenu === 'hospital' && (
              <div className={styles.subMenu}>
                <Link href="/hospital/about">Про нас</Link>
                <Link href="/hospital/team">Наша команда</Link>
                <Link href="/hospital/history">Історія</Link>
              </div>
            )}
          </div>

          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubMenuToggle('departments')}
            onMouseLeave={() => handleSubMenuToggle(null)}
          >
            <Link href="/departament">Відділення</Link>
            {activeSubMenu === 'departments' && (
              <div className={styles.subMenu}>
                <Link href="/departament/surgical">Хірургічні відділення</Link>
                <Link href="/departament/diagnostic">Діагностичні</Link>
                <Link href="/departament/polyclinic">Поліклініка</Link>
                <Link href="/departament/therapy">Терапевтичні відділення</Link>
              </div>
            )}
          </div>
        </nav>

        <div className={styles.burger} onClick={toggleMenu}>
          ☰
        </div>

        {isMenuOpen && (
          <div className={styles.burgerMenu}>
            <Link href="/" onClick={toggleMenu}>
              Головна
            </Link>
            <Link href="/news" onClick={toggleMenu}>
              Новини
            </Link>
            <Link href="/hospital" onClick={toggleMenu}>
              Про лікарню
            </Link>
            <Link href="/departament" onClick={toggleMenu}>
              Відділення
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
