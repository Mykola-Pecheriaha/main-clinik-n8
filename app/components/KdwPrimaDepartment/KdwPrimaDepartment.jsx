'use client'

import styles from './KdwPrimaDepartment.module.css'
import Image from 'next/image'
import React, { useState } from 'react'

export default function KdwPrimaDepartment() {
  const [isChirurgOpen, setIsChirurgOpen] = useState(false)
  const [isGinicologOpen, setIsGinicologOpen] = useState(false)
  const [isLorOpen, setIsLorOpen] = useState(false)
  const [isOftalmologOpen, setIsOftalmologOpen] = useState(false)
  const [isCutenOpen, setIsCutenOpen] = useState(false)
  const [isCardOpen, setIsCardOpen] = useState(false)

  const [isSurdologOpen, setIsSurdologOpen] = useState(false)
  const [isEndocrinologOpen, setIsEndocrinologOpen] = useState(false)
  const [isRentgenOpen, setIsRentgenOpen] = useState(false)
  const [isUsdOpen, setIsUsdOhen] = useState(false)
  const [isEndoscopOpen, setIsEndoscopOpen] = useState(false)
  const [isNevropatologOpen, setIsNevropatologOpen] = useState(false)

  // const [isAbdominoplasty, setIsAbdominoplasty] = useState(false)

  const toggleSection = (section) => {
    if (section === 'chirurg') {
      setIsChirurgOpen(!isChirurgOpen)
    } else if (section === 'ginicolog') {
      setIsGinicologOpen(!isGinicologOpen)
    } else if (section === 'lor') {
      setIsLorOpen(!isLorOpen)
    } else if (section === 'oftalmolog') {
      setIsOftalmologOpen(!isOftalmologOpen)
    } else if (section === 'cuten') {
      setIsCutenOpen(!isCutenOpen)
    } else if (section === 'card') {
      setIsCardOpen(!isCardOpen)
    } else if (section === 'surdolog') {
      setIsSurdologOpen(!isSurdologOpen)
    } else if (section === 'endocrinolog') {
      setIsEndocrinologOpen(!isEndocrinologOpen)
    } else if (section === 'usd') {
      setIsUsdOhen(!isUsdOpen)
    } else if (section === 'rentgen') {
      setIsRentgenOpen(!isRentgenOpen)
    } else if (section === 'endoscop') {
      setIsEndoscopOpen(!isEndoscopOpen)
    } else if (section === 'nevro') {
      setIsNevropatologOpen(!isNevropatologOpen)
    }
  }

  return (
    <div className={styles.kdwPrimaDepartmentContainer}>
      {/* хірург */}

      <div className={styles.kdwPrimaDepartmentSection}>
        <h3 onClick={() => toggleSection('chirurg')}>
          Хірург<span>{isChirurgOpen ? '▲' : '▼'}</span>
        </h3>
        {isChirurgOpen && (
          <div className={styles.kdwPrimaDepartmentTitle}>
            <div className={styles.kdwPrimaDepartmentText}>
              <p>Хірургічний кабінет працює</p>

              <h2>Послуги хірургічного кабінету</h2>

              <ul>
                <li>
                  Проводить комісійний огляд пацієнтів працюючих на залізні
                  дорозі, а також для одержання медичних довідок при оформлені
                  дозволів на володіння зброєю.
                </li>
                <li>
                  Оглядає пацієнтів за електронними направленнями з первинної
                  ланки, та при потребі сформувати направлення на стаціонарне
                  лікування
                </li>
                <li>Проводить цифрову дерматоскопію пацієнтам. </li>
                <li>Проводиться видалення утворення шкіри.</li>
                <li>
                  Проводиться амбулаторний супровід післяопераційних хворих,
                  яких виписано з хірургічного стаціонару після оперативного
                  втручання
                </li>
              </ul>
            </div>
            <div className={styles.kdwPrimaDepartmentImage}>
              <Image
                src="/images/policlinik/policliniccomm4.JPG" // Шлях до зображення в папці public
                alt="Liver1"
                width={200}
                height={150}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/dermatoskop.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>

      {/* Гінеколог */}

      <div className={styles.kdwPrimaDepartmentSection}>
        <h3 onClick={() => toggleSection('ginicolog')}>
          Гінеколог<span>{isGinicologOpen ? '▲' : '▼'}</span>
        </h3>
        {isGinicologOpen && (
          <div className={styles.kdwPrimaDepartmentTitle}>
            <div className={styles.kdwPrimaDepartmentText}>
              <p>Гінекологічний кабінет працює</p>

              <h2>Послуги гінекологічного кабінету</h2>

              <ul>
                <li>
                  Проводить комісійний огляд пацієнтів працюючих на залізні
                  дорозі, а також для одержання різноманітних медичних довідок .
                </li>
                <li>
                  Оглядає пацієнтів за електронними направленнями з первинної
                  ланки, та при потребі сформувати направлення на стаціонарне
                  лікування
                </li>
                <li>
                  Проводить кольпоскопію пацієнтам по показам та по календарному
                  протоколу.{' '}
                </li>
                <li>Проводиться амбулаторне лікування .</li>
                <li>
                  Проводиться амбулаторний супровід післяопераційних хворих,
                  яких виписано з стаціонару після оперативного втручання
                </li>
              </ul>
            </div>
            <div className={styles.kdwPrimaDepartmentImage}>
              <Image
                src="/images/policlinik/ulcer2/.jpg" // Шлях до зображення в папці public
                alt="Liver1"
                width={300}
                height={200}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/policliniccomm13.JPG" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>

      {/* ЛОР*/}

      <div className={styles.kdwPrimaDepartmentSection}>
        <h3 onClick={() => toggleSection('lor')}>
          ЛОР<span>{isLorOpen ? '▲' : '▼'}</span>
        </h3>
        {isLorOpen && (
          <div className={styles.kdwPrimaDepartmentTitle}>
            <div className={styles.kdwPrimaDepartmentText}>
              <p>ЛОР кабінет працює</p>

              <h2>Послуги ЛОР кабінету</h2>

              <ul>
                <li>
                  Проводить комісійний огляд пацієнтів працюючих на залізні
                  дорозі, а також для одержання різноманітних медичних довідок .
                </li>
                <li>
                  Оглядає пацієнтів за електронними направленнями з первинної
                  ланки, та при потребі сформувати направлення на стаціонарне
                  лікування
                </li>
                <li>
                  Проводить ріноскопію, оттоскопію та інші огляд ЛОР оргінів.
                </li>
                <li>Проводиться амбулаторне лікування пацієнтів .</li>
                <li>
                  Проводиться амбулаторний супровід післяопераційних хворих,
                  яких виписано з стаціонару після оперативного втручання
                </li>
              </ul>
            </div>
            <div className={styles.kdwPrimaDepartmentImage}>
              <Image
                src="/images/policlinik/policliniccomm5.JPG" // Шлях до зображення в папці public
                alt="офталь"
                className={styles.smallImage}
                width={300}
                height={200}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/lor2.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                className={styles.smallImage}
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>

      {/* Офтальмолог */}

      <div className={styles.kdwPrimaDepartmentSection}>
        <h3 onClick={() => toggleSection('oftalmolog')}>
          Офтальмолог<span>{isOftalmologOpen ? '▲' : '▼'}</span>
        </h3>
        {isOftalmologOpen && (
          <div className={styles.kdwPrimaDepartmentTitle}>
            <div className={styles.kdwPrimaDepartmentText}>
              <p>Офтальмологічний кабінет працює</p>

              <h2>Послуги офтальмологічного кабінету</h2>

              <ul>
                <li>
                  Проводить комісійний огляд пацієнтів працюючих на залізні
                  дорозі, а також для одержання різноманітних медичних довідок .
                </li>
                <li>
                  Оглядає пацієнтів за електронними направленнями з первинної
                  ланки, та при потребі сформувати направлення на стаціонарне
                  лікування
                </li>
                <li>Проводить обстеження ока та його додатків</li>
                <li>Проводиться амбулаторне лікування пацієнтів .</li>
                <li>
                  Проводиться амбулаторний супровід післяопераційних хворих,
                  яких виписано з стаціонару після оперативного втручання
                </li>
              </ul>
            </div>
            <div className={styles.kdwPrimaDepartmentImage}>
              <Image
                src="/images/policlinik/policliniccomm7.JPG" // Шлях до зображення в папці public
                alt="Liver1"
                width={300}
                height={200}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/oftelm1.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>

      {/* Дерматолог*/}

      <div className={styles.kdwPrimaDepartmentSection}>
        <h3 onClick={() => toggleSection('cuten')}>
          Дерматолог<span>{isCutenOpen ? '▲' : '▼'}</span>
        </h3>
        {isCutenOpen && (
          <div className={styles.kdwPrimaDepartmentTitle}>
            <div className={styles.kdwPrimaDepartmentText}>
              <p>Дерматологічний кабінет працює</p>

              <h2>Послуги дерматологічного кабінету</h2>

              <ul>
                <li>
                  Проводить комісійний огляд пацієнтів працюючих на залізні
                  дорозі, а також для одержання різноманітних медичних довідок .
                </li>
                <li>
                  Оглядає пацієнтів за електронними направленнями з первинної
                  ланки, та при потребі сформувати направлення на стаціонарне
                  лікування
                </li>
                <li>
                  Проводить обстеження різних захворювань шкірних покровів
                </li>
                <li>Проводиться амбулаторне лікування пацієнтів .</li>
              </ul>
            </div>
            <div className={styles.kdwPrimaDepartmentImage}>
              <Image
                src="/images/policlinik/policliniccomm12.JPG" // Шлях до зображення в папці public
                alt="Liver1"
                width={300}
                height={200}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/demat1.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>

      {/* Сурдолог*/}

      <div className={styles.kdwPrimaDepartmentSection}>
        <h3 onClick={() => toggleSection('surdolog')}>
          Сурдолог<span>{isSurdologOpen ? '▲' : '▼'}</span>
        </h3>
        {isSurdologOpen && (
          <div className={styles.kdwPrimaDepartmentTitle}>
            <div className={styles.kdwPrimaDepartmentText}>
              <p>Сурдологічний кабінет працює</p>

              <h2>Послуги сурдологічного кабінету</h2>

              <ul>
                <li>
                  Проводить комісійний огляд пацієнтів працюючих на залізні
                  дорозі, а також для одержання різноманітних медичних довідок .
                </li>
                <li>
                  Оглядає пацієнтів за електронними направленнями з первинної
                  ланки, та при потребі сформувати направлення на стаціонарне
                  лікування
                </li>
                <li>
                  Проводить обстеження пацієнтів з вадами слуху і визначає
                  рівень ураження органів слуху.
                </li>
              </ul>
            </div>
            <div className={styles.kdwPrimaDepartmentImage}>
              <Image
                src="/images/policlinik/ulcer2.jpg" // Шлях до зображення в папці public
                alt="Liver1"
                width={300}
                height={200}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/surdolog1.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>

      {/* Ендокринолог */}

      <div className={styles.kdwPrimaDepartmentSection}>
        <h3 onClick={() => toggleSection('endocrinolog')}>
          Ендокринолог<span>{isEndocrinologOpen ? '▲' : '▼'}</span>
        </h3>
        {isEndocrinologOpen && (
          <div className={styles.kdwPrimaDepartmentTitle}>
            <div className={styles.kdwPrimaDepartmentText}>
              <p>Ендокринологічний кабінет працює</p>

              <h2>Послуги ендокринологічного кабінету</h2>

              <ul>
                <li>
                  Проводить комісійний огляд пацієнтів працюючих на залізні
                  дорозі, а також для одержання різноманітних медичних довідок .
                </li>
                <li>
                  Оглядає пацієнтів за електронними направленнями з первинної
                  ланки, та при потребі сформувати направлення на стаціонарне
                  лікування
                </li>
                <li>
                  Проводить обстеження різних ендокринологічних захворювань.
                </li>
                <li>Проводиться амбулаторне лікування пацієнтів .</li>
              </ul>
            </div>
            <div className={styles.kdwPrimaDepartmentImage}>
              <Image
                src="/images/policlinik/policliniccomm11.JPG" // Шлях до зображення в папці public
                alt="Liver1"
                className={styles.smallImage}
                width={200}
                height={150}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/ulcer4.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                className={styles.smallImage}
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>

      {/* Невропатолог */}

      <div className={styles.kdwPrimaDepartmentSection}>
        <h3 onClick={() => toggleSection('nevro')}>
          Невропатолог<span>{isNevropatologOpen ? '▲' : '▼'}</span>
        </h3>
        {isNevropatologOpen && (
          <div className={styles.kdwPrimaDepartmentTitle}>
            <div className={styles.kdwPrimaDepartmentText}>
              <p>неврологічний кабінет працює</p>

              <h2>Послуги неврологічного кабінету</h2>

              <ul>
                <li>
                  Проводить комісійний огляд пацієнтів працюючих на залізні
                  дорозі, а також для одержання різноманітних медичних довідок .
                </li>
                <li>
                  Оглядає пацієнтів за електронними направленнями з первинної
                  ланки, та при потребі сформувати направлення на стаціонарне
                  лікування
                </li>
                <li>Проводить обстеження різних неврологічних захворювань.</li>
                <li>Проводиться амбулаторне лікування пацієнтів .</li>
              </ul>
            </div>
            <div className={styles.kdwPrimaDepartmentImage}>
              <Image
                src="/images/policlinik/policliniccomm6.JPG" // Шлях до зображення в папці public
                alt="nevro"
                width={300}
                height={200}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/nevro2.jpg" // Шлях до зображення в папці public
                alt="nevro"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/nevro1.jpg" // Шлях до зображення в папці public
                alt="nevro"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>

      {/* Кардіолог */}

      <div className={styles.kdwPrimaDepartmentSection}>
        <h3 onClick={() => toggleSection('card')}>
          Кардіолог<span>{isCardOpen ? '▲' : '▼'}</span>
        </h3>
        {isCardOpen && (
          <div className={styles.kdwPrimaDepartmentTitle}>
            <div className={styles.kdwPrimaDepartmentText}>
              <p>Кардіологічний кабінет працює</p>

              <h2>Послуги кардіологічного кабінету</h2>

              <ul>
                <li>
                  Проводить комісійний огляд пацієнтів працюючих на залізні
                  дорозі, а також для одержання різноманітних медичних довідок .
                </li>
                <li>
                  Оглядає пацієнтів за електронними направленнями з первинної
                  ланки, та при потребі сформувати направлення на стаціонарне
                  лікування
                </li>
                <li>
                  Проводить обстеження різних ендокринологічних захворювань.
                </li>
                <li>Проводиться амбулаторне лікування пацієнтів .</li>
              </ul>
            </div>
            <div className={styles.kdwPrimaDepartmentImage}>
              <Image
                src="/images/policlinik/ulcer2.jpg" // Шлях до зображення в папці public
                alt="Liver1"
                width={300}
                height={200}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/card1.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>

      {/* УЗД кабінет */}

      <div className={styles.kdwPrimaDepartmentSection}>
        <h3 onClick={() => toggleSection('usd')}>
          УЗД кабінет<span>{isUsdOpen ? '▲' : '▼'}</span>
        </h3>
        {isUsdOpen && (
          <div className={styles.kdwPrimaDepartmentTitle}>
            <div className={styles.kdwPrimaDepartmentText}>
              <p>УЗД кабінет працює</p>

              <h2>
                Послуги УЗД кабінету на 0 поверсі чотирьохповерхового корпусу
                (корпусу №1)
              </h2>

              <ul>
                <li>
                  Проводить обстеження органів черевної порожнини та
                  заочеревенного простору.
                </li>
                <li>
                  Обстеження органів малого тазу транскутантно та трансректально
                  і трансвагінально
                </li>
                <li>
                  Проводить УЗД м'ягких тканин тіла з виявленням утворень.
                </li>
                <li>Проводить обстеження плевральних порожнин та легень</li>
                <li>
                  Узд обстеження щитовидної залози та паращитовидних залоз
                </li>
                <li>
                  УЗД діагностика нирок та сечового міхура з визначенням функції
                  ниррок.
                </li>
                <li></li>
                <li></li>
              </ul>

              <h2>
                Послуги УЗД кабінету на 1 поверсі двохповерхового корпусу
                (корпусу №1)
              </h2>

              <ul>
                <li>Узд серця - ехокардіографія</li>
              </ul>
            </div>
            <div className={styles.kdwPrimaDepartmentImage}>
              <Image
                src="/images/policlinik/uzd1.jpg" // Шлях до зображення в папці public
                alt="Liver1"
                width={300}
                height={200}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/uzd2.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/uzd3.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>

      {/* Ендоскопічний кабінет */}

      <div className={styles.kdwPrimaDepartmentSection}>
        <h3 onClick={() => toggleSection('endoscop')}>
          Ендоскопічний кабінет<span>{isEndoscopOpen ? '▲' : '▼'}</span>
        </h3>
        {isEndoscopOpen && (
          <div className={styles.kdwPrimaDepartmentTitle}>
            <div className={styles.kdwPrimaDepartmentText}>
              <p>Ендоскопічний кабінет працює</p>

              <h2>Послуги фіброгастроскопічного кабінету</h2>

              <ul>
                <li>Проводяться ендоскопічне обстеження стравоходу</li>
                <li>
                  Проводиться відіоендоскопічне обстеження шлунка і
                  Дванадцятипалої кишки
                </li>
                <li>
                  Поводиться ендоскопічна зупинка шлугково-кишкової кровотечі,
                  ко джерело їїє стравохід, шлунок або ДПК.
                </li>
                <li>
                  Проводиться взяття діагностичної біопсії при виявленні пухлин,
                  для визначенні їх морфологіческої структури
                </li>
                <li>Проводиться діагностика compilobactor pilori.</li>
                <li>
                  Проводиться ендоскопічне видалення поліпів стравоходу, шлунка
                  та ДПК.
                </li>
                <li>
                  Проводиться діагностична відіоколоноскопія з з
                  анастезіологічним супровідо та без нього.
                </li>
                <li>Проводиться біопсія пухлин товстого кишкивника.</li>
                <li>
                  Проводиться едоскопічне видалення поліпів та пухлин товстого
                  кишкивника
                </li>
                <li>
                  Проводиться зупинка кровотечі з джерела товстого кишкивника
                </li>
              </ul>
            </div>
            <div className={styles.kdwPrimaDepartmentImage}>
              <Image
                src="/images/policlinik/fgds2.jpg" // Шлях до зображення в папці public
                alt="Liver1"
                width={300}
                height={200}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/fgds1.JPG" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/fgds3.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>

      {/* Рентген */}

      <div className={styles.kdwPrimaDepartmentSection}>
        <h3 onClick={() => toggleSection('rentgen')}>
          Рентгенологічний кабінет<span>{isRentgenOpen ? '▲' : '▼'}</span>
        </h3>
        {isRentgenOpen && (
          <div className={styles.kdwPrimaDepartmentTitle}>
            <div className={styles.kdwPrimaDepartmentText}>
              <p>Рентгенологічний кабінет працює</p>

              <h2>Послуги рентгенологічного кабінету</h2>

              <ul>
                <li>
                  Проводяться рентгенологічне обстеження хворих з захворюваннями
                  опорно-рухомого апарату
                </li>
                <li>
                  Рентгенологічне обстеження хворих з захворюванн
                  шлунково-кишкового апарату.
                </li>
                <li>
                  Проводить рентгенологічне обстеження захворювання органів
                  грудної клітковини
                </li>
                <li>Рентгенологічне обстеження хребта</li>
                <li>Рентгенологічне обстеження </li>
              </ul>
            </div>
            <div className={styles.kdwPrimaDepartmentImage}>
              <Image
                src="/images/policlinik/policliniccomm15.jpg" // Шлях до зображення в папці public
                alt="Liver1"
                width={300}
                height={200}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/policliniccomm17.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/policlinik/policliniccomm16.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
