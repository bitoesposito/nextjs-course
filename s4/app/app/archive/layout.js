export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>Archive Page</h1>
      <section id="archive-filter">
        {archive}
      </section>
      <h1>Latest News Page</h1>
      <section id="archive-latest">
        {latest}
      </section>
    </div>
  )
}