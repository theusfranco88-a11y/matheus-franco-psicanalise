import Image from "next/image";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";

const steps = [
  ["01", "Escuta", "Um espaço sem pressa para aquilo que ainda não encontrou palavras."],
  ["02", "Elaboração", "Perceber padrões, conflitos e sentidos que se repetem na própria história."],
  ["03", "Movimento", "Criar novas possibilidades onde antes parecia existir apenas repetição."],
];

const trajectory = [
  {
    label: "Psicanálise Clínica",
    title: "Escutar além do que é dito.",
    body:
      "Minha prática parte da escuta clínica e da compreensão de que sintomas, repetições e conflitos podem carregar sentidos que ainda não foram elaborados.",
  },
  {
    label: "Vivência hospitalar",
    title: "Contato com a fragilidade humana.",
    body:
      "A experiência em ambientes hospitalares ampliou meu olhar para o cuidado, para o limite e para aquilo que muitas vezes aparece quando a vida exige respostas rápidas demais.",
  },
  {
    label: "Formação em Enfermagem",
    title: "Corpo, contexto e cuidado.",
    body:
      "A formação acadêmica em Enfermagem acrescenta uma leitura mais ampla do sujeito, sem reduzir o sofrimento psíquico a uma única dimensão.",
  },
];

const questions = [
  [
    "Preciso estar em crise para começar?",
    "Não. A análise também pode começar quando existe a sensação de repetição, incômodo, dúvida, conflito ou desejo de compreender melhor a própria história.",
  ],
  [
    "Como funciona o primeiro contato?",
    "O primeiro passo é uma conversa breve para entender sua demanda, explicar como funciona o atendimento e verificar se faz sentido iniciarmos um processo juntos.",
  ],
  [
    "O atendimento pode ser online?",
    "Sim. A proposta do site prevê atendimento online, com organização, privacidade e um espaço de escuta estruturado para a sessão.",
  ],
];

export default function Home() {
  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <Hero />

      <section id="escuta" className="shell py-24 md:py-40">
        <Reveal>
          <p className="eyebrow">Quando algo insiste</p>
        </Reveal>
        <div className="mt-10 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal delay={0.05}>
            <p className="display text-4xl leading-tight tracking-[-0.03em] md:text-6xl">
              Nem toda repetição é coincidência.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
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
          </Reveal>
        </div>
      </section>

      <section className="relative min-h-[62vh] overflow-hidden border-y hairline">
        <Image
          src="/images/Gemini_Generated_Image_56u9tu56u9tu56u9.jpeg"
          alt="Corredor arquitetônico em perspectiva, evocando repetição e caminhos"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.74),rgba(5,5,5,0.18)_52%,rgba(5,5,5,0.54))]" />
        <div className="shell relative z-10 flex min-h-[62vh] items-center py-20">
          <Reveal>
            <blockquote className="display max-w-3xl text-4xl leading-[1.02] tracking-[-0.035em] md:text-6xl">
              Você muda o cenário. Algumas histórias, porém, continuam encontrando o mesmo caminho.
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="border-y hairline bg-white/[0.025]">
        <div className="shell grid gap-8 py-16 md:grid-cols-3 md:py-24">
          {steps.map(([number, title, body], index) => (
            <Reveal key={number} delay={index * 0.08}>
              <article className="border-t hairline pt-6">
                <span className="eyebrow">{number}</span>
                <h2 className="display mt-8 text-3xl">{title}</h2>
                <p className="mt-5 max-w-sm leading-7 text-white/60">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell py-24 md:py-40">
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div>
              <p className="eyebrow">Trajetória</p>
              <h2 className="display mt-8 max-w-4xl text-4xl leading-[0.98] tracking-[-0.035em] md:text-6xl">
                Entre a escuta clínica, o hospital e a formação em saúde, existe uma mesma pergunta:
                o que essa experiência está tentando dizer?
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                Meu percurso profissional não é apresentado como coleção de títulos, mas como parte do
                modo como compreendo cuidado, vulnerabilidade, repetição e elaboração.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="relative min-h-[500px] overflow-hidden border hairline md:min-h-[620px]">
              <Image
                src="/images/Gemini_Generated_Image_34ersm34ersm34er.jpeg"
                alt="Matheus Franco sentado em ambiente de escuta"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,5,0.84),transparent_56%)]" />
              <figcaption className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <span className="eyebrow">Presença e escuta</span>
                <p className="display mt-4 max-w-md text-4xl leading-none md:text-5xl">Matheus Franco</p>
                <p className="mt-5 max-w-md leading-7 text-white/68">
                  Psicanalista Clínico · Acadêmico de Enfermagem · experiência em ambientes hospitalares.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {trajectory.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <article className="border-t hairline py-7 md:py-9">
                <p className="eyebrow">{item.label}</p>
                <h3 className="display mt-6 text-3xl leading-tight">{item.title}</h3>
                <p className="mt-5 leading-7 text-white/55">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <figure className="relative min-h-[420px] overflow-hidden border hairline">
              <Image
                src="/images/Gemini_Generated_Image_r6pkawr6pkawr6pk.jpeg"
                alt="Vivência em ambiente hospitalar"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,5,0.76),transparent_54%)]" />
              <figcaption className="absolute bottom-0 p-7">
                <p className="eyebrow">Vivência hospitalar</p>
                <p className="display mt-3 text-3xl">Cuidado também se aprende diante do limite.</p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.08}>
            <figure className="relative min-h-[420px] overflow-hidden border hairline">
              <Image
                src="/images/Gemini_Generated_Image_kn07jkn07jkn07jk.jpeg"
                alt="Matheus Franco em ambiente de estudo"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,5,0.76),transparent_54%)]" />
              <figcaption className="absolute bottom-0 p-7">
                <p className="eyebrow">Formação contínua</p>
                <p className="display mt-3 text-3xl">Escuta, estudo e responsabilidade clínica.</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y hairline bg-white/[0.025]">
        <div className="shell grid gap-14 py-24 md:grid-cols-[0.82fr_1.18fr] md:py-36">
          <Reveal>
            <div className="relative min-h-[430px] overflow-hidden border hairline md:min-h-[560px]">
              <Image
                src="/images/Gemini_Generated_Image_i3npjki3npjki3np.jpeg"
                alt="Poltrona em ambiente reservado de escuta"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,5,0.58),transparent_58%)]" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex max-w-2xl flex-col justify-center">
              <p className="eyebrow">Para quem chega até aqui</p>
              <h2 className="display mt-8 text-4xl leading-tight md:text-6xl">
                Talvez você não precise de mais uma resposta pronta.
              </h2>
              <div className="mt-8 space-y-7 text-lg leading-8 text-white/62">
                <p>
                  Talvez precise de um lugar onde aquilo que se repete possa finalmente ser ouvido com
                  tempo suficiente para ganhar outro sentido.
                </p>
                <p>
                  O atendimento não parte da promessa de uma solução instantânea. Parte da construção de
                  um espaço de escuta, responsabilidade e elaboração.
                </p>
              </div>
              <a
                href="https://wa.me/5562991507896"
                className="mt-10 inline-flex w-fit items-center gap-3 border border-white/20 px-6 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:border-white/45 hover:bg-white/[0.04]"
              >
                Conversar sobre atendimento
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-24 md:py-36">
        <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <div>
              <p className="eyebrow">Antes de começar</p>
              <h2 className="display mt-8 text-4xl md:text-5xl">Algumas perguntas costumam aparecer.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {questions.map(([question, answer]) => (
                <details key={question} className="group py-7">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-lg text-white/88">
                    <span>{question}</span>
                    <span className="text-white/35 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-2xl pt-5 leading-7 text-white/55">{answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
 <section id="credenciais" className="border-t hairline">
        <div className="shell py-24 md:py-36">
          <Reveal>
            <div className="mb-12 md:mb-16">
              <p className="sobrancelha">Formação & Credenciais</p>

              <h2 className="mt-4 max-w-3xl text-4xl leading-tight text-white md:text-6xl">
                Formação que sustenta uma escuta responsável.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
                Formação em Psicanálise Clínica pela FACOP — Faculdade do
                Centro Oeste Paulista, concluída em 2025, com carga horária
                total de 116 horas.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden border border-white/10 bg-white/[0.02]">
     <img
  src="/imagens/ChatGPT Imagem 20 de ago. de 2026, 09_53_39.png"
  alt="Formação em Psicanálise Clínica de Matheus Franco"
  className="h-auto w-full object-cover"
/>
                alt="Formação em Psicanálise Clínica de Matheus Franco"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
              <p>Psicanálise Clínica · FACOP</p>
              <p>Formação concluída em 2025 · 116 horas</p>
            </div>
          </Reveal>
        </div>
      </section>
"



      
      <footer className="border-t hairline">
        <div className="shell flex flex-col gap-8 py-10 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>Matheus Franco · Psicanálise Clínica</p>
          <p>O que não é dito… retorna.</p>
        </div>
      </footer>
    </main>
  );
}
