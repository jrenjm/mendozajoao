// ============================================
// CONFIGURACIÓN DE PROYECTOS
// ============================================
// Modifica esta sección con tus proyectos reales
const projects = [
    {
        id: 1,
        title: "Sistema de Inspecciones SST",
        category: "inspecciones",
        description: "App para realizar inspecciones de seguridad con captura de fotos, geolocalización y reportes automáticos.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
        tags: ["Power Apps", "SharePoint", "Power Automate"],
        video: "https://www.youtube.com/embed/VIDEO_ID", // Cambia VIDEO_ID por tu video
        features: [
            "Captura de fotos con geolocalización",
            "Generación automática de reportes PDF",
            "Dashboard de análisis con Power BI",
            "Notificaciones automáticas",
            "Firma digital del inspector",
            "Exportación a Excel y PDF"
        ],
        technologies: [
            "Power Apps Canvas",
            "SharePoint Online",
            "Power Automate",
            "Power BI",
            "Microsoft Forms"
        ]
    },
    {
        id: 2,
        title: "Registro de Incidentes Laborales",
        category: "incidentes",
        description: "Aplicación para reportar y hacer seguimiento de incidentes y accidentes laborales en tiempo real.",
        image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600",
        tags: ["Power Apps", "Common Data Service", "Power BI"],
        video: "https://www.youtube.com/embed/VIDEO_ID",
        features: [
            "Clasificación por tipo y severidad de incidente",
            "Investigación de causas raíz",
            "Plan de acciones correctivas y preventivas",
            "Estadísticas y análisis de tendencias",
            "Alertas automáticas a supervisores",
            "Seguimiento de lesiones y días perdidos"
        ],
        technologies: [
            "Power Apps Model-Driven",
            "Dataverse",
            "Power Automate",
            "Power BI",
            "Office 365"
        ]
    },
    {
        id: 3,
        title: "Control de EPPs",
        category: "inspecciones",
        description: "Sistema de gestión y control de entrega de Equipos de Protección Personal con seguimiento de vencimientos.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
        tags: ["Power Apps", "SharePoint", "Outlook"],
        video: "https://www.youtube.com/embed/VIDEO_ID",
        features: [
            "Registro digital de entrega de EPPs",
            "Alertas automáticas de vencimiento",
            "Inventario en tiempo real",
            "Firma digital del trabajador",
            "Historial completo por colaborador",
            "Reportes de consumo y costos"
        ],
        technologies: [
            "Power Apps Canvas",
            "SharePoint Lists",
            "Power Automate",
            "Outlook",
            "Excel Online"
        ]
    },
    {
        id: 4,
        title: "Plataforma de Capacitaciones SST",
        category: "capacitacion",
        description: "Plataforma para gestionar capacitaciones, asistencias y evaluaciones de Seguridad y Salud en el Trabajo.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
        tags: ["Power Apps", "Forms", "Power Automate"],
        video: "https://www.youtube.com/embed/VIDEO_ID",
        features: [
            "Calendario interactivo de capacitaciones",
            "Registro de asistencia con código QR",
            "Evaluaciones online con retroalimentación",
            "Generación automática de certificados",
            "Recordatorios por email",
            "Dashboard de cumplimiento de capacitación"
        ],
        technologies: [
            "Power Apps Canvas",
            "Microsoft Forms",
            "Power Automate",
            "SharePoint",
            "Power BI"
        ]
    },
    {
        id: 5,
        title: "IPERC Continuo",
        category: "inspecciones",
        description: "App para identificación de peligros, evaluación y control de riesgos en el lugar de trabajo.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600",
        tags: ["Power Apps", "SharePoint", "Excel"],
        video: "https://www.youtube.com/embed/VIDEO_ID",
        features: [
            "Matriz de riesgos dinámica",
            "Cálculo automático de nivel de riesgo",
            "Catálogo de medidas de control",
            "Historial de evaluaciones por área",
            "Notificaciones de riesgos críticos",
            "Integración con plan de acción"
        ],
        technologies: [
            "Power Apps Canvas",
            "SharePoint Lists",
            "Power Automate",
            "Excel Services",
            "Power BI"
        ]
    },
    {
        id: 6,
        title: "Auditorías Internas SST",
        category: "inspecciones",
        description: "Sistema para planificar, ejecutar y hacer seguimiento de auditorías internas del sistema de gestión SST.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600",
        tags: ["Power Apps", "SharePoint", "Teams"],
        video: "https://www.youtube.com/embed/VIDEO_ID",
        features: [
            "Lista de verificación ISO 45001",
            "Registro de hallazgos y no conformidades",
            "Plan de acción con responsables y fechas",
            "Seguimiento de cierre de hallazgos",
            "Reportes ejecutivos automatizados",
            "Integración con Microsoft Teams"
        ],
        technologies: [
            "Power Apps Canvas",
            "SharePoint Lists",
            "Power Automate",
            "Microsoft Teams",
            "Word Online"
        ]
    },
    {
        id: 7,
        title: "Exámenes Médicos Ocupacionales",
        category: "capacitacion",
        description: "Gestión completa de exámenes médicos ocupacionales con recordatorios y seguimiento de aptitud.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600",
        tags: ["Power Apps", "Dataverse", "Outlook"],
        video: "https://www.youtube.com/embed/VIDEO_ID",
        features: [
            "Programación de exámenes por puesto",
            "Recordatorios automáticos a trabajadores",
            "Registro de resultados y aptitud",
            "Control de vencimientos",
            "Estadísticas de salud ocupacional",
            "Alertas de exámenes vencidos"
        ],
        technologies: [
            "Power Apps Model-Driven",
            "Dataverse",
            "Power Automate",
            "Outlook",
            "Power BI"
        ]
    },
    {
        id: 8,
        title: "Permiso de Trabajo Seguro",
        category: "inspecciones",
        description: "Sistema digital para emisión y control de permisos de trabajo en actividades de alto riesgo.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600",
        tags: ["Power Apps", "SharePoint", "Power Automate"],
        video: "https://www.youtube.com/embed/VIDEO_ID",
        features: [
            "Formulario inteligente según tipo de trabajo",
            "Checklist de verificación de seguridad",
            "Aprobaciones multinivel",
            "Firma digital de responsables",
            "Registro fotográfico del área",
            "Cierre y validación de permisos"
        ],
        technologies: [
            "Power Apps Canvas",
            "SharePoint Lists",
            "Power Automate",
            "Microsoft Approvals",
            "OneDrive"
        ]
    }
];

// ============================================
// NAVEGACIÓN
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

// Toggle menú móvil
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar menú al hacer click en un link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// ANIMACIÓN DE NÚMEROS (STATS)
// ============================================
const animateNumbers = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                
                const updateNumber = () => {
                    current += increment;
                    if (current < target) {
                        entry.target.textContent = Math.ceil(current);
                        requestAnimationFrame(updateNumber);
                    } else {
                        entry.target.textContent = target;
                    }
                };
                
                updateNumber();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
};

// ============================================
// RENDERIZAR PROYECTOS
// ============================================
const projectsGrid = document.getElementById('projectsGrid');

const renderProjects = (filter = 'all') => {
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', project.category);
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <span class="project-category">${getCategoryName(project.category)}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-footer">
                    <button class="view-details-btn" data-id="${project.id}">
                        <i class="fas fa-eye"></i> Ver detalles
                    </button>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Agregar eventos a los botones "Ver detalles"
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = parseInt(e.currentTarget.getAttribute('data-id'));
            openProjectModal(projectId);
        });
    });
};

// Obtener nombre de categoría
const getCategoryName = (category) => {
    const categories = {
        'inspecciones': 'Inspecciones',
        'incidentes': 'Incidentes',
        'capacitacion': 'Capacitación'
    };
    return categories[category] || category;
};

// ============================================
// FILTROS DE PROYECTOS
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase active de todos
        filterButtons.forEach(b => b.classList.remove('active'));
        // Agregar clase active al botón clickeado
        btn.classList.add('active');
        
        // Obtener filtro y renderizar
        const filter = btn.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// ============================================
// MODAL DE PROYECTOS
// ============================================
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

const openProjectModal = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    
    if (!project) return;
    
    modalBody.innerHTML = `
        <h2 style="color: var(--dark-color); margin-bottom: 0.5rem;">${project.title}</h2>
        <span class="project-category" style="margin-bottom: 2rem; display: inline-block;">${getCategoryName(project.category)}</span>
        
        <div style="margin: 2rem 0;">
            <iframe 
                class="modal-video" 
                height="450" 
                src="${project.video}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        
        <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Descripción del Proyecto</h3>
        <p style="color: var(--gray-color); margin-bottom: 2rem; line-height: 1.8;">${project.description}</p>
        
        <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Características Principales</h3>
        <ul style="margin-bottom: 2rem;">
            ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        
        <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Tecnologías Utilizadas</h3>
        <div class="project-tags" style="margin-bottom: 2rem;">
            ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
        </div>
        
        <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
            <a href="#contacto" class="btn btn-primary" onclick="closeProjectModal()">
                <i class="fas fa-envelope"></i> Solicitar Información
            </a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeProjectModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

// Hacer la función disponible globalmente
window.closeProjectModal = closeProjectModal;

closeModal.addEventListener('click', closeProjectModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ANIMACIONES DE ENTRADA
// ============================================
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Observar elementos cuando se carguen
    setTimeout(() => {
        document.querySelectorAll('.project-card, .stat-card, .contact-card, .skill-tag').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }, 100);
};

// ============================================
// ACTUALIZAR CONTADOR DE PROYECTOS
// ============================================
const updateProjectCount = () => {
    const projectCountElement = document.querySelector('.stat-number[data-target="10"]');
    if (projectCountElement) {
        projectCountElement.setAttribute('data-target', projects.length);
    }
};

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    updateProjectCount();
    animateNumbers();
    observeElements();
    
    console.log('%c¡Hola! 👋', 'font-size: 20px; font-weight: bold; color: #ff6b35;');
    console.log('%cPortafolio desarrollado por Joao Mendoza Arenas', 'font-size: 14px; color: #004e89;');
    console.log('%cIngeniería de Seguridad y Salud en el Trabajo', 'font-size: 12px; color: #6c757d;');
});

// ============================================
// ANIMACIÓN DEL LOGO EN SCROLL
// ============================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});
