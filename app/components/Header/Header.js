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
          src="/Logo.jpg"
          alt="Logo"
          width={50}
          height={50}
          className={styles.logoImage}
        />
        <strong>КНП ЦМКЛ</strong>
      </div>
      <div className={styles.headerRignt}>
        <nav className={styles.nav}>
          <Link href="/">Головна</Link>

          {/* субменю */}

          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubMenuToggle('hospital')}
            onMouseLeave={() => handleSubMenuToggle(null)}
          >
            <Link href="/hospital">Про лікарню</Link>
            {activeSubMenu === 'hospital' && (
              <div className={styles.subMenu}>
                <Link href="/hospital/about">Загальне про нас</Link>
                <Link href="/hospital/history">Історія</Link>
                <Link href="/hospital/administration">Керівництво</Link>
                <Link href="/hospital/structure">Структура лікарні</Link>
                <Link href="/hospital/contacts">Контакти</Link>
                {/* <Link href="/hospital/history">Історія</Link> */}
                {/* <Link href="/hospital/history">Історія</Link> */}
                <Link href="/hospital/team">Наша команда</Link>
                {/* <Link href="/hospital/history">Історія</Link> */}
              </div>
            )}
          </div>

          {/* <Link href="/news">Новини</Link> */}

          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubMenuToggle('news')}
            onMouseLeave={() => handleSubMenuToggle(null)}
          >
            <Link href="/news">Новини</Link>
            {activeSubMenu === 'news' && (
              <div className={styles.subMenu}>
                <Link href="/news/message">Повідомлення</Link>
                <Link href="/news/advice">Поради лікаря</Link>
                <Link href="/news/write ">Пишуть про нас</Link>
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
                <Link href="/departament/reanimation">Реанімація</Link>
                <Link href="/departament/maternity">Пологовий будинок</Link>
                <Link href="/departament/therapy">Терапевтичні відділення</Link>

                <Link href="/departament/palliative">
                  Паліативне відділення
                </Link>
                <Link href="/departament/ambulatory">Амбулаторна допомога</Link>
              </div>
            )}
          </div>
        </nav>

        <div className={styles.burger} onClick={toggleMenu}>
          ☰ Menu
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
