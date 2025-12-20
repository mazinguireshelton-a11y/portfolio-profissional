// js/translations.js - SISTEMA COMPLETO DE TRADUÇÃO
console.log('🌍 translations.js CARREGADO!');

const TRANSLATIONS = {
    pt: {
        // Navegação
        "nav.about": "Sobre Mim",
        "nav.leadership": "Liderança",
        "nav.programming": "Programação",
        "nav.courses": "Cursos",
        "nav.sports": "Esportes",

        // Hero
        "hero.title": "Shelton Mazinguire Manuel",
        "hero.tagline": "Estudante | Programador Júnior | Líder | Atleta",

        // Sobre Mim
        "about.journey": "🔄 Minha Jornada",
        "about.journeyText": "Sou estudante do 12º ano em Chimoio, Moçambique, com paixão por tecnologia, engenharia e inovação. Busco constantemente aprender e aplicar conhecimentos em projetos práticos que impactem positivamente minha comunidade.",
        "about.education": "🎓 Formação Académica",
        "about.school": "Escola Secundária Samora Machel",
        "about.year": "2024 - 2025",
        "about.grade": "12º Ano - Ciências com Biologia",
        "about.subject1": "Matemática",
        "about.subject2": "Física e Química",
        "about.subject3": "Programação Básica",
        "about.skills": "🛠️ Competências",
        "about.projects": "Projetos Concluídos",
        "about.certificates": "Certificados",
        "about.experience": "Anos de Experiência",
        "about.goals": "🎯 Objetivos",
        "about.goal1": "Graduar-me em Engenharia Mecânica",
        "about.goal2": "Desenvolver soluções tecnológicas para Moçambique",
        "about.goal3": "Contribuir para o desenvolvimento industrial",
        "about.goal4": "Inspirar jovens na área de tecnologia",

        // Liderança
        "leadership.journey": "🌟 Minha Jornada de Liderança",
        "leadership.journeyText": "Atuação como líder juvenil na Young Life Moçambique, coordenando atividades, mentorando jovens e desenvolvendo habilidades de comunicação e trabalho em equipe.",
        "leadership.coordination": "Coordenação de Grupos",
        "leadership.coordinationText": "Liderança de grupos juvenis com foco no desenvolvimento pessoal e comunitário",
        "leadership.mentoring": "Mentoria",
        "leadership.mentoringText": "Orientação e apoio a jovens em suas jornadas educacionais e pessoais",
        "leadership.events": "Organização de Eventos",
        "leadership.eventsText": "Planejamento e execução de atividades recreativas e educativas",
        "leadership.gallery": "📸 Galeria - Young Life",

        // Programação
        "programming.tech": "💻 Tecnologias que Utilizo",
        "programming.projects": "🚀 Meus Projetos no GitHub",
        "programming.github": "🔗 Meu GitHub",
        "programming.visit": "Visitar Meu GitHub",
        "programming.repos": "Repositórios:",
        "programming.followers": "Seguidores:",

        // Cursos
        "courses.header": "📚 Cursos que Estou Fazendo",
        "courses.subtitle": "Desenvolvimento contínuo através de cursos online para aprimorar minhas habilidades técnicas",
        "courses.certificates": "🏆 Meus Certificados",

        // Esportes
        "sports.passion": "🏐 Minha Paixão pelo Handebol",
        "sports.passionText": "Prática regular de handebol competitivo, desenvolvendo disciplina, trabalho em equipe e espírito esportivo através de treinos e competições escolares.",
        "sports.years": "Anos Jogando",
        "sports.games": "Jogos Competitivos",
        "sports.awards": "Premiações",
        "sports.benefits": "🎯 Benefícios do Esporte",
        "sports.benefit1": "Disciplina e foco",
        "sports.benefit2": "Trabalho em equipe",
        "sports.benefit3": "Gestão do tempo",
        "sports.benefit4": "Resiliência mental",
        "sports.benefit5": "Saúde física",
        "sports.moments": "📸 Momentos do Handebol",
        "sports.videos": "🎥 Vídeos dos Jogos",

        // Footer
        "footer.tagline": "Estudante | Programador | Líder | Atleta",
        "footer.mission": "Transformando paixão em projetos concretos",
        "footer.connect": "Conecte-se Comigo",
        "footer.contact": "Contato",
        "footer.rights": "© 2025 Shelton Mazinguire Manuel. Todos os direitos reservados."
    },

    en: {
        "nav.about": "About Me",
        "nav.leadership": "Leadership",
        "nav.programming": "Programming",
        "nav.courses": "Courses",
        "nav.sports": "Sports",

        "hero.title": "Shelton Mazinguire Manuel",
        "hero.tagline": "Student | Junior Programmer | Leader | Athlete",

        "about.journey": "🔄 My Journey",
        "about.journeyText": "I am a 12th-grade student in Chimoio, Mozambique, passionate about technology, engineering and innovation. I constantly seek to learn and apply knowledge in practical projects that positively impact my community.",
        "about.education": "🎓 Academic Background",
        "about.school": "Samora Machel Secondary School",
        "about.year": "2024 - 2025",
        "about.grade": "12th Grade - Science with Biology",
        "about.subject1": "Mathematics",
        "about.subject2": "Physics and Chemistry",
        "about.subject3": "Basic Programming",
        "about.skills": "🛠️ Skills",
        "about.projects": "Completed Projects",
        "about.certificates": "Certificates",
        "about.experience": "Years of Experience",
        "about.goals": "🎯 Goals",
        "about.goal1": "Graduate in Mechanical Engineering",
        "about.goal2": "Develop technological solutions for Mozambique",
        "about.goal3": "Contribute to industrial development",
        "about.goal4": "Inspire youth in the technology field",

        "leadership.journey": "🌟 My Leadership Journey",
        "leadership.journeyText": "I serve as a youth leader in Young Life Mozambique, coordinating activities and mentoring young people.",
        "leadership.coordination": "Group Coordination",
        "leadership.coordinationText": "Leadership of youth groups focused on personal and community development",
        "leadership.mentoring": "Mentoring",
        "leadership.mentoringText": "Guidance and support for young people in their educational and personal journeys",
        "leadership.events": "Event Organization",
        "leadership.eventsText": "Planning and execution of recreational and educational activities",
        "leadership.gallery": "📸 Young Life Gallery",

        "programming.tech": "💻 Technologies I Use",
        "programming.projects": "🚀 My GitHub Projects",
        "programming.github": "🔗 My GitHub",
        "programming.visit": "Visit my GitHub",
        "programming.repos": "Repositories:",
        "programming.followers": "Followers:",

        "courses.header": "📚 Courses I'm Taking",
        "courses.subtitle": "Continuous development through online courses to improve my technical skills",
        "courses.certificates": "🏆 My Certificates",

        "sports.passion": "🏐 My Passion for Handball",
        "sports.passionText": "Regular practice of competitive handball, developing discipline, teamwork and sporting spirit through training and school competitions.",
        "sports.years": "Years Playing",
        "sports.games": "Competitive Matches",
        "sports.awards": "Awards",
        "sports.benefits": "🎯 Benefits of Sport",
        "sports.benefit1": "Discipline and focus",
        "sports.benefit2": "Teamwork",
        "sports.benefit3": "Time management",
        "sports.benefit4": "Mental resilience",
        "sports.benefit5": "Physical health",
        "sports.moments": "📸 Handball Moments",
        "sports.videos": "🎥 Match Videos",

        "footer.tagline": "Student | Programmer | Leader | Athlete",
        "footer.mission": "Turning passion into concrete projects",
        "footer.connect": "Connect With Me",
        "footer.contact": "Contact",
        "footer.rights": "© 2025 Shelton Mazinguire Manuel. All rights reserved."
    },

    es: {
        "nav.about": "Sobre Mí",
        "nav.leadership": "Liderazgo",
        "nav.programming": "Programación",
        "nav.courses": "Cursos",
        "nav.sports": "Deportes",

        "hero.title": "Shelton Mazinguire Manuel",
        "hero.tagline": "Estudiante | Programador Junior | Líder | Atleta",

        "about.journey": "🔄 Mi Trayectoria",
        "about.journeyText": "Soy estudiante de 12º grado en Chimoio, Mozambique, apasionado por la tecnología, la ingeniería y la innovación. Busco aprender y aplicar conocimientos en proyectos prácticos que impacten mi comunidad.",
        "about.education": "🎓 Formación Académica",
        "about.school": "Escuela Secundaria Samora Machel",
        "about.year": "2024 - 2025",
        "about.grade": "12º Grado - Ciencias con Biología",
        "about.subject1": "Matemáticas",
        "about.subject2": "Física y Química",
        "about.subject3": "Programación Básica",
        "about.skills": "🛠️ Habilidades",
        "about.projects": "Proyectos Completados",
        "about.certificates": "Certificados",
        "about.experience": "Años de Experiencia",
        "about.goals": "🎯 Objetivos",
        "about.goal1": "Graduarme en Ingeniería Mecánica",
        "about.goal2": "Desarrollar soluciones tecnológicas para Mozambique",
        "about.goal3": "Contribuir al desarrollo industrial",
        "about.goal4": "Inspirar a los jóvenes en tecnología",

        "leadership.journey": "🌟 Mi Trayectoria de Liderazgo",
        "leadership.journeyText": "Actúo como líder juvenil en Young Life Mozambique, coordinando actividades y mentorizando jóvenes.",
        "leadership.coordination": "Coordinación de Grupos",
        "leadership.coordinationText": "Liderazgo de grupos juveniles centrados en el desarrollo personal y comunitario",
        "leadership.mentoring": "Mentoría",
        "leadership.mentoringText": "Orientación y apoyo a los jóvenes en su desarrollo educativo y personal",
        "leadership.events": "Organización de Eventos",
        "leadership.eventsText": "Planificación y ejecución de actividades recreativas y educativas",
        "leadership.gallery": "📸 Galería - Young Life",

        "programming.tech": "💻 Tecnologías que Utilizo",
        "programming.projects": "🚀 Proyectos en GitHub",
        "programming.github": "🔗 Mi GitHub",
        "programming.visit": "Visitar mi GitHub",
        "programming.repos": "Repositorios:",
        "programming.followers": "Seguidores:",

        "courses.header": "📚 Cursos que Estoy Haciendo",
        "courses.subtitle": "Desarrollo continuo mediante cursos online para mejorar mis habilidades técnicas",
        "courses.certificates": "🏆 Mis Certificados",

        "sports.passion": "🏐 Mi Pasión por el Balonmano",
        "sports.passionText": "Práctica regular de balonmano competitivo, desarrollando disciplina, trabajo en equipo y espíritu deportivo.",
        "sports.years": "Años Jugando",
        "sports.games": "Partidos Competitivos",
        "sports.awards": "Premios",
        "sports.benefits": "🎯 Beneficios del Deporte",
        "sports.benefit1": "Disciplina y enfoque",
        "sports.benefit2": "Trabajo en equipo",
        "sports.benefit3": "Gestión del tiempo",
        "sports.benefit4": "Resiliencia mental",
        "sports.benefit5": "Salud física",
        "sports.moments": "📸 Momentos de Balonmano",
        "sports.videos": "🎥 Vídeos de Partidos",

        "footer.tagline": "Estudiante | Programador | Líder | Atleta",
        "footer.mission": "Transformando pasión en proyectos concretos",
        "footer.connect": "Conéctate Conmigo",
        "footer.contact": "Contacto",
        "footer.rights": "© 2025 Shelton Mazinguire Manuel. Todos los derechos reservados."
    },

    fr: {
        "nav.about": "À Propos",
        "nav.leadership": "Leadership",
        "nav.programming": "Programmation",
        "nav.courses": "Cours",
        "nav.sports": "Sports",

        "hero.title": "Shelton Mazinguire Manuel",
        "hero.tagline": "Étudiant | Programmeur Junior | Leader | Athlète",

        "about.journey": "🔄 Mon Parcours",
        "about.journeyText": "Je suis élève de 12e année à Chimoio, Mozambique, passionné par la technologie, l'ingénierie et l'innovation. Je cherche à apprendre et appliquer des connaissances dans des projets pratiques qui ont un impact positif.",
        "about.education": "🎓 Formation Académique",
        "about.school": "École Secondaire Samora Machel",
        "about.year": "2024 - 2025",
        "about.grade": "12ème Année - Sciences avec Biologie",
        "about.subject1": "Mathématiques",
        "about.subject2": "Physique et Chimie",
        "about.subject3": "Programmation de Base",
        "about.skills": "🛠️ Compétences",
        "about.projects": "Projets Terminés",
        "about.certificates": "Certificats",
        "about.experience": "Années d'Expérience",
        "about.goals": "🎯 Objectifs",
        "about.goal1": "Obtenir un diplôme en Génie Mécanique",
        "about.goal2": "Développer des solutions technologiques pour le Mozambique",
        "about.goal3": "Contribuer au développement industriel",
        "about.goal4": "Inspirer les jeunes dans le domaine de la technologie",

        "leadership.journey": "🌟 Mon Parcours de Leadership",
        "leadership.journeyText": "J'agis en tant que leader jeunesse à Young Life Mozambique, coordonnant des activités et encadrant les jeunes.",
        "leadership.coordination": "Coordination de Groupes",
        "leadership.coordinationText": "Leadership de groupes de jeunes axés sur le développement personnel et communautaire",
        "leadership.mentoring": "Mentorat",
        "leadership.mentoringText": "Orientation et soutien des jeunes dans leur parcours éducatif et personnel",
        "leadership.events": "Organisation d'Événements",
        "leadership.eventsText": "Planification et exécution d'activités récréatives et éducatives",
        "leadership.gallery": "📸 Galerie - Young Life",

        "programming.tech": "💻 Technologies que J'utilise",
        "programming.projects": "🚀 Projets GitHub",
        "programming.github": "🔗 Mon GitHub",
        "programming.visit": "Visiter mon GitHub",
        "programming.repos": "Dépôts:",
        "programming.followers": "Abonnés:",

        "courses.header": "📚 Cours que je suis",
        "courses.subtitle": "Développement continu via des cours en ligne pour améliorer mes compétences techniques",
        "courses.certificates": "🏆 Mes Certificats",

        "sports.passion": "🏐 Ma Passion pour le Handball",
        "sports.passionText": "Pratique régulière du handball compétitif, développant discipline et esprit d'équipe.",
        "sports.years": "Années de Jeu",
        "sports.games": "Matchs Compétitifs",
        "sports.awards": "Récompenses",
        "sports.benefits": "🎯 Avantages du Sport",
        "sports.benefit1": "Discipline et concentration",
        "sports.benefit2": "Travail d'équipe",
        "sports.benefit3": "Gestion du temps",
        "sports.benefit4": "Résilience mentale",
        "sports.benefit5": "Santé physique",
        "sports.moments": "📸 Moments de Handball",
        "sports.videos": "🎥 Vidéos des Matchs",

        "footer.tagline": "Étudiant | Programmeur | Leader | Athlète",
        "footer.mission": "Transformer la passion en projets concrets",
        "footer.connect": "Contactez-moi",
        "footer.contact": "Contact",
        "footer.rights": "© 2025 Shelton Mazinguire Manuel. Tous droits réservés."
    },

    ru: {
        "nav.about": "Обо мне",
        "nav.leadership": "Лидерство",
        "nav.programming": "Программирование",
        "nav.courses": "Курсы",
        "nav.sports": "Спорт",

        "hero.title": "Шелтон Мазингире Мануэль",
        "hero.tagline": "Студент | Младший программист | Лидер | Спортсмен",

        "about.journey": "🔄 Мой путь",
        "about.journeyText": "Я ученик 12 класса в Чимоио, Мозамбик. Увлекаюсь технологиями, инженерией и инновациями. Постоянно стремлюсь учиться и применять знания в практических проектах.",
        "about.education": "🎓 Образование",
        "about.school": "Средняя школа Самора Машел",
        "about.year": "2024 - 2025",
        "about.grade": "12 класс - Естественные науки с биологией",
        "about.subject1": "Математика",
        "about.subject2": "Физика и Химия",
        "about.subject3": "Основы программирования",
        "about.skills": "🛠️ Навыки",
        "about.projects": "Завершенные проекты",
        "about.certificates": "Сертификаты",
        "about.experience": "Лет опыта",
        "about.goals": "🎯 Цели",
        "about.goal1": "Получить степень в области машиностроения",
        "about.goal2": "Разрабатывать технологические решения для Мозамбика",
        "about.goal3": "Способствовать промышленному развитию",
        "about.goal4": "Вдохновлять молодёжь в сфере технологий",

        "leadership.journey": "🌟 Мой путь лидерства",
        "leadership.journeyText": "Работаю молодёжным лидером в Young Life Mozambique, координирую мероприятия и наставляю молодых людей.",
        "leadership.coordination": "Координация групп",
        "leadership.coordinationText": "Руководство молодёжными группами, ориентированными на личностное и общественное развитие",
        "leadership.mentoring": "Наставничество",
        "leadership.mentoringText": "Руководство и поддержка молодёжи в их образовательном и личном развитии",
        "leadership.events": "Организация мероприятий",
        "leadership.eventsText": "Планирование и проведение образовательных и развлекательных мероприятий",
        "leadership.gallery": "📸 Галерея - Young Life",

        "programming.tech": "💻 Технологии, которые я использую",
        "programming.projects": "🚀 Проекты на GitHub",
        "programming.github": "🔗 Мой GitHub",
        "programming.visit": "Посетить мой GitHub",
        "programming.repos": "Репозитории:",
        "programming.followers": "Подписчики:",

        "courses.header": "📚 Курсы, которые я прохожу",
        "courses.subtitle": "Непрерывное развитие через онлайн-курсы для улучшения моих технических навыков",
        "courses.certificates": "🏆 Мои сертификаты",

        "sports.passion": "🏐 Моя страсть к гандболу",
        "sports.passionText": "Регулярные занятия соревновательным гандболом, развивающие дисциплину и командную работу.",
        "sports.years": "Лет игры",
        "sports.games": "Соревновательные матчи",
        "sports.awards": "Награды",
        "sports.benefits": "🎯 Преимущества спорта",
        "sports.benefit1": "Дисциплина и концентрация",
        "sports.benefit2": "Командная работа",
        "sports.benefit3": "Управление временем",
        "sports.benefit4": "Психическая устойчивость",
        "sports.benefit5": "Физическое здоровье",
        "sports.moments": "📸 Моменты гандбола",
        "sports.videos": "🎥 Видео матчей",

        "footer.tagline": "Студент | Программист | Лидер | Спортсмен",
        "footer.mission": "Превращение страсти в конкретные проекты",
        "footer.connect": "Свяжитесь со мной",
        "footer.contact": "Контакт",
        "footer.rights": "© 2025 Shelton Mazinguire Manuel. Все права защищены."
    },

    zh: {
        "nav.about": "关于我",
        "nav.leadership": "领导力",
        "nav.programming": "编程",
        "nav.courses": "课程",
        "nav.sports": "体育",

        "hero.title": "谢尔顿·马津吉尔·曼努埃尔",
        "hero.tagline": "学生 | 初级程序员 | 领导者 | 运动员",

        "about.journey": "🔄 我的旅程",
        "about.journeyText": "我是来自奇莫约的12年级学生，热爱技术、工程和创新。我不断寻求在实践项目中学习并应用知识，以积极影响我的社区。",
        "about.education": "🎓 学历",
        "about.school": "萨莫拉·马谢尔中学",
        "about.year": "2024 - 2025",
        "about.grade": "12年级 - 生物科学",
        "about.subject1": "数学",
        "about.subject2": "物理与化学",
        "about.subject3": "基础编程",
        "about.skills": "🛠️ 技能",
        "about.projects": "已完成项目",
        "about.certificates": "证书",
        "about.experience": "经验年限",
        "about.goals": "🎯 目标",
        "about.goal1": "获得机械工程学位",
        "about.goal2": "为莫桑比克开发技术解决方案",
        "about.goal3": "为工业发展做出贡献",
        "about.goal4": "激励年轻人进入技术领域",

        "leadership.journey": "🌟 我的领导力之旅",
        "leadership.journeyText": "在 Young Life Mozambique 担任青年领袖，协调活动并指导年轻人。",
        "leadership.coordination": "小组协调",
        "leadership.coordinationText": "领导以个人和社区发展为重点的青年团体",
        "leadership.mentoring": "辅导",
        "leadership.mentoringText": "在教育和个人发展方面为青年提供指导和支持",
        "leadership.events": "活动组织",
        "leadership.eventsText": "规划和组织教育与娱乐活动",
        "leadership.gallery": "📸 相册 - Young Life",

        "programming.tech": "💻 我使用的技术",
        "programming.projects": "🚀 GitHub 项目",
        "programming.github": "🔗 我的 GitHub",
        "programming.visit": "访问我的 GitHub",
        "programming.repos": "仓库：",
        "programming.followers": "关注者：",

        "courses.header": "📚 我正在学习的课程",
        "courses.subtitle": "通过在线课程不断发展以提升我的技术技能",
        "courses.certificates": "🏆 我的证书",

        "sports.passion": "🏐 我对手球的热爱",
        "sports.passionText": "定期练习竞技手球，培养纪律性和团队合作精神。",
        "sports.years": "打球年限",
        "sports.games": "竞技比赛",
        "sports.awards": "奖励",
        "sports.benefits": "🎯 运动的好处",
        "sports.benefit1": "纪律与专注",
        "sports.benefit2": "团队合作",
        "sports.benefit3": "时间管理",
        "sports.benefit4": "心理韧性",
        "sports.benefit5": "身体健康",
        "sports.moments": "📸 手球时刻",
        "sports.videos": "🎥 比赛视频",

        "footer.tagline": "学生 | 程序员 | 领导者 | 运动员",
        "footer.mission": "将热情转化为具体项目",
        "footer.connect": "与我联系",
        "footer.contact": "联系",
        "footer.rights": "© 2025 Shelton Mazinguire Manuel。保留所有权利。"
    }
};

// ==================== SISTEMA DE GERENCIAMENTO ====================
(function() {
    'use strict';
    
    const supportedLangs = Object.keys(TRANSLATIONS);
    const defaultLang = 'pt';
    
    // Função para obter idioma salvo
    function getSavedLanguage() {
        // 1. Verifica localStorage
        const saved = localStorage.getItem('site-lang');
        if (saved && supportedLangs.includes(saved)) {
            return saved;
        }
        
        // 2. Tenta detectar idioma do navegador
        const browserLang = (navigator.language || navigator.userLanguage || '').split('-')[0];
        if (browserLang && supportedLangs.includes(browserLang)) {
            return browserLang;
        }
        
        // 3. Idioma padrão
        return defaultLang;
    }
    
    // Manager principal
    const translationManager = {
        currentLang: getSavedLanguage(),
        
        // Aplica traduções
        applyTranslations() {
            const langData = TRANSLATIONS[this.currentLang] || TRANSLATIONS[defaultLang];
            let translatedCount = 0;
            
            // Atualiza todos os elementos com data-key
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                const translation = langData[key];
                
                if (translation !== undefined) {
                    element.textContent = translation;
                    translatedCount++;
                }
            });
            
            // Atualiza atributo lang do HTML
            document.documentElement.lang = this.currentLang;
            
            // Atualiza título se existir
            if (langData['site.title']) {
                document.title = langData['site.title'];
            }
            
            console.log(`🈯 Traduções aplicadas: ${translatedCount} elementos (${this.currentLang})`);
            return translatedCount;
        },
        
        // Muda idioma
        changeLanguage(lang, persist = true) {
            if (!supportedLangs.includes(lang)) {
                console.warn(`❌ Idioma não suportado: ${lang}`);
                return false;
            }
            
            console.log(`🌐 Alterando idioma para: ${lang}`);
            
            // Atualiza estado
            this.currentLang = lang;
            
            // Salva preferência
            if (persist) {
                localStorage.setItem('site-lang', lang);
            }
            
            // Aplica traduções
            this.applyTranslations();
            
            // Atualiza botão
            this.updateLanguageButton(lang);
            
            // Dispara evento
            window.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: lang }
            }));
            
            console.log(`✅ Idioma alterado para: ${lang}`);
            return true;
        },
        
        // Atualiza botão de idioma
        updateLanguageButton(lang) {
            const button = document.querySelector('.lang-btn');
            if (!button) return;
            
            const flagMap = {
                'pt': '🇵🇹',
                'en': '🇺🇸',
                'es': '🇪🇸',
                'fr': '🇫🇷',
                'ru': '🇷🇺',
                'zh': '🇨🇳'
            };
            
            const codeMap = {
                'pt': 'PT',
                'en': 'EN',
                'es': 'ES',
                'fr': 'FR',
                'ru': 'RU',
                'zh': 'ZH'
            };
            
            const flagSpan = button.querySelector('.flag');
            const codeSpan = button.querySelector('.lang-code');
            
            if (flagSpan) flagSpan.textContent = flagMap[lang] || '🌐';
            if (codeSpan) codeSpan.textContent = codeMap[lang] || lang.toUpperCase();
            
            console.log(`🔄 Botão atualizado para: ${lang}`);
        },
        
        // Dentro do translations.js, localize a função setupDropdown e substitua por:

// Configura dropdown - VERSÃO CORRIGIDA
setupDropdown() {
    const mainButton = document.querySelector('.lang-btn');
    const dropdown = document.querySelector('.lang-dropdown');
    
    if (!mainButton || !dropdown) {
        console.warn('⚠️ Elementos do dropdown não encontrados');
        return;
    }
    
    // Toggle dropdown
    mainButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });
    
    // Opções do dropdown - IMPORTANTE: usar data-lang, não data-set-lang
    dropdown.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const lang = option.getAttribute('data-lang'); // CORRIGIDO: data-lang
            if (lang && this.changeLanguage) {
                this.changeLanguage(lang);
                dropdown.classList.remove('active');
            }
        });
    });
    
    // Fecha ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            dropdown.classList.remove('active');
        }
    });
    
    // Fecha com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            dropdown.classList.remove('active');
        }
    });
    
    console.log('✅ Dropdown configurado corretamente');
},
        // Obtém idiomas suportados
        getSupportedLanguages() {
            return supportedLangs;
        },
        
        // Traduz uma chave específica
        translate(key) {
            return TRANSLATIONS[this.currentLang]?.[key] || TRANSLATIONS[defaultLang]?.[key] || key;
        }
    };
    
    // Expor globalmente
    window.translationManager = translationManager;
    window.changeLanguage = (lang) => translationManager.changeLanguage(lang);
    
    // Inicialização
    function initialize() {
        try {
            // 1. Configura dropdown
            translationManager.setupDropdown();
            
            // 2. Aplica traduções iniciais
            translationManager.applyTranslations();
            
            // 3. Atualiza botão
            translationManager.updateLanguageButton(translationManager.currentLang);
            
            console.log(`✅ translationManager inicializado (${translationManager.currentLang})`);
            console.log(`📊 Idiomas suportados: ${supportedLangs.join(', ')}`);
            
        } catch (error) {
            console.error('❌ Erro ao inicializar translationManager:', error);
        }
    }
    
    // Inicia quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
    
})();
