import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import styles from './MaternityPage.module.css'

const MaternityPage = () => {
  return (
    <section className={styles.maternityPagContainer}>
      <div className={styles.maternityImage}>
        <Image
          src="/maternity2.jpg" // Шлях до зображення з папки public
          alt="Doctor"
          width={400}
          height={400}
          // className={styles.removalImage}
        />
      </div>
      <div className={styles.maternityText}>
        <h2 className={styles.maternityTitle}>Пологовий будинок</h2>
        <p className={styles.maternityDescription}>
          Відкритий у 1983 році, центр за 40 років допоміг народитися понад 100
          000 дітям. Він постійно впроваджує новітні медичні технології та був
          першим на півдні України, хто отримав звання ЮНІСЕФ «Лікарня,
          доброзичлива до дитини». У 2006 році заклад реорганізовано в
          перинатальний центр із сучасними відділеннями для патології
          вагітності, новонароджених та інтенсивної терапії. Центр екстреної
          допомоги цілодобово підтримує жінок і новонароджених у регіоні,
          рятуючи сотні життів.
        </p>
        <p className={styles.maternityDescription}>
          Наша команда досвідчених фахівців використовує сучасні методи
          діагностики та лікування, працюючи на новітньому обладнанні. Ми
          створюємо зручні умови для одужання та гарантуємо індивідуальний
          підхід і якісний догляд для кожного пацієнта.
        </p>

        <Link href="/departament/maternity">
          <button className={styles.maternityButton}>Дізнатися більше</button>
        </Link>
      </div>
    </section>
  )
}

export default MaternityPage
