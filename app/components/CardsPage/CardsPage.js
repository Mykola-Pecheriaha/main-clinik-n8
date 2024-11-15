import Card from '../Card/Card.jsx'
import styles from './CardsPage.module.css'
import Image from 'next/image'

const CardsPage = () => {
  return (
    <div className={styles.cardContainer}>
      <Card
        title="Стаціонарна"
        description="Стаціонарна медична допомога за 52 напрямками"
        imageUrl="/stationar.jpg"
      />
      <Card
        title="Поліклініка"
        description="Амбулаторна медична допомога за 17 напрямками"
        imageUrl="/policlinic.jpg"
      />
      <Card
        title="Родільний дом"
        description="Родільний дом"
        imageUrl="/roddom.jpg"
      />
      <Card
        title="Паліативна допомого"
        description="Паліативна допомога"
        imageUrl="/paliativ.jpg"
      />
    </div>
  )
}

export default CardsPage
