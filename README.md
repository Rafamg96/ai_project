# IA Solutions - Landing Page

Landing page de ventas para soluciones de Inteligencia Artificial, construida con React y desplegada en GitHub Pages.

## 🚀 Características

- **React + Vite**: Desarrollo rápido con Hot Module Replacement
- **Diseño Responsive**: Adaptado a todos los dispositivos
- **Desplegado en GitHub Pages**: Actualización automática con cada push a main
- **Landing Page Moderna**: Diseño profesional para ventas de servicios de IA

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

El servidor de desarrollo se iniciará en `http://localhost:5173/`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción localmente
- `npm run lint` - Ejecuta el linter ESLint

## 📦 Despliegue

El despliegue a GitHub Pages es automático mediante GitHub Actions. Cada push a la rama `main` disparará el workflow que:

1. Instala las dependencias
2. Construye el proyecto
3. Despliega a GitHub Pages

### Configuración de GitHub Pages

Asegúrate de que GitHub Pages esté configurado para usar GitHub Actions:

1. Ve a Settings → Pages en tu repositorio
2. En "Source", selecciona "GitHub Actions"

## 🎨 Estructura del Proyecto

```
ai_project/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Workflow de despliegue automático
├── src/
│   ├── App.jsx               # Componente principal con la landing page
│   ├── App.css               # Estilos de la landing page
│   ├── main.jsx              # Punto de entrada de React
│   └── index.css             # Estilos globales
├── public/                   # Archivos estáticos
├── index.html                # Template HTML
├── vite.config.js            # Configuración de Vite
└── package.json              # Dependencias y scripts
```

## 🔧 Tecnologías Utilizadas

- **React 19**: Biblioteca de UI
- **Vite 7**: Build tool y dev server
- **ESLint**: Linter para código JavaScript/React
- **GitHub Actions**: CI/CD para despliegue automático
- **GitHub Pages**: Hosting estático gratuito

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👥 Autor

Desarrollado por Rafael Martínez García
