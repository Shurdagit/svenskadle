import Link from "next/link";
import Countdown from "./components/countdown";

const games = [
  {
    id: "tubdle",
    className: "card--tubdle",
    href: "https://tubdle.se",
    icon: "🚇",
    label: "Dagligt ordspel",
    title: "Tubdle",
    description:
      "Kan du lista ut vilken tunnelbanestation som gömmer sig bakom ledtrådarna? En ny station att gissa varje dag – perfekt för dig som älskar Stockholms tunnelbana.",
    cta: "Spela idag",
  },
  {
    id: "glosdle",
    className: "card--glosdle",
    href: "https://glosdle.svenskadle.se",
    icon: "📖",
    label: "Dagligt ordspel",
    title: "Glosdle",
    description:
      "Gissa dagens svenska ord på sex försök. Varje gissning avslöjar om bokstäverna är rätt placerade – ett knepigt ordspel som utmanar ditt ordförråd.",
    cta: "Gissa ordet",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <h1 className="header-title">Svenska dle spel</h1>
        <p className="header-sub">
          Nya stationer, ord och allt möjligt varje dag!
        </p>
      </header>

      <div className="cards">
        {games.map((game) => (
          <Link
            key={game.id}
            href={game.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`card ${game.className}`}
          >
            <div className="card-stripe" />
            <div className="card-inner">
              <div className="card-icon-wrap">{game.icon}</div>
              <div>
                <p className="card-label">{game.label}</p>
                <h2 className="card-title">{game.title}</h2>
              </div>
              <p className="card-desc">{game.description}</p>
              <div className="card-cta">
                <span>{game.cta}</span>
                <span className="cta-arrow">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Countdown />

    </main>
  );
}