import { Hero } from "@/components/hero";

const journey = [
  {
    year: "01",
    label: "Escuta",
    title: "Aquilo que insiste merece ser escutado.",
    body: "Nem sempre o que se repete é evidente. Às vezes volta como relação, escolha, sintoma, silêncio ou sensação de estar sempre chegando ao mesmo lugar.",
  },
  {
    year: "02",
    label: "Elaboração",
    title: "Dar forma ao que antes só pesava.",
    body: "A análise não entrega respostas prontas. Ela cria condições para reconhecer sentidos, conflitos e marcas da própria história que continuam agindo no presente.",
  },
  {
    year: "03",
    label: "Movimento",
    title: "Quando compreender começa a mudar o caminho.",
    body: "Elaborar não apaga o passado. Mas pode abrir espaço para escolhas menos automáticas, relações menos repetitivas e novas possibilidades de existência.",
  },
];

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
          {journey.map((item) => (
            <article key={item.year} className="border-t hairline pt-6">
              <span className="eyebrow">{item.year}</span>
              <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/45">{item.label}</p>
              <h2 className="display mt-4 text-3xl leading-tight">{item.title}</h2>
              <p className="mt-5 max-w-sm leading-7 text-white/60">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell py-28 md:py-44">
        <div className="grid items-end gap-16 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow">Entre teoria e experiência humana</p>
            <h2 className="display mt-8 max-w-4xl text-5xl leading-[0.98] tracking-[-0.04em] md:text-7xl">
              Escutar alguém exige mais do que técnica.
            </h2>
          </div>
          <div className="max-w-xl space-y-5 text-base leading-7 text-white/62 md:text-lg">
            <p>
              Minha formação em Psicanálise Clínica se encontra com uma trajetória construída também
              dentro da saúde, em contextos hospitalares e acadêmicos que me aproximaram de histórias
              marcadas por limite, espera, medo, cuidado e transformação.
            </p>
            <p>
              Não é sobre transformar a análise em medicina. É sobre reconhecer que sofrimento não
              acontece no vazio: ele atravessa corpo, vínculos, trabalho, fé, escolhas e história.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-white/[0.02]">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Psicanálise Clínica", "Formação voltada à escuta, elaboração e compreensão do sujeito para além do sintoma aparente."],
              ["Vivência hospitalar", "Experiência em ambientes de alta complexidade, onde a dimensão humana aparece sem filtros."],
              ["Formação em saúde", "Trajetória acadêmica que amplia o olhar sobre cuidado, vulnerabilidade e contexto de vida."],
            ].map(([title, body]) => (
              <article key={title} className="min-h-64 border hairline p-7 md:p-8">
                <p className="eyebrow">Trajetória</p>
                <h3 className="display mt-10 text-3xl">{title}</h3>
                <p className="mt-5 max-w-sm leading-7 text-white/58">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-28 md:py-44">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="aspect-[4/5] border hairline bg-[radial-gradient(circle_at_30%_20%,rgba(173,123,79,0.18),transparent_35%),linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-8">
            <div className="flex h-full flex-col justify-between">
              <span className="eyebrow">Imagem de autoridade</span>
              <div>
                <p className="display text-4xl leading-tight text-white/80">Matheus Franco</p>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/40">Psicanálise • saúde • escuta</p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">Não é sobre ter todas as respostas</p>
            <h2 className="display mt-8 text-5xl leading-[1] tracking-[-0.04em] md:text-7xl">
              É sobre criar um lugar onde a pergunta certa possa finalmente aparecer.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62">
              A análise começa quando a pessoa encontra um espaço em que não precisa performar força,
              justificar cada sentimento ou organizar tudo antes de falar.
            </p>
          </div>
        </div>
      </section>

      <section id="atendimento" className="border-t hairline bg-[#12110f]">
        <div className="shell py-24 md:py-36">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow">Atendimento</p>
              <h2 className="display mt-8 max-w-4xl text-5xl leading-[0.98] tracking-[-0.04em] md:text-7xl">
                Talvez você não precise continuar entendendo tudo sozinho.
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                Atendimento psicanalítico com escuta individualizada, respeito ao tempo de cada pessoa
                e espaço para aquilo que ainda não encontrou forma de ser dito.
              </p>
            </div>
            <a
              href="https://wa.me/5562991507896"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center border hairline px-7 text-sm uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
            >
              Iniciar conversa
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
