# Landing Page Viviana Mendoza — Distribuidora Independiente HGW

Landing page de marca personal premium, moderna, completamente responsive y orientada a la conversión para **Viviana Mendoza**, Distribuidora Independiente de HGW Colombia.

---

## 🚀 Características Principales

- **Diseño Editorial & Marca Personal**: Estética limpia y cálida basada en tonos verde salvia, blanco lino y terracota, con tipografías *Playfair Display* y *Plus Jakarta Sans*.
- **17 Secciones Estratégicas**:
  1. Navbar Sticky con drawer móvil
  2. Hero Section con retrato editorial
  3. Presentación de Viviana ("Hola, soy Viviana")
  4. Propuesta de Valor (4 pilares)
  5. Galería de Productos Oficiales HGW (Catálogo Colombia 2026)
  6. Consumo Inteligente
  7. Modelo de Negocio / Emprendimiento
  8. Tienda Virtual (Mockup smartphone)
  9. ¿Cómo Funciona? (Timeline de 4 etapas)
  10. ¿Para Quién Es?
  11. Conoce el Modelo HGW (Conceptos BV, membresías y plan de compensación)
  12. Lo Que Puedes Esperar (Valores de servicio)
  13. Preguntas Frecuentes (Acordeón interactivo)
  14. CTA Final
  15. Botón Flotante de WhatsApp directo (`+573108263000`)
  16. Redes Sociales oficiales (Facebook e Instagram)
  17. Footer con disclaimer de transparencia legal
- **Modal de Detalle de Producto**: Muestra ingredientes, contenido neto, código oficial y botón de consulta directa por WhatsApp.
- **Enrutamiento UTM para Meta Ads**: Scroll automático y foco dinámico según el anuncio de origen (`?utm_campaign=productos`, `?utm_campaign=emprende`, `?utm_campaign=consumo`).
- **Preparado para Hostinger**: Incluye `.htaccess` con compresión GZIP, caché de navegador, cabeceras de seguridad y redirección HTTPS.

---

## 📁 Estructura del Proyecto

```
Proyecto_002/
├── index.html              # Archivo principal HTML5
├── .htaccess               # Configuración para servidor Apache / LiteSpeed (Hostinger)
├── robots.txt              # Directivas de rastreo SEO
├── sitemap.xml             # Mapa del sitio web
├── css/
│   └── styles.css          # Sistema de diseño, tokens y estilos responsive
├── js/
│   └── main.js             # Lógica interactiva, catálogo dinámico, FAQ y tracking
└── assets/
    └── images/             # Fotografías oficiales optimizadas
        ├── viviana_mendoza.jpg
        ├── cafe_arandano.jpg
        ├── cafe_ganoderma.jpg
        ├── cafe_cordyceps.jpg
        ├── lactiberry.jpg
        ├── berry_juice.jpg
        ├── pasta_dental.jpg
        ├── pasta_dental_turmalina.jpg
        ├── toallas_turmalina.jpg
        ├── jabon_turmalina.jpg
        └── termo_alcalino.jpg
```

---

## 🌐 Guía de Despliegue en Hostinger

### Método 1: Administrador de Archivos (hPanel de Hostinger) — *Recomendado y más rápido*

1. Ingresa a tu cuenta de **Hostinger** y accede a tu panel de control (**hPanel**).
2. Dirígete a la sección **Sitios Web** > Administrar > **Administrador de Archivos** (`File Manager`).
3. Abre la carpeta **`public_html`**.
4. Sube todos los archivos y carpetas del proyecto:
   - `index.html`
   - `.htaccess`
   - `robots.txt`
   - `sitemap.xml`
   - Carpeta `css/`
   - Carpeta `js/`
   - Carpeta `assets/`
   *(O sube el archivo comprimido `deploy_hostinger.zip` y dale clic derecho en **Extraer / Unzip** directamente dentro de `public_html`)*.
5. ¡Listo! Tu página estará activa de inmediato en tu dominio con certificado SSL automático.

---

### Método 2: Despliegue Automático mediante Git en Hostinger

1. En **hPanel**, ve a la sección **Avanzado** > **Git**.
2. Ingresa la URL de tu repositorio de GitHub (ej. `https://github.com/TU_USUARIO/TU_REPOSITORIO.git`).
3. Selecciona la rama `main` y la ruta de destino `/public_html`.
4. Haz clic en **Crear**.
5. Para futuras actualizaciones, solo debes hacer clic en **Desplegar / Auto-Deploy**.

---

## 🐙 Comandos para vincular a tu cuenta de GitHub

1. En tu cuenta de GitHub, crea un nuevo repositorio (por ejemplo: `landing-viviana-mendoza`).
2. En tu terminal local, ejecuta:

```bash
# 1. Renombrar la rama a main
git branch -M main

# 2. Conectar con tu repositorio remoto de GitHub (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 3. Subir los archivos a GitHub
git push -u origin main
```
