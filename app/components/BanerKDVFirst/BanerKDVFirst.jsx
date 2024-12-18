'use client'

import React from 'react'
import Image from 'next/image' // Імпорт Image
import styles from './BanerKDVFirst.module.css'
import Gallery from '../Gallery/Gallery'
import kdvPrimaCorpGalleryImages from '../../../data/kdvPrimaCorp/kdvPrimaCorpGalleryImages'

import KdwPrimaDepartment from '../KdwPrimaDepartment/KdwPrimaDepartment'
import DoctorsKdvPrima from '../../components/DoctorsKdvPrima/DoctorsKdvPrima'

export default function BanerKDVFirst() {
  return (
    <div className={styles.banerKDVFirstContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.banerKDVFirstName}>
          КОНСУЛЬТАТИВНО - ДІАГНОСТИЧНЕ ВІДДІЛЕННЯ
        </h2>
      </div>

      <div className={styles.banerKDVFirstTitle}>
        <div className={styles.banerKDVFirstText}>
          <div>
            <p>
              Консультативно-діагностичне відділення було відкрито в 2018 році в
              складі КНП МЛ №1, яке 2021 році в результаті реформування медичної
              галузі в м.Чернівці та створення КНП "Центральна міська клінічна
              лікарня" було збережено. . Розташовене в корпусу №1, на другому
              поверсі двохповерхові будівлі по вулеці Героїв Майдану 226 (бивша
              залізнична лікарня).
            </p>

            <p>
              {' '}
              У відділенні працюють фахівці терапевтичного та хірургічного
              напрямку . Також є діагностичний підрозділ
            </p>

            <p>
              У відділенні проведений ремонт. Палати є уютними, безбарєрними.
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

        <div className={styles.banerKDVFirstImage}>
          <Image
            src="/images/policlinik/polacliniccomm3.jpg" // Шлях до зображення в папці public
            alt="Doctor"
            width={600} // Задайте ширину
            height={500} // Задайте висоту
            className={styles.tunnelImage} // При потребі можна залишити стилізацію
            priority // Цей прапорець підказує Next.js пріоритетно завантажити зображення
          />
        </div>
      </div>

      <KdwPrimaDepartment />

      <Gallery images={kdvPrimaCorpGalleryImages} />
      <DoctorsKdvPrima />
    </div>
  )
}
