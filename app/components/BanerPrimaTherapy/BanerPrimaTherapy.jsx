'use client'

import React from 'react'
import Image from 'next/image' // Імпорт Image
import styles from './BanerPrimaTherapy.module.css'
import Gallery from '../Gallery/Gallery'
import primaTherapy from '../../../data/primaTherapy/primaTherapi'

import PrimaTherapyDepartment from '../PrimaTherapyDepartment/PrimaTherapyDepartment'
import DoctorsPrimaTherapy from '../DoctorsPrimaTherapy/DoctorsPrimaTherapy'

export default function BanerPrimaTherapy() {
  return (
    <div className={styles.banerPrimaTherapyContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.banerPrimaTherapyName}>
          Терапевтичне відділення №1
        </h2>
      </div>

      <div className={styles.banerPrimaTherapyTitle}>
        <div className={styles.banerPrimaTherapyText}>
          <div>
            <p>
              Відділення терапії було відкрито в 19// році в складі МЛ №3, яке
              2023 році в результаті реформування медичної галузі в м.Чернівці
              та створення КНП "Центральна міська клінічна лікарня" було
              реорганізовано у відділення терапевтичне №1 . Розташовене в
              корпусу №2 по вулеці Головна 100 (бивша МЛ №3). Відділення має 90
              ліжок, з них 38 ліжок кардіологічного профілю, 8 ліжок
              ревматологічного профілю, 18 ліжок терапевтичного профілю, 5 ліжок
              пульмонологічного профілю, 3 ліжка флергологічного профілю, 10
              ліжок неврологічного профілю і 8 ліжок паліативних.
            </p>

            <p>
              У відділенні проведений ремонт. Палати є уютними з безбарєрними.
              Максимально оснащено сучасним медичним обладнанням для хворих.
            </p>

            <h4>Наше завдання ... </h4>
            <p>Забезпечення ...</p>

            <h4>У нас працюють ...</h4>

            <p>
              Лікарі та медичні сестри з великим досвідом роботи, морально
              стійкі, які виконують свої професійні обов'язки на високому рівні.
            </p>
          </div>
        </div>

        <div className={styles.banerPrimaTherapyImage}>
          <Image
            src="/images/primatherapy/chapay.jpg" // Шлях до зображення в папці public
            alt="Doctor"
            width={600} // Задайте ширину
            height={500} // Задайте висоту
            className={styles.tunnelImage} // При потребі можна залишити стилізацію
            priority // Цей прапорець підказує Next.js пріоритетно завантажити зображення
          />
        </div>
      </div>

      <PrimaTherapyDepartment />

      <Gallery images={primaTherapy} />
      <DoctorsPrimaTherapy />
    </div>
  )
}
