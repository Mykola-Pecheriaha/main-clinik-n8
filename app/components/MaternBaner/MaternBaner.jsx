import React from 'react'
import styles from './MaternBaner.module.css'
import Image from 'next/image'
import MaterObstetrics from '../../components/MaterObstetrics/MaterObstetrics'
import Gallery from '../Gallery/Gallery'
import obstetricsGalleryImages from '../../../data/obstetrics/obstetricsGalleryImages'

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
            <p>
              Акушерське відділення🏢 максимально оснащено сучасним медичним
              обладнанням для безпечного і дбайливого розродження
            </p>

            <h4>Наше завдання ... </h4>
            <p>
              Забезпечення народження здорової дитини при збереженні здоров’я
              матері. Запорукою успіху пологів є психологічний комфорт і спокій
              жінки, що народжує. Ми практикуємо партнерські пологи.
            </p>

            <h4>У нас працюють ...</h4>

            <p>
              лікарі та акушерки з великим досвідом роботи, які проінструктують
              вагітну про правильну поведінку в пологах, щоб полегшити цей
              процес і про те, які процедури будуть виконані під час пологів за
              необхідності.
            </p>

            <h4>Відділенння має ...</h4>
            <p>
              6 родзалів і 1 палата для ретельного спостереження на етапі
              пологового залу. Вони оснащені всією необхідною сучасною
              апаратурою, ліжками трансформерами, зручними стільцями та
              інвентарем для того, щоб пологи пройшли максимально комфортно,
              легко.
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

      <MaterObstetrics />

      <Gallery images={obstetricsGalleryImages} />
      {/* <DoctorsDepartment /> */}
    </div>
  )
}
