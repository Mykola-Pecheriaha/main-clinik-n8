import React from 'react'
import Image from 'next/image' // Імпорт Image
import styles from './BanerSecondTherapy.module.css'
import Gallery from '../Gallery/Gallery'
import secondTherapy from '../../../data/secondTherapy/secondTherapy'
import SecondTherapiDepartment from '../SecondTherapyDepartment/SecondTherapyDepartment'
import DoctorsSecondTherapy from '../DoctorsSecondTherapy/DoctorsSecondTherapy'

export default function BanerSecondTherapy() {
  return (
    <div className={styles.banerSecondTherapyContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.banerSecondTherapyName}>
          Відділення інтенсивної терапії та анестезіології
        </h2>
      </div>

      <div className={styles.banerSecondTherapyTitle}>
        <div className={styles.banerSecondTherapyText}>
          <div>
            <p>
              Відділення терапії було відкрито в 1987 році в складі ВКЛ
              ст.Чернівці, яке 2023 році в результаті реформування медичної
              галузі в м.Чернівці та створення КНП "Центральна міська клінічна
              лікарня" було реорганізовано у відділення терапії №2 . Розташовене
              воно на 3-тому поверсі корпусу №1 по вулеці Героїв-Майдану 226 і в
              своєму складі має 50 ліжок з яких 33 ліжка терапевтичного профілю,
              3 ліжка ендокринологічного профілю, 10 ліжок гастроентерологічного
              профілю, 4 ліжка паліативних.
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

        <div className={styles.banerSecondTherapyImage}>
          <Image
            src="/images/secondTherapy/therapy5.jpg" // Шлях до зображення в папці public
            alt="Doctor"
            width={600} // Задайте ширину
            height={500} // Задайте висоту
            className={styles.tunnelImage} // При потребі можна залишити стилізацію
            priority // Цей прапорець підказує Next.js пріоритетно завантажити зображення
          />
        </div>
      </div>

      <SecondTherapiDepartment />

      <Gallery images={secondTherapy} />
      <DoctorsSecondTherapy />
    </div>
  )
}
