import Image from 'next/image'
import styles from './page.module.css'

import BigBord from './components/BigBort/BigBord'
import Stationary from './components/Stationar/Stationar'
import MaternityPage from './components/MaternityPage/MaternityPage'
import AmbulatoryPage from './components/AmbulatoryPage/AmbulatoryPage'
import RehabilitationPage from './components/RehabilitationPage/RehabilitationPage'

export default function Home() {
  return (
    <div>
      <BigBord />
      <Stationary />
      <MaternityPage />
      <AmbulatoryPage />
      <RehabilitationPage />
    </div>
  )
}
