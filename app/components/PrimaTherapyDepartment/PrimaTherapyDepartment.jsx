'use client'

import styles from './PrimaTherapyDepartment.module.css'
import Image from 'next/image'
import React, { useState } from 'react'

export default function PrimaTherapyDepartment() {
  const [isUlcerOpen, setIsUlcerlOpen] = useState(false)
  // const [isBiliousOpen, setIsBiliousOpen] = useState(false)
  // const [isHerniasOpen, setIsHerniasOpen] = useState(false)

  const [isCarpalSyndrome, setIsCarpalSyndrome] = useState(false)

  const toggleSection = (section) => {
    if (section === 'ulcer') {
      setIsUlcerlOpen(!isUlcerOpen)
    }
  }

  return (
    <div className={styles.primaTherapyDepartmentContainer}>
      {/* розділ печінки */}

      <div className={styles.primaTherapyDepartmentSection}>
        <h3 onClick={() => toggleSection('ulcer')}>
          Виразкова хвороба <span>{isUlcerOpen ? '▲' : '▼'}</span>
        </h3>
        {isUlcerOpen && (
          <div className={styles.primaTherapyDepartmentTitle}>
            <div className={styles.primaTherapyDepartmentText}>
              <p>
                Виразка шлунка та дванадцятипалої кишки — це хронічне
                захворювання, що характеризується формуванням виразок на
                слизовій оболонці цих органів. Даний стан виникає внаслідок
                порушення балансу між агресивними (соляна кислота та пепсин) та
                захисними (слиз і бікарбонати) факторами, що діють на слизову
                оболонку шлунка та дванадцятипалої кишки.
              </p>

              <h2>Які ознаки хвороби</h2>

              <ul>
                <li>
                  {' '}
                  - Біль у шлунку має непостійний характер. Дискомфорт
                  проявляється після вживання гострих і жирних продуктів,
                  алкоголю. Також дискомфорт спостерігається вранці.
                </li>
                <li>
                  Нудота та блювання — починаються після вживання їжі. Після
                  блювання настає полегшення, вщухає біль.
                </li>
                <li>
                  {' '}
                  - Через годину-півтори після прийому їжі починається печія — в
                  області стравоходу хворий відчуває сильне печіння.
                </li>
                <li>
                  {' '}
                  - Також у людини може бути відсутнім апетит — хворий прагне
                  уникнути страждань і дискомфорту.
                </li>
              </ul>

              <h2>Причини виникнення недуги</h2>

              <ul>
                <li>спричинені інфекцією Helicobacter pylori;</li>
                <li>
                  як наслідок прийому високих доз ліків, що подразнюють слизову
                  оболонку шлунка;
                </li>
                <li>викликані тривалим психологічним або фізичним стресом.</li>
              </ul>

              <h2>Діагностика виразкової хвороби шлунка та 12-палої кишки</h2>

              <ul>
                <li>
                  Eзофагогастродуоденоскопія (ЕГДС), вона ж гастроскопія -
                  oсновний спосіб діагностики даної патології .{' '}
                </li>
                <li>
                  Біопсія - відщипнути шматочок стінки слизової оболонки для
                  детального вивчення. Цей метод обстеження дуже інформативний.
                </li>
              </ul>

              <p>
                При появі скарг у хворого, які наведені вище хворий має
                звернутися до лікаря, який призначить комплексне обстеження що
                допоможе встановити діагноз, а значить і призначети дієве
                лікування.
              </p>

              <p>
                На сьогоднішній період лікування виразкової хвороби шлунку і
                ДПК, коли ще немає ускладненя займається лікар -
                гастроентеролог.{' '}
              </p>

              <p>
                Ускладнення досить важкі і при винекненні яких хворий
                направляється до хірурга в срочному порядку, тому що ці
                ускладнення при не лікуванні їх можуть швидко привести до смерті
                хворого.
              </p>

              <h2>Які є ускладнення виразки</h2>

              <ul>
                <li>Перфорація виразкиli </li>
              </ul>
              <p>
                - це коли виразка прогризає стінку шлунка або ДПК і ввесь вміст
                їх виливається в вільну черевну порожнину (поза киншкивник) і
                тоді виникає дуже вашке захворювання - перетоніт. Хворому
                необхідна ДУЖЕ НЕВІДКЛАДНА ОПЕРАЦІЯ.{' '}
              </p>

              <ul>
                <li>Пенетрація виразки</li>
              </ul>

              <p>
                {' '}
                - це коли виразка прогризає стінку шлунка або ДПК і попадає в
                другий орган (підшлункова залоза, печінка і тд.){' '}
              </p>

              <ul>
                <li>Кровотеча з виразки</li>
              </ul>
              <p>
                Хворий дуже швидко має бути доставлений в хірургічний стаціонар
                для зупинки кровотечі. Цей стан може швидко привести до смерті
                хворого.{' '}
              </p>
              <ul>
                <li>Стеноз дванадцятипалої кишки</li>
              </ul>

              <p>
                Якщо хворий не лікований грамотно і виразка постійно з'являється
                і не заживає то при нашаруванні рубців звужується , можливо і
                перекривається вихід з шлунку і їжа постійно знаходиться в
                шлунку. Вона не переварюється і не всмоктується. Хворий починає
                втрачати вагу тіла практично від голоду.{' '}
              </p>
              <p>
                При таких станах потрібна операція. Як допомогти хворому після
                обстеження вирішує хірург.
              </p>

              <h5>Треба добре зрозуміти:</h5>
              <p>
                Виразкова хвороба шлунку чи ДПК досить складне захворюванняЮ щоб
                його ігнорувати і може привести до досить важких і критичних для
                життя ускладнень
              </p>

              <p>При любих болях в животі пацієнт має звернутися до лікаря.</p>
            </div>
            <div className={styles.primaTherapyDepartmentImage}>
              <Image
                src="/images/secondTherapy/ulcer2.jpg" // Шлях до зображення в папці public
                alt="Liver1"
                width={300}
                height={200}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
              <Image
                src="/images/secondTherapy/ulcer1.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />

              <Image
                src="/images/secondTherapy/ulcer4.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
              <Image
                src="/images/secondTherapy/ulcer5.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
              <Image
                src="/images/secondTherapy/ulcer4.jpg" // Шлях до зображення в папці public
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
