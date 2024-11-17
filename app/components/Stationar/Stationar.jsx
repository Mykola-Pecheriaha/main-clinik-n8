import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Stationar.module.css'

const Stationary = () => {
  return (
    <section className={styles.stationaryContainer}>
      <div className={styles.stationaryText}>
        <h2 className={styles.title}>Стаціонар</h2>
        <p className={styles.description}>
          Ласкаво просимо до нашого стаціонару — одного з найбільших у регіоні.
          наш стаціонар нараховує біля 500 ліжок і складається з відділень
          хірургічного, терапевтичного та родільного відділення. Ми надаємо
          планову та невідкладну медичну допомогу пацієнтам з різними
          захворюваннями, забезпечуючи комфорт і безпеку.
        </p>
        <p className={styles.description}>
          Наша команда досвідчених фахівців використовує сучасні методи
          діагностики та лікування, працюючи на новітньому обладнанні. Ми
          створюємо зручні умови для одужання та гарантуємо індивідуальний
          підхід і якісний догляд для кожного пацієнта.
        </p>

        <Link href="/departament">
          <button className={styles.departamentButton}>Дізнатися більше</button>
        </Link>
      </div>

      <div className={styles.stationarImage}>
        <Image
          src="/big.jpg" // Шлях до зображення з папки public
          alt="Doctor"
          width={400}
          height={400}
          // className={styles.removalImage}
        />
      </div>
    </section>
  )
}

export default Stationary
