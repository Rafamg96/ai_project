import './App.css'

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <nav className="navbar">
          <div className="nav-container">
            <h2 className="logo">🤖 IA Solutions</h2>
            <div className="nav-links">
              <a href="#features">Características</a>
              <a href="#benefits">Beneficios</a>
              <a href="#cta">Contacto</a>
            </div>
          </div>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">
            Transforma tu Negocio con<br />
            <span className="gradient-text">Inteligencia Artificial</span>
          </h1>
          <p className="hero-description">
            Automatiza procesos, mejora la toma de decisiones y aumenta la productividad 
            con nuestras soluciones de IA personalizadas para tu empresa
          </p>
          <div className="hero-buttons">
            <a href="#cta" className="btn btn-primary">Comenzar Ahora</a>
            <a href="#features" className="btn btn-secondary">Ver Características</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Nuestras Soluciones</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Machine Learning</h3>
              <p>Modelos predictivos que aprenden de tus datos para optimizar decisiones y procesos empresariales</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Chatbots Inteligentes</h3>
              <p>Asistentes virtuales 24/7 que mejoran la experiencia del cliente y reducen costos operativos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Análisis de Datos</h3>
              <p>Insights accionables mediante análisis avanzado de datos para impulsar el crecimiento</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Automatización</h3>
              <p>Automatiza tareas repetitivas y libera a tu equipo para enfocarse en lo estratégico</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>IA Segura</h3>
              <p>Implementaciones con los más altos estándares de seguridad y privacidad de datos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Escalable</h3>
              <p>Soluciones que crecen con tu negocio, adaptándose a tus necesidades cambiantes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <div className="container">
          <h2 className="section-title">¿Por Qué Elegirnos?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>✓ Implementación Rápida</h3>
              <p>Soluciones listas en semanas, no meses</p>
            </div>
            <div className="benefit-item">
              <h3>✓ Soporte Experto</h3>
              <p>Equipo dedicado de científicos de datos e ingenieros de IA</p>
            </div>
            <div className="benefit-item">
              <h3>✓ ROI Comprobado</h3>
              <p>Nuestros clientes ven resultados medibles en 3 meses</p>
            </div>
            <div className="benefit-item">
              <h3>✓ Personalización Total</h3>
              <p>Soluciones adaptadas específicamente a tu industria y necesidades</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta">
        <div className="container">
          <h2 className="cta-title">¿Listo para Transformar tu Negocio?</h2>
          <p className="cta-description">
            Agenda una consulta gratuita y descubre cómo la IA puede revolucionar tu empresa
          </p>
          <form className="cta-form">
            <input type="email" placeholder="Tu correo electrónico" className="email-input" />
            <button type="submit" className="btn btn-primary">Contactar</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 IA Solutions. Transformando el futuro con inteligencia artificial.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
