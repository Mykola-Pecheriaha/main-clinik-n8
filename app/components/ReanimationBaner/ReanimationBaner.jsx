import React from 'react'
import styles from './ReanimationBaner.module.css'
import ReanimFirstCorp from '../../components/ReanimFirstCorp/ReanimFirstCorp'
import Gallery from '../Gallery/Gallery'
import reanimatiomGalleryImages from '../../../data/reanimation/reanimatiomGalleryImages'
import DoctorsReanimation from '../DoctorsReanimation/DoctorsReanimation'

export default function ReanimationBaner() {
  return (
    <div className={styles.reanimationContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.reanimationBanerName}>
          Відділення інтенсивної терапії та анестезіології
        </h2>
      </div>

      <div className={styles.reanimationBanerTitle}>
        <div className={styles.reanimationBanerText}>
          <div>
            <p>
              Відділення інтенсивної терапії та анестезіології було відкрито в
              1987 році в складі ВКЛ ст.Чернівці. В 2023 році в результаті
              реформування медичної галузі в м.Чернівці та створення КНП
              "Центральна міська клінічна лікарня" відділення інтенсивної
              терапії та анестезіології розташоване на 5-тому поверсі корпусу №1
              по вулеці Героїв-Ьфйдану 226 і в своєму складі налічує 6 ліжок
              загального профілю і + 1 ліжко ізолятору.
            </p>

            <p>
              Відділення інтенсивної терапії та анестезіології максимально
              оснащено сучасним медичним обладнанням для хворих, а також для
              надання сучасного анестезіологічного забеспечення при операціях
              різної складності.
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

        <div className={styles.reanimationBanerImage}>
          <img
            src="/images/reanimation/reanim2.JPG" // Шлях до зображення з папки public
            alt="Doctor"
            width={600}
            height={500}
            // className={styles.tunnelImage}
          />
        </div>
      </div>

      <ReanimFirstCorp />

      <Gallery images={reanimatiomGalleryImages} />
      <DoctorsReanimation />
    </div>
  )
}
