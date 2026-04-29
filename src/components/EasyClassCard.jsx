export function EasyClassCard({ course }) {
  return (
    <article className="item-card">
      <div className="card-topline">
        <span className={`rank-badge rank-${course.rank.toLowerCase()}`}>
          {course.rank}
        </span>
        <p className="item-tag">{course.category}</p>
      </div>
      <h3>{course.name}</h3>
      <p className="section-text">{course.summary}</p>
      <ul className="info-list">
        <li>担当: {course.professor}</li>
        <li>評価: {course.grading}</li>
        <li>出席: {course.attendance}</li>
      </ul>
    </article>
  )
}
