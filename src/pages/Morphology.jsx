function Morphology() {
  return (
    <main className="container px-4 py-4">
      <article>
        <section>
          <h3 className="h3 text-success">Зовнішній вигляд</h3>
          <p>Зебри - африканські кінні ссавці з такими характерними особливостями, як чорні та білі смуги. Їх поділяють на три основні види: звичайний, гірський і Греві.</p>
        </section>
        <section>
          <h3 className="h3 text-success">Особливості будови</h3>
          <ul>
            <li>Довжина тіла 2-2.6м, висота 1.2-1.5м, вага 204-372 кг.</li>
            <li>Смуги зебри виконують функції маскування та терморегуляції.</li>
            <li>Вид рівнинної зебри гірська зебра відрізняється ширшими чорними смугами та вужчими білими проміжками, через що вона здається темнішою. «Тіньові смуги» в рівнинної зебри відсутні.</li>
          </ul>
        </section>
        <figure className="text-center">
          <img src="https://s3.animalia.bio/animals/photos/full/1.25x1/1200px-karoo-national-park-2014-35jpg.webp?id=17ac6f4d49855a67e2550d99ddd46f2d" alt="Гірська зебра" className="img-fluid rounded my-4"/>
          <figcaption className="text-muted">Гірська зебра</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Morphology;