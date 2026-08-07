const services = [
  {
    number: "01",
    title: "Diseño arquitectónico",
    description:
      "Conceptualización y desarrollo de propuestas arquitectónicas con una visión integral del espacio.",
  },
  {
    number: "02",
    title: "Planos arquitectónicos",
    description:
      "Desarrollo de plantas, cortes, elevaciones y documentación gráfica para proyectos arquitectónicos.",
  },
  {
    number: "03",
    title: "Modelado 3D",
    description:
      "Construcción digital de proyectos para estudiar volumen, materialidad, escala y espacialidad.",
  },
  {
    number: "04",
    title: "Renderización",
    description:
      "Visualizaciones arquitectónicas de alta calidad para comunicar la intención y atmósfera del proyecto.",
  },
];

const projectTypes = [
  "Casas",
  "Hoteles",
  "Restaurantes",
  "Centros comerciales",
  "Interiores",
  "Oficinas",
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <header className="ark-header">
        <a href="#" className="ark-logo">
          ARK<span>TETRA</span>
        </a>

        <nav className="ark-nav">
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="ark-header-button">
          Iniciar proyecto
        </a>
      </header>

      {/* HERO */}
      <section className="ark-hero">
        <div className="ark-hero-content">
          <p className="ark-eyebrow">ESTUDIO DE ARQUITECTURA</p>

          <h1>
            Espacios que
            <br />
            <span>trascienden.</span>
          </h1>

          <p className="ark-hero-description">
            Diseñamos arquitectura, desarrollamos espacios y construimos
            experiencias a través del diseño, el modelado 3D y la
            visualización arquitectónica.
          </p>

          <div className="ark-hero-actions">
            <a href="#proyectos" className="ark-button ark-button-primary">
              Explorar proyectos
            </a>

            <a href="#servicios" className="ark-button ark-button-secondary">
              Ver servicios
            </a>
          </div>
        </div>

        <div className="ark-hero-visual">
          <div className="ark-hero-grid" />

          <div className="ark-hero-frame">
            <span>ARK / 001</span>
            <span>ARCHITECTURE</span>
          </div>

          <div className="ark-hero-circle" />

          <div className="ark-hero-line" />
        </div>

        <div className="ark-hero-meta">
          <span>01</span>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* INTRO */}
      <section id="nosotros" className="ark-intro">
        <div className="ark-section-label">
          <span>01</span>
          <span>MANIFIESTO</span>
        </div>

        <div className="ark-intro-content">
          <p>
            En <strong>ARKTETRA</strong> entendemos la arquitectura como una
            combinación entre concepto, precisión y experiencia.
          </p>

          <p className="ark-intro-small">
            Desde la primera idea hasta la visualización final, integramos
            diseño arquitectónico, documentación, modelado tridimensional y
            renderización en un mismo proceso.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="proyectos" className="ark-projects">
        <div className="ark-section-heading">
          <div className="ark-section-label">
            <span>02</span>
            <span>ÁREAS DE PROYECTO</span>
          </div>

          <h2>
            Arquitectura
            <br />
            <em>sin límites.</em>
          </h2>
        </div>

        <div className="ark-project-grid">
          {projectTypes.map((project, index) => (
            <article className="ark-project-card" key={project}>
              <div className="ark-project-number">
                0{index + 1}
              </div>

              <div className="ark-project-visual">
                <div className="ark-project-shape" />
              </div>

              <div className="ark-project-info">
                <h3>{project}</h3>
                <span>Explorar →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="ark-services">
        <div className="ark-section-label">
          <span>03</span>
          <span>SERVICIOS</span>
        </div>

        <div className="ark-services-heading">
          <h2>
            Del concepto
            <br />
            <em>a la realidad.</em>
          </h2>

          <p>
            Un proceso integrado para desarrollar y comunicar proyectos
            arquitectónicos con claridad.
          </p>
        </div>

        <div className="ark-services-list">
          {services.map((service) => (
            <article className="ark-service" key={service.number}>
              <span>{service.number}</span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <span className="ark-service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="ark-contact">
        <p className="ark-eyebrow">NUEVO PROYECTO</p>

        <h2>
          Hagamos algo
          <br />
          <em>extraordinario.</em>
        </h2>

        <a href="mailto:contacto@arktetra.com" className="ark-button ark-button-light">
          Hablemos de tu proyecto
        </a>
      </section>

      {/* FOOTER */}
      <footer className="ark-footer">
        <div>
          <a href="#" className="ark-logo">
            ARK<span>TETRA</span>
          </a>
          <p>Arquitectura · 3D · Visualización</p>
        </div>

        <p>© 2026 ARKTETRA. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}