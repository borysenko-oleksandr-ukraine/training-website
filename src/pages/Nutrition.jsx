function Nutrition() {
  return (
    <main className="container px-4 py-4 flex-grow-1">
      <section>
        <h2 className="h2 text-success mb-4">Харчування зебр</h2>
        <p>Зебри є травоїдними тваринами. Їх раціон включає:</p>
        <ul className="list-group">
          <li className="list-group-item">Трави — основна частина раціону, особливо злаки (наприклад, види ковили, тонконогу).</li>
          <li className="list-group-item">Листя чагарників і дерев — у сухий сезон або в періоди нестачі трави.</li>
          <li className="list-group-item">Кора, гілки, коріння — дуже рідко, тільки в екстремальних умовах.</li>
          <li className="list-group-item">Сукуленти (соковиті рослини) — джерело вологи в посушливих регіонах.</li>
        </ul>
      </section>
    </main>
  );
}

export default Nutrition;