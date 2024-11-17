import React from 'react'
import styles from './AmbulatoryPage.module.css'
import Link from 'next/link'
import Image from 'next/image'
const AmbulatoryPage = () => {
  return (
    <section className={styles.ambulatoryPageContainer}>
      <div className={styles.ambulatoryPageText}>
        <h2 className={styles.ambulatoryPagetitle}>Амбулаторна допомога</h2>
        <p className={styles.ambulatoryPagedescription}>
          Поліклінічне відділення — медичний заклад ІІІ рівня, що надає
          висококваліфіковану консультативну допомогу мешканцям Одеської області
          за 33 спеціальностями. Колектив налічує 168 працівників, серед яких 2
          доктори та 5 кандидатів медичних наук. Поліклініка здійснює понад 200
          тисяч відвідувань на рік та впроваджує сучасні медичні технології.
          Вона є важливим центром лікувально-діагностичних послуг і наукових
          досліджень у регіоні.
        </p>
        <p className={styles.ambulatoryPagedescription}>
          Наша команда досвідчених фахівців використовує сучасні методи
          діагностики та лікування, працюючи на новітньому обладнанні. Ми
          створюємо зручні умови для одужання та гарантуємо індивідуальний
          підхід і якісний догляд для кожного пацієнта.
        </p>

        <Link href="/departament/ambulatory">
          <button className={styles.ambulatoryPageButton}>
            Дізнатися більше
          </button>
        </Link>
      </div>

      <div className={styles.ambulatoryPageImage}>
        <Image
          src="/polic.jpg" // Шлях до зображення з папки public
          alt="Doctor"
          width={500}
          height={400}
          // className={styles.removalImage}
        />
      </div>
    </section>
  )
}

export default AmbulatoryPage
