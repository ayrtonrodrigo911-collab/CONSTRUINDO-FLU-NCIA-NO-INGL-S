import LeadForm from "@/components/lead-form";
import EmotionalCTA from "@/components/emotional-cta";
import ScrollEffects from "@/components/scroll-effects";
import { Sparkles, Calendar, BookOpen, Volume2, Flame } from "lucide-react";

function Brand() {
  return (
    <a aria-label="Construindo Fluência no Inglês, início" className="brand" href="#inicio">
      <span className="brand-top">CONSTRUINDO</span>
      <span className="brand-main">FLUÊNCIA</span>
      <span className="brand-bottom">NO INGLÊS</span>
      <div className="brand-byline-wrap">
        <span className="brand-line" />
        <span className="brand-byline">COM GABI MODESTO</span>
        <span className="brand-line" />
      </div>
    </a>
  );
}

function Hero() {
  return (
    <header className="hero" id="inicio">
      <div aria-hidden="true" className="hero-flag-background" />
      <div className="hero-inner section-wrap">
        <div className="hero-copy animate-fade-in-up">
          <Brand />
          
          <h1 className="hero-headline">
            APRENDA O INGLÊS QUE É{" "}
            <span className="text-red-highlight">REALMENTE USADO NA VIDA</span>{" "}
            REAL E SE TORNE FLUENTE
          </h1>

          <div className="hero-dates">
            <span className="hero-date-text">14 A 20 DE JUNHO</span>
          </div>

          <div className="hero-badge-wrap">
            <span className="hero-badge animate-pulse-subtle">
              AULÃO 100% ONLINE E GRATUITAS!
            </span>
          </div>

          <LeadForm />
        </div>

        <div aria-hidden="true" className="hero-photo-wrap">
          <img
            alt="Professora Gabi Modesto com a bandeira dos Estados Unidos ao fundo"
            className="hero-photo"
            fetchPriority="high"
            src="/img/hero-principal.png"
          />
        </div>
      </div>

      {/* Torn paper edge at the bottom */}
      <svg
        aria-hidden="true"
        className="hero-torn-edge"
        preserveAspectRatio="none"
        viewBox="0 0 1440 90"
      >
        <path
          className="hero-torn-default"
          d="M0 36 L20 42 L38 38 L55 51 L76 45 L94 58 L111 52 L128 66 L147 60 L166 72 L184 66 L202 79 L221 73 L240 84 L260 78 L279 88 L299 82 L319 90 L340 84 L360 90 L382 82 L402 89 L423 80 L443 87 L465 78 L485 84 L506 74 L528 82 L549 71 L570 79 L591 69 L612 77 L634 65 L656 73 L678 62 L700 71 L722 58 L745 67 L768 55 L791 63 L814 51 L838 60 L861 48 L884 57 L908 45 L931 54 L955 42 L980 51 L1004 39 L1028 48 L1053 37 L1078 46 L1103 35 L1128 44 L1153 33 L1178 42 L1203 31 L1228 40 L1254 29 L1280 38 L1306 27 L1332 36 L1358 25 L1384 33 L1410 22 L1440 30 L1440 90 L0 90 Z"
          fill="white"
        />
        <path
          className="hero-torn-large"
          d="M0 8 L18 12 L36 9 L54 16 L72 14 L90 20 L108 18 L126 24 L144 22 L162 29 L180 26 L198 34 L216 31 L234 39 L252 36 L270 44 L288 41 L306 49 L324 46 L342 54 L360 51 L378 59 L396 55 L414 63 L432 60 L450 67 L468 63 L486 70 L504 66 L522 73 L540 69 L558 75 L576 71 L594 77 L612 73 L630 79 L648 75 L666 81 L684 77 L702 82 L720 78 L738 82 L756 78 L774 81 L792 77 L810 80 L828 76 L846 79 L864 75 L882 78 L900 74 L918 77 L936 73 L954 76 L972 72 L990 74 L1008 70 L1026 73 L1044 69 L1062 72 L1080 68 L1098 71 L1116 67 L1134 70 L1152 66 L1170 69 L1188 65 L1206 68 L1224 64 L1242 67 L1260 63 L1278 66 L1296 62 L1314 65 L1332 61 L1350 64 L1368 60 L1386 63 L1404 59 L1422 62 L1440 60 L1440 90 L0 90 Z"
          fill="white"
        />
      </svg>
    </header>
  );
}

const audience = [
  {
    text: (
      <>
        Quer se tornar fluente, mas <strong>nunca estudou inglês.</strong>
      </>
    ),
    tag: "Iniciantes",
  },
  {
    text: (
      <>
        Já estudou inglês, até consegue ler, mas <strong>trava na hora de ouvir e falar.</strong>
      </>
    ),
    tag: "Intermediários",
  },
  {
    text: (
      <>
        Tem o sonho de falar inglês <strong>fluentemente com confiança.</strong>
      </>
    ),
    tag: "Sonho da Fluência",
  },
];

function TargetAudience() {
  return (
    <section aria-labelledby="audiencia-title" className="section-wrap audience-section">
      <div className="section-header-wrap">
        <h2 className="section-heading" id="audiencia-title">
          ESSE EVENTO É PARA VOCÊ QUE:
        </h2>
        <div className="section-heading-underline" />
      </div>

      <div className="audience-grid">
        {audience.map(({ text, tag }, index) => (
          <article className="audience-item group" key={index}>
            <div className="audience-number-wrap">
              <span className="audience-number">{index + 1}</span>
            </div>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const lessons = [
  {
    title: "As 5 principais armadilhas",
    text: "Quais são e como evitar as 5 principais armadilhas que te impedem de conquistar a tão sonhada fluência.",
    image: "/img/conteudo-armadilhas.png",
    alt: "As 5 principais armadilhas para a fluência no inglês",
  },
  {
    title: "A Técnica Secreta",
    text: "Para entender o inglês falado por nativos e acabar com a sensação de que “eles falam rápido demais”.",
    image: "/img/conteudo-tecnica.png",
    alt: "A técnica secreta para entender o inglês falado por nativos",
  },
  {
    title: "O Método na prática",
    text: "Para limpar a pronúncia e começar a falar o inglês que realmente é usado no dia a dia.",
    image: "/img/conteudo-metodo.png",
    alt: "O método prático para destravar a fala e pronúncia natural",
  },
];

function Features() {
  return (
    <section aria-labelledby="conteudo-title" className="features-section" id="conteudo">
      <div className="section-wrap">
        <div className="section-header-wrap">
          <h2 className="section-heading" id="conteudo-title">
            O QUE VOCÊ VAI ENCONTRAR NO E-BOOK:
          </h2>
          <div className="section-heading-underline" />
        </div>

        <div className="features-grid">
          {lessons.map(({ title, text, image, alt }, idx) => (
            <article className="feature-card group" key={title}>
              <div className="feature-image-container">
                <img
                  alt={alt}
                  className="feature-image"
                  loading="lazy"
                  src={image}
                />
                <div className="feature-image-overlay" />
              </div>
              <div className="feature-copy">
                <h3 className="feature-title">{title}</h3>
                <p className="feature-text">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bio() {
  return (
    <section aria-labelledby="professora-title" className="bio-section section-wrap">
      <div className="bio-photo-wrap">
        <div className="bio-photo-backdrop" />
        <img
          alt="Professora Gabi Modesto sorrindo"
          className="bio-photo"
          loading="lazy"
          src="/img/professora-gabi.png"
        />
      </div>
      <div className="bio-copy">
        <h2 id="professora-title">CONHEÇA SUA PROFESSORA</h2>
        <p className="bio-name">GABI MODESTO</p>
        <p>
          Professora de inglês há mais de 7 anos, apaixonada por ensinar e descomplicar o inglês que é realmente usado no dia a dia.
        </p>
        <p>
          Acredita que o caminho para conquistar a fluência não precisa ser maçante, longo e complicado, com horas em métodos tradicionais.
        </p>
        <p>
          Gabi é muito criativa, divertida e dinâmica, sempre buscando formas e técnicas completamente diferentes do convencional para ajudar seus alunos a conseguirem finalmente entender e falar inglês com confiança.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="#inicio" className="hover:underline">
          Política de Privacidade
        </a>
        <span>|</span>
        <a href="#inicio" className="hover:underline">
          Termos de Uso e Condições
        </a>
      </div>
      <p className="footer-copyright">
        Direcompila Cursos do Brasil | Sede: Copyright © 2026 | Todos os Direitos Reservados | CNPJ: 35.736.637/0001-20
      </p>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <>
      <ScrollEffects />
      <Hero />
      <TargetAudience />
      <Features />
      <EmotionalCTA />
      <Bio />
      <Footer />
    </>
  );
}
