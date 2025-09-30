import './App.css'

function App() {
  return (
    <div className="app">
      {/* Hero Section - Header con Promesa Directa */}
      <section className="hero">
        <nav className="navbar">
          <div className="nav-container">
            <h2 className="logo">🤖 IA Solutions</h2>
            <div className="nav-links">
              <a href="#inicio">Inicio</a>
              <a href="#servicios">Servicios</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">
            Convierte tus datos en dinero con<br />
            <span className="gradient-text">IA aplicada a tu negocio</span>
          </h1>
          <p className="hero-description">
            Implementamos inteligencia artificial y procesos de data que reducen costos, 
            aceleran decisiones y multiplican tus ingresos.
          </p>
          <div className="hero-buttons">
            <a href="#contacto" className="btn btn-primary">Agenda tu demo gratuita</a>
          </div>
        </div>
      </section>

      {/* Authority Section - Sección de Autoridad */}
      <section className="authority">
        <div className="container">
          <div className="authority-content">
            <div className="authority-photo">
              <div className="profile-image">👨‍💼</div>
            </div>
            <div className="authority-text">
              <h2>Rafael Muñoz González</h2>
              <p className="authority-description">
                Más de 15 proyectos implementados en empresas de tecnología, retail y servicios. 
                Especialista en transformar datos en resultados de negocio.
              </p>
              <div className="authority-logos">
                <span className="client-badge">🏢 Fortune 500</span>
                <span className="client-badge">🎓 Certificado IA</span>
                <span className="client-badge">📊 Data Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - El Problema */}
      <section className="problem">
        <div className="container">
          <h2 className="section-title">¿Te suena familiar?</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">⏱️</div>
              <h3>Decisiones Lentas</h3>
              <p>Las empresas pierden millones en decisiones que toman semanas cuando podrían tomarse en horas.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📉</div>
              <h3>Datos Sin Usar</h3>
              <p>El 80% de los datos empresariales no se utilizan para impulsar el crecimiento del negocio.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🏃</div>
              <h3>Competencia Avanzada</h3>
              <p>Tus competidores ya están usando IA para optimizar costos y aumentar ingresos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - La Solución */}
      <section id="servicios" className="solution">
        <div className="container">
          <h2 className="section-title">Nuestra Solución = Tu Crecimiento</h2>
          <p className="solution-intro">
            Implementamos un proceso integral que convierte tus datos en ventaja competitiva:
          </p>
          <div className="solution-grid">
            <div className="solution-item">
              <div className="solution-number">01</div>
              <h3>Auditoría de procesos de datos</h3>
              <p>Identificamos oportunidades ocultas en tu información actual y procesos que drenan recursos.</p>
            </div>
            <div className="solution-item">
              <div className="solution-number">02</div>
              <h3>Implementación de modelos de IA</h3>
              <p>Desarrollamos e integramos soluciones de inteligencia artificial adaptadas específicamente a tu negocio.</p>
            </div>
            <div className="solution-item">
              <div className="solution-number">03</div>
              <h3>Optimización continua</h3>
              <p>Ajustamos y mejoramos los sistemas para maximizar tu rentabilidad mes a mes.</p>
            </div>
          </div>
          <div className="solution-cta">
            <a href="#contacto" className="btn btn-primary">Solicita una consultoría gratis</a>
          </div>
        </div>
      </section>

      {/* Real Cases Section - Casos Reales */}
      <section className="cases">
        <div className="container">
          <h2 className="section-title">Resultados Comprobados</h2>
          <div className="cases-grid">
            <div className="case-card">
              <div className="case-metric">-30%</div>
              <h3>Reducción de Costos en Logística</h3>
              <p>
                Implementamos IA predictiva en una empresa de distribución, optimizando rutas 
                y tiempos de entrega. Resultado: 30% menos en costos operativos en 6 meses.
              </p>
              <div className="case-tag">🚚 Logística & Distribución</div>
            </div>
            <div className="case-card">
              <div className="case-metric">200h</div>
              <h3>Ahorro Mensual en Reportes</h3>
              <p>
                Automatizamos el proceso completo de reportería para una empresa de retail, 
                liberando a su equipo para enfocarse en análisis estratégico.
              </p>
              <div className="case-tag">🛍️ Retail & Comercio</div>
            </div>
            <div className="case-card">
              <div className="case-metric">+45%</div>
              <h3>Aumento en Conversión de Ventas</h3>
              <p>
                Sistema de recomendación inteligente que personaliza ofertas según el comportamiento 
                del cliente, incrementando significativamente las conversiones.
              </p>
              <div className="case-tag">💼 E-commerce</div>
            </div>
          </div>
        </div>
      </section>

      {/* Irresistible Offer Section - Oferta Irresistible */}
      <section className="offer">
        <div className="container">
          <h2 className="section-title-white">Oferta Especial: Demo + Diagnóstico Gratuito</h2>
          <p className="offer-description">
            Agenda tu demo gratuita y recibe un diagnóstico completo de tu sistema de datos en 48h. 
            <strong> Sin compromiso.</strong>
          </p>
          <div className="offer-benefits">
            <div className="offer-benefit">
              <span className="offer-icon">✓</span>
              <span>Análisis de oportunidades de IA en tu negocio</span>
            </div>
            <div className="offer-benefit">
              <span className="offer-icon">✓</span>
              <span>Roadmap personalizado de implementación</span>
            </div>
            <div className="offer-benefit">
              <span className="offer-icon">✓</span>
              <span>Estimación de ROI en 90 días</span>
            </div>
          </div>
          <p className="offer-bonus">
            <strong>BONUS:</strong> Si decides implementar, te damos un plan inicial con 30 días de soporte incluido.
          </p>
        </div>
      </section>

      {/* Final CTA Section - Cierre y CTA Final */}
      <section id="contacto" className="cta">
        <div className="container">
          <h2 className="cta-title">Tus datos ya tienen el poder de escalar tu negocio</h2>
          <p className="cta-description">
            Déjanos mostrártelo. Completa el formulario y agenda tu demo gratuita ahora.
          </p>
          <form className="cta-form">
            <input type="text" placeholder="Nombre completo" className="form-input" required />
            <input type="email" placeholder="Email corporativo" className="form-input" required />
            <input type="tel" placeholder="Teléfono" className="form-input" required />
            <input type="text" placeholder="Empresa" className="form-input" required />
            <button type="submit" className="btn btn-primary btn-large">Agendar Demo Gratuita</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 IA Solutions - Rafael Muñoz González. Transformamos datos en resultados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
