import Card from '../Card/Card.jsx'
import styles from './CardsPage.module.css'
import Image from 'next/image'

const CardsPage = () => {
  return (
    <div className={styles.cardContainer}>
      <Card
        title="Стаціонарна допомога"
        description="Стаціонарна медична допомога "
        imageUrl="/stationar.jpg"
        linkUrl="/departament"
      />
      <Card
        title="Амбулаторна допомога"
        description="Амбулаторна медична допомога "
        imageUrl="/policlinic.jpg"
        linkUrl="/departament/ambulatory"
      />
      <Card
        title="Пологовий будинок"
        description="Пологовий будинок"
        imageUrl="/roddom.jpg"
        linkUrl="/departament/maternity"
      />
      <Card
        title="Паліативна допомого"
        description="Паліативна допомога"
        imageUrl="/paliativ.jpg"
        linkUrl="/departament/palliative"
      />
    </div>
  )
}

export default CardsPage
