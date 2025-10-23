import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>IA Solutions - Convierte tus datos en dinero con IA</title>
        <meta name="description" content="Convierte tus datos en dinero. Implementamos IA que reduce costos, acelera decisiones y multiplica ingresos. Demo gratuita + diagnóstico en 48h." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="inteligencia artificial, IA, data science, análisis de datos, transformación digital, machine learning" />
        <meta property="og:title" content="IA Solutions - Convierte tus datos en dinero con IA" />
        <meta property="og:description" content="Implementamos inteligencia artificial que reduce costos, acelera decisiones y multiplica ingresos. Demo gratuita + diagnóstico en 48h." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IA Solutions - Convierte tus datos en dinero con IA" />
        <meta name="twitter:description" content="Implementamos IA que reduce costos, acelera decisiones y multiplica ingresos." />
      </Head>

      <div className={styles.app}>
        {/* Hero Section - Header con Promesa Directa */}
        <section className={styles.hero}>
          <nav className={styles.navbar}>
            <div className={styles.navContainer}>
              <h2 className={styles.logo}>🤖 RaMu IA Solutions</h2>
              <div className={styles.navLinks}>
                <a href="#inicio">Inicio</a>
                <a href="#servicios">Servicios</a>
                <a href="#contacto">Contacto</a>
              </div>
            </div>
          </nav>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Convierte tus datos en dinero con<br />
              <span className={styles.gradientText}>IA aplicada a tu negocio</span>
            </h1>
            <p className={styles.heroDescription}>
              Implementamos inteligencia artificial y procesos de data que reducen costos, 
              aceleran decisiones y multiplican tus ingresos.
            </p>
            <div className={styles.heroButtons}>
              <a href="#contacto" className={`${styles.btn} ${styles.btnPrimary}`}>Agenda tu demo gratuita</a>
            </div>
          </div>
        </section>

        {/* Authority Section - Sección de Autoridad */}
        <section className={styles.authority}>
          <div className={styles.container}>
            <div className={styles.authorityContent}>
              <div className={styles.authorityPhoto}>
                <div className={styles.profileImage}>👨‍💼</div>
              </div>
              <div className={styles.authorityText}>
                <h2>Rafael Muñoz González</h2>
                <p className={styles.authorityDescription}>
                  Más de 15 proyectos implementados en empresas de tecnología, retail y servicios. 
                  Especialista en transformar datos en resultados de negocio.
                </p>
                <div className={styles.authorityLogos}>
                  <span className={styles.clientBadge}>🏢 Fortune 500</span>
                  <span className={styles.clientBadge}>🎓 Certificado IA</span>
                  <span className={styles.clientBadge}>📊 Data Expert</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section - El Problema */}
        <section className={styles.problem}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>¿Te suena familiar?</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>⏱️</div>
                <h3>Decisiones Lentas</h3>
                <p>Las empresas pierden millones en decisiones que toman semanas cuando podrían tomarse en horas.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>📉</div>
                <h3>Datos Sin Usar</h3>
                <p>El 80% de los datos empresariales no se utilizan para impulsar el crecimiento del negocio.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🏃</div>
                <h3>Competencia Avanzada</h3>
                <p>Tus competidores ya están usando IA para optimizar costos y aumentar ingresos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section - La Solución */}
        <section id="servicios" className={styles.solution}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Nuestra Solución = Tu Crecimiento</h2>
            <p className={styles.solutionIntro}>
              Implementamos un proceso integral que convierte tus datos en ventaja competitiva:
            </p>
            <div className={styles.solutionGrid}>
              <div className={styles.solutionItem}>
                <div className={styles.solutionNumber}>01</div>
                <h3>Auditoría de procesos de datos</h3>
                <p>Identificamos oportunidades ocultas en tu información actual y procesos que drenan recursos.</p>
              </div>
              <div className={styles.solutionItem}>
                <div className={styles.solutionNumber}>02</div>
                <h3>Implementación de modelos de IA</h3>
                <p>Desarrollamos e integramos soluciones de inteligencia artificial adaptadas específicamente a tu negocio.</p>
              </div>
              <div className={styles.solutionItem}>
                <div className={styles.solutionNumber}>03</div>
                <h3>Optimización continua</h3>
                <p>Ajustamos y mejoramos los sistemas para maximizar tu rentabilidad mes a mes.</p>
              </div>
            </div>
            <div className={styles.solutionCta}>
              <a href="#contacto" className={`${styles.btn} ${styles.btnPrimary}`}>Solicita una consultoría gratis</a>
            </div>
          </div>
        </section>

        {/* Real Cases Section - Casos Reales */}
        <section className={styles.cases}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Resultados Comprobados</h2>
            <div className={styles.casesGrid}>
              <div className={styles.caseCard}>
                <div className={styles.caseMetric}>-30%</div>
                <h3>Reducción de Costos en Logística</h3>
                <p>
                  Implementamos IA predictiva en una empresa de distribución, optimizando rutas 
                  y tiempos de entrega. Resultado: 30% menos en costos operativos en 6 meses.
                </p>
                <div className={styles.caseTag}>🚚 Logística & Distribución</div>
              </div>
              <div className={styles.caseCard}>
                <div className={styles.caseMetric}>200h</div>
                <h3>Ahorro Mensual en Reportes</h3>
                <p>
                  Automatizamos el proceso completo de reportería para una empresa de retail, 
                  liberando a su equipo para enfocarse en análisis estratégico.
                </p>
                <div className={styles.caseTag}>🛍️ Retail & Comercio</div>
              </div>
              <div className={styles.caseCard}>
                <div className={styles.caseMetric}>+45%</div>
                <h3>Aumento en Conversión de Ventas</h3>
                <p>
                  Sistema de recomendación inteligente que personaliza ofertas según el comportamiento 
                  del cliente, incrementando significativamente las conversiones.
                </p>
                <div className={styles.caseTag}>💼 E-commerce</div>
              </div>
            </div>
          </div>
        </section>

        {/* Irresistible Offer Section - Oferta Irresistible */}
        <section className={styles.offer}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitleWhite}>Oferta Especial: Demo + Diagnóstico Gratuito</h2>
            <p className={styles.offerDescription}>
              Agenda tu demo gratuita y recibe un diagnóstico completo de tu sistema de datos en 48h. 
              <strong> Sin compromiso.</strong>
            </p>
            <div className={styles.offerBenefits}>
              <div className={styles.offerBenefit}>
                <span className={styles.offerIcon}>✓</span>
                <span>Análisis de oportunidades de IA en tu negocio</span>
              </div>
              <div className={styles.offerBenefit}>
                <span className={styles.offerIcon}>✓</span>
                <span>Roadmap personalizado de implementación</span>
              </div>
              <div className={styles.offerBenefit}>
                <span className={styles.offerIcon}>✓</span>
                <span>Estimación de ROI en 90 días</span>
              </div>
            </div>
            <p className={styles.offerBonus}>
              <strong>BONUS:</strong> Si decides implementar, te damos un plan inicial con 30 días de soporte incluido.
            </p>
          </div>
        </section>

        {/* Final CTA Section - Cierre y CTA Final */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Tus datos ya tienen el poder de escalar tu negocio</h2>
            <p className={styles.ctaDescription}>
              Déjanos mostrártelo. Completa el formulario y agenda tu demo gratuita ahora.
            </p>
            <form className={styles.ctaForm}>
              <input type="text" placeholder="Nombre completo" className={styles.formInput} required />
              <input type="email" placeholder="Email corporativo" className={styles.formInput} required />
              <input type="tel" placeholder="Teléfono" className={styles.formInput} required />
              <input type="text" placeholder="Empresa" className={styles.formInput} required />
              <button type="submit" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>Agendar Demo Gratuita</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.container}>
            <p>&copy; 2024 RaMu IA Solutions - Rafael Muñoz González. Transformamos datos en resultados.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
