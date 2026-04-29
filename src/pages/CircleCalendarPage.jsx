import { circleEvents } from '../data/circleEvents.js'

export function CircleCalendarPage() {
  return (
    <div className="page">
      <section className="card">
        <p className="section-label">EVENTS</p>
        <h2>直近イベント</h2>
        <p className="section-text">
          直近のイベントです。気になるものがあればぜひ！
        </p>

        <div className="grid">
          {circleEvents.map((event) => (
            <article key={`${event.date}-${event.title}`} className="item-card">
              <h3>{event.title}</h3>
              <ul className="info-list">
                <li>日付: {event.date}</li>
                <li>場所: {event.location}</li>
                <li>webサイト: {event.owner}</li>
              </ul>
              <p className="section-text">{event.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
