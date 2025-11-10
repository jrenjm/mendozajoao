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
        github: "https://github.com/tu-usuario/repo-inspecciones",
        video: "https://www.youtube.com/embed/VIDEO_ID", // Cambia VIDEO_ID por tu video
        features: [
            "Captura de fotos con geolocalización",
            "Generación automática de reportes PDF",
            "Dashboard de análisis con Power BI",
            "Notificaciones automáticas"
        ]
    },
    {
        id: 2,
        title: "Registro de Incidentes Laborales",
        category: "incidentes",
        description: "Aplicación para reportar y hacer seguimiento de incidentes y accidentes laborales en tiempo real.",
        image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600",
        tags: ["Power Apps", "Common Data Service", "Power BI"],
        github: "https://github.com/tu-usuario/repo-incidentes",
        video: "https://www.youtube.com/embed/VIDEO_ID",
        features: [
            "Clasificación por tipo de incidente",
            "Investigación de causas raíz",
            "Plan de acciones correctivas",
            "Estadísticas y tendencias"
        ]
    },
    {
        id: 3,
        title: "Control de EPPs",
        category: "inspecciones",
        description: "Sistema de gestión y control de entrega de Equipos de Protección Personal con seguimiento de vencimientos.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
        tags: ["Power Apps", "SharePoint", "Outlook"],
        github: "https://github.com/tu-usuario/repo-epps",
        video: "https://www.youtube.com/embed/VIDEO_ID",
        features: [
            "Registro de entrega de EPPs",
            "Alertas de vencimiento",
            "Inventario en tiempo real",
            "Firma digital del trabajador"
        ]
    },
    {
        id: 4,
        title: "Capacitaciones SST",
        category: "capacitacion",
        description: "Plataforma para gestionar capacitaciones, asistencias y evaluaciones de Seguridad y Salud en el Trabajo.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
        tags: ["Power Apps", "Forms", "Power Automate"],
        github: "https://github.com/tu-usuario/repo-capacitaciones",
        video: "https://www.youtube.com/embed/VIDEO_ID",
        features: [
            "Calendario de capacitaciones",
            "Registro de asistencia con QR",
            "Evaluaciones online",
            "Certificados automáticos"
        ]
    },
    {
        id: 5,
        title: "IPERC Continuo",
        category: "inspecciones",
        description: "App para identificación de peligros, evaluación y control de riesgos en el lugar de trabajo.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600",
        tags: ["Power Apps", "SharePoint", "Excel"],
        github: "https://github.com/tu-usuario/repo-iperc",
        video: "https://www.youtube.com/embed/VIDEO_ID",
        features: [
            "Matriz de riesgos dinámica",
            "Cálculo automático de nivel de riesgo",
            "Medidas de control sugeridas",
            "Historial de evaluaciones"
        ]
    },
    {
        id: 6,
        title: "Auditorías Internas SST",
        category: "inspecciones",
        description: "Sistema para planificar, ejecutar y hacer seguimiento de auditorías internas del sistema de gestión SST.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600",
        tags: ["Power Apps", "SharePoint", "Teams"],
        github: "https://github.com/tu-usuario/repo-auditorias",
        video: "https://www.youtube.com/embed/VIDEO_ID",
        features: [
            "Lista de verificación ISO 45001",
            "Hallazgos y no conformidades",
            "Plan de acción con responsables",
            "Reportes ejecutivos"
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
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> Código
                    </a>
                    <a href="#" class="project-link view-details" data-id="${project.id}">
                        <i class="fas fa-eye"></i> Ver más
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Agregar eventos a los botones "Ver más"
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
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
        <h2>${project.title}</h2>
        <span class="project-category">${getCategoryName(project.category)}</span>
        
        <div style="margin: 2rem 0;">
            <iframe 
                class="modal-video" 
                height="400" 
                src="${project.video}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        
        <h3>Descripción</h3>
        <p style="color: var(--gray-color); margin-bottom: 2rem;">${project.description}</p>
        
        <h3>Características principales</h3>
        <ul style="color: var(--gray-color); margin-bottom: 2rem; line-height: 2;">
            ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        
        <h3>Tecnologías utilizadas</h3>
        <div class="project-tags" style="margin-bottom: 2rem;">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <a href="${project.github}" target="_blank" class="btn btn-primary">
            <i class="fab fa-github"></i> Ver en GitHub
        </a>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeProjectModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

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
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    animateNumbers();
    
    // Animación de entrada para las tarjetas
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
        document.querySelectorAll('.project-card, .stat-card, .contact-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }, 100);
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c¡Hola! 👋', 'font-size: 20px; font-weight: bold; color: #ff6b35;');
console.log('%cPortafolio desarrollado por Joao Mendoza Arenas', 'font-size: 14px; color: #004e89;');
console.log('%cIngeniería de Seguridad y Salud en el Trabajo', 'font-size: 12px; color: #6c757d;');
