import React from 'react'
import styles from './MaternBaner.module.css'
import Image from 'next/image'

export default function MaternBaner() {
  return (
    <div className={styles.maternBanerContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.maternBanerName}>Акушерське відділення</h2>
      </div>

      <div className={styles.maternBanerTitle}>
        <div className={styles.maternBanerText}>
          <div>
            <p>
              Акушерське відділення було відкрито в 1983 році. В 2023 році в
              результаті реформування медичної галузі Чернівецькою міською радою
              пологовий будинок був приєднаний до ЦМКЛ як окремий підрозділ.
              Акушерську відділення також реформовано в "акушерське відділення з
              приймально-діагностичним блоком та палатами сумісного перебування
              матері і дитини, і з ліжками інтенсивної терапії"
            </p>
            <p>
              В склад акушерського відділення на 35 ліжок входять 3 ліжка
              інтенсивної терапії.
            </p>
          </div>
        </div>

        <div className={styles.maternBanerImage}>
          <img
            src="/images/pologhaus/akush2.jpg" // Шлях до зображення з папки public
            alt="Doctor"
            width={600}
            height={500}
            // className={styles.tunnelImage}
          />
        </div>
      </div>

      {/* <FirstSurgery /> */}
      {/* <Gallery images={galleryImages} /> */}
      {/* <DoctorsDepartment /> */}
    </div>
  )
}
