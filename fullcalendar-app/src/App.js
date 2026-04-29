import { useMemo, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import './App.css'
import { circleEvents } from './data/circleEvents'

const timeFormatter = new Intl.DateTimeFormat('ja-JP', {
  month: 'numeric',
  day: 'numeric',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
})

const dayFormatter = new Intl.DateTimeFormat('ja-JP', {
  month: 'numeric',
  day: 'numeric',
  weekday: 'short',
})

function formatTimeRange(start, end) {
  const startDate = new Date(start)
  const endDate = new Date(end)

  if (startDate.toDateString() === endDate.toDateString()) {
    return `${timeFormatter.format(startDate)} - ${timeFormatter.format(endDate).slice(-5)}`
  }

  return `${dayFormatter.format(startDate)} ${startDate
    .toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })} - ${dayFormatter.format(endDate)} ${endDate.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}`
}

function App() {
  const calendarEvents = useMemo(
    () =>
      circleEvents.map((event) => ({
        title: event.title,
        start: event.start,
        end: event.end,
        allDay: false,
        extendedProps: event,
      })),
    [],
  )

  const [selectedEvent, setSelectedEvent] = useState(circleEvents[0])

  const upcomingCount = circleEvents.length

  return (
    <div className="app-shell">
      <header className="hero card-surface">
        <div>
          <p className="eyebrow">CIRCLE CALENDAR</p>
          <h1>サークルイベントをそのままカレンダーで見る</h1>
          <p className="hero-copy">
            `circleEvents` のデータを FullCalendar に流し込み、月表示と詳細カードを同時に見られるようにしました。
          </p>
        </div>

        <div className="hero-metrics">
          <div className="metric">
            <span className="metric-label">EVENTS</span>
            <strong>{upcomingCount}</strong>
          </div>
          <div className="metric">
            <span className="metric-label">FOCUS</span>
            <strong>月表示 + 詳細</strong>
          </div>
        </div>
      </header>

      <main className="layout">
        <section className="calendar-panel card-surface">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">CALENDAR</p>
              <h2>イベント配置</h2>
            </div>
            <p className="panel-note">クリックすると右側の詳細が切り替わります。</p>
          </div>

          <div className="calendar-frame">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek',
              }}
              height="auto"
              weekends
              dayMaxEvents
              navLinks
              nowIndicator
              events={calendarEvents}
              eventDisplay="block"
              eventContent={(arg) => (
                <div className="calendar-event">
                  <div className="calendar-event-title">{arg.event.title}</div>
                  <div className="calendar-event-meta">{arg.timeText}</div>
                </div>
              )}
              eventClick={(info) => {
                info.jsEvent.preventDefault()
                setSelectedEvent(info.event.extendedProps)
              }}
            />
          </div>
        </section>

        <aside className="sidebar card-surface">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">DETAIL</p>
              <h2>選択中のイベント</h2>
            </div>
          </div>

          {selectedEvent ? (
            <article className="detail-card">
              <p className="detail-date">{selectedEvent.date}</p>
              <h3>{selectedEvent.title}</h3>
              <p className="detail-description">{selectedEvent.description}</p>

              <dl className="detail-list">
                <div>
                  <dt>開催時間</dt>
                  <dd>{formatTimeRange(selectedEvent.start, selectedEvent.end)}</dd>
                </div>
                <div>
                  <dt>場所</dt>
                  <dd>{selectedEvent.location}</dd>
                </div>
                <div>
                  <dt>担当</dt>
                  <dd>{selectedEvent.owner || '未記載'}</dd>
                </div>
              </dl>
            </article>
          ) : null}

          <div className="event-list">
            <h3>イベント一覧</h3>
            <div className="event-list-stack">
              {circleEvents.map((event) => (
                <button
                  key={`${event.date}-${event.title}`}
                  type="button"
                  className={`event-chip ${selectedEvent?.title === event.title && selectedEvent?.date === event.date ? 'is-active' : ''}`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <span className="event-chip-date">{event.date}</span>
                  <span className="event-chip-title">{event.title}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default App
