import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './RehabilitationPage.module.css'

const RehabilitationPage = () => {
  return (
    <section className={styles.rehabilitationPageContainer}>
      <div className={styles.rehabilitationPageImage}>
        <Image
          src="/rehabilitation2.jpg" // Шлях до зображення з папки public
          alt="Doctor"
          width={500}
          height={400}
          // className={styles.removalImage}
        />
      </div>
      <div className={styles.rehabilitationPageText}>
        <h2 className={styles.rehabilitationPageTitle}>Реабілітація</h2>
        <p className={styles.rehabilitationPageDescription}>
          Реабілітації на даний час приділяється велике значення. Якщо
          довійськовий період питання реабілітації пацієнтів як правело
          порушувалось для хворих, які перенесли судинні порушення в в басейні
          мозкових судин і після травм та операцій опорно-рухомій системі. То
          під час військового стану реабілітаційно-відновлювальні методи
          військовим і цівільним, після перенесення різних поранень поступово
          виходять на перші місця.
        </p>
        <p className={styles.rehabilitationPageDescription}>
          Наша команда досвідчених фахівців використовує сучасні методи
          діагностики та лікування, працюючи на новітньому обладнанні. Ми
          створюємо зручні умови для одужання та гарантуємо індивідуальний
          підхід і якісний догляд для кожного пацієнта.
        </p>

        <Link href="/departament/rehabilitation">
          <button className={styles.rehabilitationPageButton}>
            Дізнатися більше
          </button>
        </Link>
      </div>
    </section>
  )
}

export default RehabilitationPage
