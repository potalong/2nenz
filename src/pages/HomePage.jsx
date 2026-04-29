import { Link } from 'react-router-dom'

const pageCards = [
  {
    title: 'ガイド',
    description: '2年の情シスとマーキアで作成しました',
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
    </div>
  )
}
