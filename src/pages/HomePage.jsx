import { Link } from 'react-router-dom'

const pageCards = [
  {
    title: 'ガイド',
    description: 'このサイトの使い方や、整理の考え方をまとめたページです。',
  },
]

export function HomePage() {
  return (
    <div className="page">

      <section className="grid">
        {pageCards.map((card) => (
          <article key={card.title} className="card">
            <p className="section-label">{card.title}</p>
            <h2>{card.title}</h2>
            <p className="section-text">{card.description}</p>
          </article>
        ))}
      </section>

      <section className="card">
        <p className="section-label">POINT</p>
        <h2>初心者向けにした整理の考え方</h2>
        <div className="simple-list">
          <div>
            <strong>App.jsx</strong>
            <p className="section-text">ページの切り替えだけを書く場所です。</p>
          </div>
          <div>
            <strong>pages</strong>
            <p className="section-text">画面ごとの見た目を書く場所です。</p>
          </div>
          <div>
            <strong>data</strong>
            <p className="section-text">
              授業やイベントのサンプルデータを分けて置く場所です。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
