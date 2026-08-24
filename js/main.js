/**
 * VIVIANA MENDOZA - DISTRIBUIDORA INDEPENDIENTE HGW
 * LÓGICA JAVASCRIPT: INTERACTIVIDAD, MODALES, FAQ, WHATSAPP & TRACKING
 */

document.addEventListener('DOMContentLoaded', () => {
  // Constantes de Marca & Contacto
  const WHATSAPP_NUMBER = '573108263000';
  const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
  
  // Tracking Helpers (Meta Pixel & GA4)
  const trackEvent = (eventName, params = {}) => {
    console.log(`[Analytics Event] ${eventName}:`, params);
    
    // Meta Pixel Hook
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', eventName, params);
    }
    
    // Google Analytics 4 Hook
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  };

  // --- 1. Base de Datos Oficial de Productos (Catálogo Colombia 2026) ---
  const productsData = [
    {
      id: 'cafe-arandano',
      category: 'bebidas',
      name: 'Café con Arándanos',
      categoryName: 'Alimentos y Bebidas',
      code: '0148',
      netContent: '180 gr (12 sobres)',
      priceRef: 'Catálogo Oficial Colombia 2026',
      shortDesc: 'Bebida instantánea a base de café soluble de aroma premium enriquecido con arándanos ricos en antioxidantes.',
      fullDesc: 'Disfruta de una combinación armoniosa entre el sabor y aroma característico del café gourmet con los fitonutrientes y antioxidantes naturales del arándano (Vaccinium corymbosum L). Ideal para iniciar el día con vitalidad y bienestar.',
      keyIngredients: ['Café soluble arábica', 'Extracto de arándanos (Blueberry)', 'Antioxidantes naturales'],
      image: 'assets/images/cafe_arandano.jpg'
    },
    {
      id: 'cafe-ganoderma',
      category: 'bebidas',
      name: 'Café con Ganoderma (Reishi)',
      categoryName: 'Alimentos y Bebidas',
      code: '0260',
      netContent: '42 gr (12 sobres)',
      priceRef: 'Catálogo Oficial Colombia 2026',
      shortDesc: 'Café soluble enriquecido con betaglucanos y bioactivos del legendario hongo Ganoderma lucidum (Reishi).',
      fullDesc: 'Una mezcla funcional diseñada para acompañar un estilo de vida saludable. Combina las notas del café soluble con los nutrientes del hongo Reishi, conocido tradicionalmente por su apoyo al equilibrio general del cuerpo.',
      keyIngredients: ['Café soluble', 'Extracto de Ganoderma lucidum (Reishi)', 'Micronutrientes bioactivos'],
      image: 'assets/images/cafe_ganoderma.jpg'
    },
    {
      id: 'cafe-cordyceps',
      category: 'bebidas',
      name: 'Café con Cordyceps',
      categoryName: 'Alimentos y Bebidas',
      code: '0262',
      netContent: '42 gr (12 sobres)',
      priceRef: 'Catálogo Oficial Colombia 2026',
      shortDesc: 'Fórmula que integra café gourmet con Cordyceps sinensis, apreciado por su aporte a la vitalidad y energía natural.',
      fullDesc: 'Excelente alternativa para quienes buscan mantenerse activos durante sus jornadas laborales, deportivas o de estudio. Integra extracto de hongo Cordyceps en una deliciosa taza de café.',
      keyIngredients: ['Café soluble de selección', 'Extracto de Cordyceps sinensis', 'Polifenoles'],
      image: 'assets/images/cafe_cordyceps.jpg'
    },
    {
      id: 'lactiberry',
      category: 'bebidas',
      name: 'Lactiberry',
      categoryName: 'Alimentos y Bebidas',
      code: '0209',
      netContent: 'Polvo instantáneo',
      priceRef: 'Catálogo Oficial Colombia 2026',
      shortDesc: 'Mezcla en polvo para preparar bebida instantánea con arándanos, producto lácteo y té negro.',
      fullDesc: 'Una bebida cremosa, reconfortante y de delicado sabor frutal que fusiona las bondades antioxidantes del arándano con las propiedades aromáticas del té negro y una base láctea suave.',
      keyIngredients: ['Extracto de arándano', 'Té negro seleccionado', 'Base láctea nutritiva'],
      image: 'assets/images/lactiberry.jpg'
    },
    {
      id: 'berry-juice',
      category: 'bebidas',
      name: 'Berry Juice High VC',
      categoryName: 'Alimentos y Bebidas',
      code: '0253',
      netContent: '180 gr',
      priceRef: 'Catálogo Oficial Colombia 2026',
      shortDesc: 'Bebida instantánea con mix de bayas silvestres y un alto aporte natural de Vitamina C.',
      fullDesc: 'Bebida refrescante y nutritiva formulada con una selecta combinación de frutos rojos y bayas silvestres, ideal para la hidratación diaria y el aporte de micronutrientes esenciales.',
      keyIngredients: ['Mix de bayas y frutos rojos', 'Vitamina C', 'Antioxidantes naturales'],
      image: 'assets/images/berry_juice.jpg'
    },
    {
      id: 'pasta-dental-turmalina',
      category: 'cuidado-personal',
      name: 'Pasta Dental con Turmalina',
      categoryName: 'Cuidado Personal',
      code: '1149',
      netContent: '120 gr',
      priceRef: 'Catálogo Oficial Colombia 2026',
      shortDesc: 'Higiene bucal avanzada con micropartículas de turmalina, menta fresca y xylitol natural.',
      fullDesc: 'Fórmula suave pero altamente efectiva que promueve una limpieza profunda, aliento fresco prolongado y protección para el esmalte dental y las encías sin ingredientes abrasivos agresivos.',
      keyIngredients: ['Polvo mineral de turmalina', 'Xylitol', 'Extracto natural de menta'],
      image: 'assets/images/pasta_dental_turmalina.jpg'
    },
    {
      id: 'toallas-turmalina',
      category: 'cuidado-personal',
      name: 'Toallas Sanitarias Smilife Anion-Enjoyable',
      categoryName: 'Cuidado Personal',
      code: 'Smilife Oficial HGW',
      netContent: 'Día (10 uds), Noche (8 uds), Protectores (30 uds)',
      priceRef: 'Catálogo Oficial Colombia 2026',
      shortDesc: 'Línea completa de toallas higiénicas y protectores con banda central de aniones y turmalina para máxima frescura y confort íntimo.',
      fullDesc: 'Desarrolladas con capas de algodón extra suave y transpirable, absorción ultra rápida y banda biocerámica que emite aniones e infrarrojo lejano para brindar bienestar, frescura continua y protección para la piel delicada.',
      keyIngredients: ['Algodón orgánico ultra suave', 'Banda central de Anión & Turmalina', 'Núcleo absorbente de alto rendimiento'],
      image: 'assets/images/toallas_turmalina.jpg'
    },
    {
      id: 'jabon-turmalina',
      category: 'cuidado-personal',
      name: 'Jabón de Turmalina (Tourmaline Soap)',
      categoryName: 'Cuidado Personal',
      code: '1130',
      netContent: '100 gr',
      priceRef: 'Catálogo Oficial Colombia 2026',
      shortDesc: 'Jabón revitalizante para la piel (Skin Revitalizing Soap) con microcristales de turmalina. Limpieza profunda y cuidado para la piel delicada.',
      fullDesc: 'Formulado con microcristales de turmalina y extractos botánicos nutritivos para brindar una limpieza profunda y equilibrada. Ayuda a purificar los poros, tonificar la piel y conservar la humectación natural sin resecar.',
      keyIngredients: ['Turmalina micronizada', 'Aceites botánicos nutritivos', 'Glicerina vegetal humectante'],
      image: 'assets/images/jabon_turmalina.jpg'
    },
    {
      id: 'termo-alcalino',
      category: 'bienestar-hogar',
      name: 'Termo con Infusor Alcalino HGW (Waterson)',
      categoryName: 'Bienestar & Hogar',
      code: '1205 / Waterson',
      netContent: 'Acero inoxidable 304 + Cartucho mineral',
      priceRef: 'Catálogo Oficial Colombia 2026',
      shortDesc: 'Vaso térmico con cartucho mineral Waterson para optimizar el agua, ajustar el pH y mantener la temperatura.',
      fullDesc: 'Estructura de doble pared en acero inoxidable grado alimenticio que incorpora un filtro con perlas minerales activas. Permite disfrutar de agua fresca y optimizada en cualquier lugar, conservando bebidas frías o calientes.',
      keyIngredients: ['Acero inoxidable grado quirúrgico 304', 'Núcleo de perlas minerales alcalinizantes', 'Doble pared con aislamiento térmico'],
      image: 'assets/images/termo_alcalino.jpg'
    }
  ];

  // --- 2. Renderizado Dinámico de Productos ---
  const productsGrid = document.getElementById('products-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderProducts(category = 'all') {
    if (!productsGrid) return;
    
    const filtered = category === 'all' 
      ? productsData 
      : productsData.filter(p => p.category === category);

    productsGrid.innerHTML = filtered.map(product => `
      <article class="product-card" data-category="${product.category}">
        <div class="product-image-box">
          <span class="product-badge">${product.categoryName}</span>
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </div>
        <div class="product-info">
          <div class="product-meta-row">
            <span>CÓD: ${product.code}</span>
            <span>${product.netContent}</span>
          </div>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-desc">${product.shortDesc}</p>
          <div class="product-footer">
            <button class="btn btn-primary btn-sm product-cta-btn" onclick="openProductModal('${product.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              Conocer producto
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Filtrado por Categorías
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProducts(cat);
      trackEvent('FilterProducts', { category: cat });
    });
  });

  renderProducts('all');

  // --- 3. Modal de Detalle de Producto ---
  const productModal = document.getElementById('product-modal');
  const productModalBody = document.getElementById('product-modal-content');
  const modalCloseButtons = document.querySelectorAll('.modal-close-trigger');

  window.openProductModal = (productId) => {
    const prod = productsData.find(p => p.id === productId);
    if (!prod || !productModal || !productModalBody) return;

    const waText = encodeURIComponent(`Hola Viviana, quiero conocer más información y disponibilidad sobre el producto oficial HGW: ${prod.name} (Cód. ${prod.code}).`);
    const waProductLink = `${WHATSAPP_BASE_URL}?text=${waText}`;

    productModalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: minmax(200px, 260px) 1fr; gap: 2rem; align-items: center;">
        <div style="background: #FFFFFF; border-radius: 16px; padding: 1.5rem; border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center;">
          <img src="${prod.image}" alt="${prod.name}" style="max-height: 220px; object-fit: contain;" />
        </div>
        <div>
          <span class="section-tag" style="font-size: 0.75rem; margin-bottom: 0.5rem;">${prod.categoryName}</span>
          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; color: var(--text-main); line-height: 1.2; margin-bottom: 0.5rem;">${prod.name}</h2>
          <div style="font-size: 0.8125rem; color: var(--text-light); font-weight: 600; margin-bottom: 1rem;">
            <span>Código Oficial: ${prod.code}</span> &bull; <span>Presentación: ${prod.netContent}</span>
          </div>
          <p style="font-size: 0.9375rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">${prod.fullDesc}</p>
          
          <div style="margin-bottom: 1.5rem;">
            <strong style="display: block; font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-primary-dark); margin-bottom: 0.5rem;">Aspectos destacados:</strong>
            <ul style="display: flex; flex-direction: column; gap: 0.375rem;">
              ${prod.keyIngredients.map(ing => `
                <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--text-main);">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  ${ing}
                </li>
              `).join('')}
            </ul>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="${waProductLink}" target="_blank" rel="noopener" class="btn btn-accent" onclick="trackEvent('WhatsAppProductInquiry', { product: '${prod.name}' })">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.124-.515-1.701-.699-2.775-2.457-2.86-2.57-.084-.113-.687-.912-.687-1.741 0-.829.434-1.236.589-1.401.144-.154.335-.224.448-.224.113 0 .226.002.325.006.103.004.24-.039.375.285.144.348.49 1.196.533 1.284.043.088.072.191.014.305-.058.114-.087.185-.174.286-.088.102-.184.227-.263.305-.088.087-.18.182-.078.358.102.175.454.748.974 1.212.671.598 1.236.784 1.411.872.175.088.277.073.38-.044.103-.117.439-.511.556-.686.117-.175.234-.146.394-.088.16.058 1.014.478 1.189.566.175.088.292.132.335.205.044.073.044.423-.1 1.003z"/></svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    `;

    productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    trackEvent('ProductView', { productId: prod.id, productName: prod.name });
  };

  // --- 4. Modal de Solicitud de Información General / Presentación ---
  const infoModal = document.getElementById('info-modal');
  
  window.openInfoModal = (topic = 'general') => {
    if (!infoModal) return;
    const topicInput = document.getElementById('modal-interest-topic');
    if (topicInput) topicInput.value = topic;
    infoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    trackEvent('OpenLeadModal', { topic });
  };

  window.closeAllModals = () => {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
    document.body.style.overflow = '';
  };

  modalCloseButtons.forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeAllModals();
    });
  });

  // Envío del Formulario Rápido
  const leadForm = document.getElementById('quick-lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('lead-name').value.trim();
      const phone = document.getElementById('lead-phone').value.trim();
      const topic = document.getElementById('modal-interest-topic').value;

      const waMsg = encodeURIComponent(`Hola Viviana, mi nombre es ${name}. Me pongo en contacto desde tu página web para solicitar información sobre: ${topic}. Mi teléfono es: ${phone}`);
      trackEvent('Lead', { name, topic });

      window.open(`${WHATSAPP_BASE_URL}?text=${waMsg}`, '_blank');
      closeAllModals();
    });
  }

  // --- 5. FAQ Acordeón ---
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');

      // Cerrar otros
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        trackEvent('FAQExpand', { question: question.textContent.trim() });
      } else {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      }
    });
  });

  // --- 6. Menú Móvil ---
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileNav = () => {
    mobileNav.classList.add('open');
    mobileNavOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    mobileNav.classList.remove('open');
    mobileNavOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (navToggle) navToggle.addEventListener('click', openMobileNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
  if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileNav);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // --- 7. Navbar Sticky & Scroll Spying ---
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- 8. UTM & URL Parameter Routing para Meta Ads ---
  const urlParams = new URLSearchParams(window.location.search);
  const utmCampaign = urlParams.get('utm_campaign') || urlParams.get('campaign') || urlParams.get('source');

  if (utmCampaign) {
    const campaignKey = utmCampaign.toLowerCase();
    trackEvent('CampaignLanding', { campaign: campaignKey });

    setTimeout(() => {
      if (campaignKey.includes('producto') || campaignKey.includes('catalogo')) {
        const prodSection = document.getElementById('productos');
        if (prodSection) prodSection.scrollIntoView({ behavior: 'smooth' });
      } else if (campaignKey.includes('emprende') || campaignKey.includes('negocio') || campaignKey.includes('modelo')) {
        const busSection = document.getElementById('emprende');
        if (busSection) busSection.scrollIntoView({ behavior: 'smooth' });
      } else if (campaignKey.includes('consumo')) {
        const smartSection = document.getElementById('consumo');
        if (smartSection) smartSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  }

  // Evento al hacer clic en WhatsApp
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('WhatsAppClick', { href: link.getAttribute('href') });
    });
  });
});
