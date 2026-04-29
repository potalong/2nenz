import { circleEvents } from '../data/circleEvents.js'

export function CircleCalendarPage() {
  return (
    <div className="page">
      <section className="card">
        <p className="section-label">EVENTS</p>
        <h2>直近イベント</h2>
        <p className="section-text">
          まずはカード一覧で十分です。あとから本格的な月表示カレンダーに変えられます。
        </p>

        <div className="grid">
          {circleEvents.map((event) => (
            <article key={`${event.date}-${event.title}`} className="item-card">
              <h3>{event.title}</h3>
              <ul className="info-list">
                <li>日付: {event.date}</li>
                <li>場所: {event.location}</li>
                <li>担当: {event.owner}</li>
              </ul>
              <p className="section-text">{event.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
