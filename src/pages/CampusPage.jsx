import { EasyClassCard } from '../components/EasyClassCard.jsx'
import { easyClassSections } from '../data/easyClasses.js'
import { easyClassTemplate } from '../data/easyClasses.js'
import { teacherTiers } from '../data/teacherTiers.js'

export function CampusPage() {
  return (
    <div className="page">
      <section className="card">
        <p className="section-label">CAMPUS</p>
        <h2>楽単一覧と先生Tier表一覧</h2>
      </section>
      <section className="card">
        <p className="section-label">EXAMPLE</p>
        <h2>まずはこの1枚を見本にする</h2>
        <p className="section-text">
          このカードの形を固定しておけば、あとは <code>easyClasses.js</code>{' '}
          の各ランクの <code>courses</code> に同じ項目を追加するだけで一覧を増やせます。
        </p>

        <div className="grid">
          <EasyClassCard course={easyClassTemplate} />
        </div>
      </section>

      <section className="card">
        <p className="section-label">LIST</p>
        <h2>S,A,B,C,D に分けた楽単一覧</h2>
        <p className="section-text">
          見本と同じコンポーネントを使っています。授業を追加するときは、入れたいランクの
          <code>courses</code> 配列に1件足してください。
        </p>

        <div className="rank-section-list">
          {easyClassSections.map((section) => (
            <section key={section.rank} className="rank-section">
              <div className="rank-section-header">
                <div>
                  <p className="section-label">RANK {section.rank}</p>
                  <h3>
                    {section.rank}: {section.title}
                  </h3>
                </div>
                <p className="section-text">{section.description}</p>
              </div>

              {section.courses.length > 0 ? (
                <div className="grid">
                  {section.courses.map((course) => (
                    <EasyClassCard
                      key={`${section.rank}-${course.name}`}
                      course={course}
                    />
                  ))}
                </div>
              ) : (
                <div className="empty-box">
                  <p className="section-text">
                    まだ授業はありません。<code>easyClasses.js</code> の
                    <code>{` rank: '${section.rank}' `}</code> の
                    <code>courses</code> にテンプレートを追加してください。
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>
      </section>

      <section className="card">
        <p className="section-label">TEACHER TIER</p>
        <h2>先生Tier表</h2>
        <p className="section-text">
          こちらも同じく配列を回して表示しています。Tierごとに分けるだけなので複雑な設計は要りません。
        </p>

        <div className="grid">
          {teacherTiers.map((tier) => (
            <article key={tier.label} className="item-card">
              <h3>
                {tier.label} Tier: {tier.title}
              </h3>
              <p className="section-text">{tier.description}</p>
              <ul className="info-list">
                {tier.teachers.map((teacher) => (
                  <li key={teacher.name}>
                    {teacher.name}: {teacher.note}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
