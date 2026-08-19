import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <Hero />

      <section id="escuta" className="shell py-24 md:py-40">
        <p className="eyebrow">Quando algo insiste</p>
        <div className="mt-10 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <p className="display text-4xl leading-tight tracking-[-0.03em] md:text-6xl">
            Nem toda repetição é coincidência.
          </p>
          <div className="max-w-2xl space-y-6 text-base leading-7 text-white/65 md:text-lg">
            <p>
              Algumas experiências voltam com novas formas: relações que se parecem, conflitos que
              mudam de cenário, decisões que terminam no mesmo ponto.
            </p>
            <p>
              A psicanálise oferece um espaço para escutar essas repetições sem respostas prontas,
              buscando compreender o que elas revelam sobre a própria história.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-white/[0.025]">
        <div className="shell grid gap-8 py-16 md:grid-cols-3 md:py-24">
          {[
            ["01", "Escuta", "Um espaço sem pressa para aquilo que ainda não encontrou palavras."],
            ["02", "Elaboração", "Perceber padrões, conflitos e sentidos que se repetem na própria história."],
            ["03", "Movimento", "Criar novas possibilidades onde antes parecia existir apenas repetição."],
          ].map(([number, title, body]) => (
            <article key={number} className="border-t hairline pt-6">
              <span className="eyebrow">{number}</span>
              <h2 className="display mt-8 text-3xl">{title}</h2>
              <p className="mt-5 max-w-sm leading-7 text-white/60">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
