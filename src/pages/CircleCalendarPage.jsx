import { useMemo, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { circleEvents } from '../data/circleEvents.js'

export function CircleCalendarPage() {
  const [selectedEvent, setSelectedEvent] = useState(circleEvents[0] ?? null)

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

  const formatRange = (start, end) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const dateTimeFormatter = new Intl.DateTimeFormat('ja-JP', {
      month: 'numeric',
      day: 'numeric',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
    })
    const timeFormatter = new Intl.DateTimeFormat('ja-JP', {
      hour: '2-digit',
      minute: '2-digit',
    })

    if (startDate.toDateString() === endDate.toDateString()) {
      return `${dateTimeFormatter.format(startDate)} - ${timeFormatter.format(endDate)}`
    }

    return `${dateTimeFormatter.format(startDate)} - ${dateTimeFormatter.format(endDate)}`
  }

  return (
    <div className="page circle-calendar-page">
      <section className="card calendar-card">
        <div className="card-header-row">
          <div>
            <p className="section-label">CALENDAR</p>
            <h3>イベント一覧</h3>
          </div>
          <p className="section-text">イベントをクリックすると下の詳細が切り替わります。</p>
        </div>

        <div className="calendar-frame">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            height="auto"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
            }}
            events={calendarEvents}
            dayMaxEvents
            navLinks
            eventClick={(info) => {
              info.jsEvent.preventDefault()
              setSelectedEvent(info.event.extendedProps)
            }}
            eventContent={(arg) => (
              <div className="calendar-event">
                <div className="calendar-event-title">{arg.event.title}</div>
                <div className="calendar-event-meta">{arg.timeText}</div>
              </div>
            )}
          />
        </div>
      </section>

      <aside className="card detail-card">
        <p className="section-label">DETAIL</p>
        <h3>選択中のイベント</h3>

        {selectedEvent ? (
          <div className="detail-panel">
            <p className="detail-date">{selectedEvent.date}</p>
            <h4>{selectedEvent.title}</h4>
            <p className="section-text">{selectedEvent.description}</p>

            <dl className="detail-list">
              <div>
                <dt>開催時間</dt>
                <dd>{formatRange(selectedEvent.start, selectedEvent.end)}</dd>
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
          </div>
        ) : null}

        <div className="event-list-block">
          <h4>イベント一覧</h4>
          <div className="simple-list">
            {circleEvents.map((event) => (
              <button
                key={`${event.date}-${event.title}`}
                type="button"
                className={`event-chip ${selectedEvent?.title === event.title && selectedEvent?.date === event.date ? 'event-chip-active' : ''}`}
                onClick={() => setSelectedEvent(event)}
              >
                <span className="event-chip-date">{event.date}</span>
                <span className="event-chip-title">{event.title}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
