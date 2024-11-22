import React from 'react'
import styles from './BanerFirstSurgery.module.css'
import FirstSurgery from '../../components/FirstSurgery/FirstSurgery'

export default function BanerFirstSurgery() {
  return (
    <div className={styles.firstSurgeryContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.firstSurgeryName}>Хірургічне відділення №1</h2>
      </div>

      <div className={styles.firstSurgeryTitle}>
        <div className={styles.firstSurgeryText}>
          <div>
            <p>
              Хірургічне відділення №1 сформовано в результаті реформи медичних
              закладів м.Чернівці, на базі "Міського центру хірургії" а він в
              свою чергу на основі "Хірургічного відділення залізничної лікарні"
              в кінці 2021 року.
            </p>
            <p>
              В склад хірургічного відділення №1 на 50 ліжок входять 28 ліжок
              хірургічного профілю, 5 ліжок урологічного профілю, 5 ліжок
              гнійних хірургічних, 5 ліжок судинної хірургії, 3 ліжка
              онкологічного профілю, 4 ліжка паліативних;
            </p>
          </div>
        </div>

        <div className={styles.firstSurgeryImage}>
          <img
            src="/Mykola.jpg" // Шлях до зображення з папки public
            alt="Doctor"
            width={200}
            height={200}
            // className={styles.tunnelImage}
          />
        </div>
      </div>

      <FirstSurgery />
    </div>
  )
}
