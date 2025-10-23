# IA Solutions - Landing Page

Landing page de ventas tipo "Money Model" para soluciones de Inteligencia Artificial, construida con **Next.js** y desplegada en GitHub Pages con generación estática de sitios (SSG) para SEO optimizado.

## 🚀 Características

- **Next.js 16**: Framework React con renderizado estático para mejor SEO
- **Static Site Generation (SSG)**: HTML pre-renderizado en tiempo de compilación
- **SEO Optimizado**: Meta tags completos para motores de búsqueda y redes sociales
- **Diseño Responsive**: Adaptado a todos los dispositivos
- **Desplegado en GitHub Pages**: Actualización automática con cada push a main
- **Money Model Landing Page**: Enfocada en conversión con promesa clara, prueba social y llamados a la acción efectivos

## 💰 Estructura Money Model

La landing page sigue el modelo de alta conversión con estas secciones:

1. **Header con Promesa Directa**: "Convierte tus datos en dinero con IA aplicada a tu negocio"
2. **Sección de Autoridad**: Perfil de Rafael Muñoz González con credenciales y experiencia
3. **El Problema**: Identifica los puntos de dolor del cliente (decisiones lentas, datos sin usar, competencia)
4. **La Solución**: Proceso claro en 3 pasos (auditoría, implementación, optimización)
5. **Casos Reales**: Resultados comprobados con métricas específicas (-30% costos, 200h ahorradas, +45% conversión)
6. **Oferta Irresistible**: Demo gratuita + diagnóstico en 48h + bonus de 30 días de soporte
7. **CTA Final**: Formulario completo para agendar demo (nombre, email, teléfono, empresa)

## 🌐 Ver en Vivo

La página está desplegada en: [https://rafamg96.github.io/ai_project/](https://rafamg96.github.io/ai_project/)

## 🛠️ Desarrollo Local

### Requisitos Previos

- Node.js 20.x o superior
- npm 10.x o superior

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Rafamg96/ai_project.git
cd ai_project

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor de desarrollo se iniciará en `http://localhost:3000/ai_project/`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo de Next.js
- `npm run build` - Construye la aplicación para producción con exportación estática
- `npm run start` - Inicia el servidor de producción (local)
- `npm run lint` - Ejecuta el linter ESLint con reglas de Next.js

## 📦 Despliegue

El despliegue a GitHub Pages es automático mediante GitHub Actions. Cada push a la rama `main` disparará el workflow que:

1. Instala las dependencias
2. Construye el proyecto con Next.js (genera HTML estático en `/out`)
3. Despliega a GitHub Pages desde el directorio `/out`

### Configuración de GitHub Pages

Asegúrate de que GitHub Pages esté configurado para usar GitHub Actions:

1. Ve a Settings → Pages en tu repositorio
2. En "Source", selecciona "GitHub Actions"

### Ventajas de Next.js para SEO en GitHub Pages

Al usar Next.js con exportación estática (`output: 'export'` en `next.config.js`), obtenemos:

- **HTML Pre-renderizado**: Todo el contenido se genera en HTML durante el build, no en el cliente
- **Meta Tags en el HTML**: Los motores de búsqueda pueden leer toda la información SEO sin ejecutar JavaScript
- **Mejor Indexación**: Google y otros buscadores indexan el contenido más fácilmente
- **Performance**: Carga más rápida al servir HTML estático desde GitHub Pages
- **Compatible con Hosting Estático**: Funciona perfectamente en GitHub Pages sin necesidad de servidor Node.js

## 🎨 Estructura del Proyecto

```
ai_project/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Workflow de despliegue automático
├── pages/
│   ├── _app.js              # Componente App de Next.js
│   ├── _document.js         # Documento HTML personalizado
│   └── index.js             # Página principal con la landing
├── styles/
│   ├── globals.css          # Estilos globales
│   └── Home.module.css      # Estilos modulares para la página principal
├── public/                   # Archivos estáticos
├── next.config.js           # Configuración de Next.js
├── .eslintrc.json           # Configuración de ESLint
└── package.json             # Dependencias y scripts
```

## 🔧 Tecnologías Utilizadas

- **Next.js 16**: Framework React con SSG (Static Site Generation)
- **React 19**: Biblioteca de UI
- **CSS Modules**: Estilos con scope local para evitar conflictos
- **ESLint**: Linter con configuración de Next.js
- **GitHub Actions**: CI/CD para despliegue automático
- **GitHub Pages**: Hosting estático gratuito

## 🔍 Mejoras de SEO

La migración a Next.js incluye las siguientes mejoras de SEO:

- ✅ HTML pre-renderizado con todo el contenido visible para crawlers
- ✅ Meta tags descriptivos (title, description, keywords)
- ✅ Open Graph tags para compartir en redes sociales
- ✅ Twitter Card tags para mejor presentación en Twitter
- ✅ Estructura semántica HTML5 (sections, headers, nav)
- ✅ URLs amigables y configuración de basePath para GitHub Pages

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👥 Autor

Desarrollado por Rafael Muñoz González - Especialista en IA y Data Science
