    // Load gallery data - SUA ESTRUTURA EXATA
    loadGalleryData() {
        // ================== YOUNG LIFE - FOTOS ==================
        this.galleries.youngLife.photos = [
            // GRADUAÇÃO
            {
                id: 1,
                src: 'assets/images/lideranca/graduacao/FB_IMG_1730052671087_1.jpg',
                alt: 'Cerimônia de graduação Young Life',
                title: 'Cerimônia de Graduação',
                description: 'Momento especial de formatura e reconhecimento dos jovens',
                category: 'graduacao',
                type: 'photo',
                date: '2024-01-15'
            },

            // ACAMPAMENTO 1
            {
                id: 2,
                src: 'assets/images/lideranca/acampamento/1760900646428.jpg',
                alt: 'Primeiro acampamento do ano',
                title: 'Acampamento 1 - Atividades',
                description: 'Primeiro acampamento do ano com jogos e integração',
                category: 'acampamento1', 
                type: 'photo',
                date: '2024-02-20'
            },
            {
                id: 3,
                src: 'assets/images/lideranca/acampamento/1760900664661.jpg',
                alt: 'Momento do acampamento',
                title: 'Acampamento 1 - Integração',
                description: 'Jovens participando de atividades recreativas',
                category: 'acampamento1',
                type: 'photo', 
                date: '2024-02-20'
            },
            {
                id: 4,
                src: 'assets/images/lideranca/acampamento/1760900627954.jpg',
                alt: 'Atividade em grupo',
                title: 'Acampamento 1 - Grupo',
                description: 'Trabalho em equipe durante as atividades',
                category: 'acampamento1',
                type: 'photo',
                date: '2024-02-20'
            },
            {
                id: 5,
                src: 'assets/images/lideranca/acampamento/1760900609363.jpg',
                alt: 'Momento de diversão',
                title: 'Acampamento 1 - Diversão',
                description: 'Jovens se divertindo nas atividades do acampamento',
                category: 'acampamento1',
                type: 'photo',
                date: '2024-02-20'
            },
            {
                id: 6,
                src: 'assets/images/lideranca/acampamento/1760900671898.jpg',
                alt: 'Atividade prática',
                title: 'Acampamento 1 - Prática',
                description: 'Desenvolvendo habilidades através de atividades',
                category: 'acampamento1',
                type: 'photo',
                date: '2024-02-20'
            },
            {
                id: 7,
                src: 'assets/images/lideranca/acampamento/1760900641987.jpg',
                alt: 'Encerramento do acampamento',
                title: 'Acampamento 1 - Encerramento',
                description: 'Momento final do primeiro acampamento',
                category: 'acampamento1',
                type: 'photo',
                date: '2024-02-20'
            },

            // ACAMPAMENTO 2
            {
                id: 8,
                src: 'assets/images/lideranca/acampamento2/1760900586249.jpg',
                alt: 'Segundo acampamento do ano',
                title: 'Acampamento 2 - Aventura',
                description: 'Segundo acampamento com novas atividades e desafios',
                category: 'acampamento2',
                type: 'photo',
                date: '2024-04-05'
            },
            {
                id: 9,
                src: 'assets/images/lideranca/acampamento2/1760900582432.jpg',
                alt: 'Trabalho em equipe',
                title: 'Acampamento 2 - Equipe',
                description: 'Desenvolvendo habilidades de trabalho em grupo',
                category: 'acampamento2',
                type: 'photo',
                date: '2024-04-05'
            },
            {
                id: 10,
                src: 'assets/images/lideranca/acampamento2/1760900601605.jpg',
                alt: 'Atividade do acampamento 2',
                title: 'Acampamento 2 - Dinâmica',
                description: 'Nova dinâmica aplicada no segundo acampamento',
                category: 'acampamento2',
                type: 'photo',
                date: '2024-04-05'
            },

            // CLUBE DE JOVENS
            {
                id: 11,
                src: 'assets/images/lideranca/clube-jovens/1760900215546.jpg',
                alt: 'Encontro do clube de jovens',
                title: 'Clube de Jovens - Encontro',
                description: 'Reunião semanal do clube para atividades e discussões',
                category: 'clube-jovens',
                type: 'photo',
                date: '2024-03-10'
            },
            {
                id: 12,
                src: 'assets/images/lideranca/clube-jovens/1760900217415.jpg',
                alt: 'Atividade do clube',
                title: 'Clube de Jovens - Dinâmica',
                description: 'Atividade prática desenvolvendo liderança',
                category: 'clube-jovens',
                type: 'photo',
                date: '2024-03-17'
            },
            {
                id: 13,
                src: 'assets/images/lideranca/clube-jovens/IMG_20250928_192956_706.webp',
                alt: 'Momento especial do clube',
                title: 'Clube de Jovens - Momento',
                description: 'Registro especial das atividades do clube',
                category: 'clube-jovens',
                type: 'photo',
                date: '2024-03-24'
            },
            {
                id: 14,
                src: 'assets/images/lideranca/clube-jovens/1760900211523.jpg',
                alt: 'Discussão no clube',
                title: 'Clube de Jovens - Discussão',
                description: 'Momento de debate e troca de ideias',
                category: 'clube-jovens',
                type: 'photo',
                date: '2024-04-01'
            },
            {
                id: 15,
                src: 'assets/images/lideranca/clube-jovens/1760900206345.jpg',
                alt: 'Atividade final do clube',
                title: 'Clube de Jovens - Encerramento',
                description: 'Última atividade do ciclo do clube',
                category: 'clube-jovens',
                type: 'photo',
                date: '2024-04-08'
            }
        ];

        // ================== YOUNG LIFE - VÍDEOS ==================
        this.galleries.youngLife.videos = [
            {
                id: 1,
                src: 'assets/videos/lideranca/graduacao/FDownloader_Net_AQN1iVdhc2dCuf65M4PBbWLWctYtXvdDqqAgql5OAvnGAAhAJYw5LXqs2RZ8dtafW21KtpWLXca18l5FPZh_3Sh_360p_SD_V1.mp4',
                poster: 'assets/images/lideranca/graduacao/FB_IMG_1730052671087_1.jpg',
                title: 'Cerimônia de Graduação',
                description: 'Vídeo completo da formatura dos jovens',
                category: 'graduacao',
                type: 'video',
                duration: '2:30',
                date: '2024-01-15'
            }
        ];

        // ================== ESPORTES - FOTOS ==================
        this.galleries.esportes.photos = [
            {
                id: 1,
                src: 'assets/images/esportes/jogos/jogo-1.jpg',
                alt: 'Jogo de handebol escolar',
                title: 'Jogo do Campeonato',
                description: 'Partida decisiva do campeonato escolar',
                category: 'jogos',
                type: 'photo',
                date: '2024-03-10'
            }
        ];

        // ================== ESPORTES - VÍDEOS ==================  
        this.galleries.esportes.videos = [
            {
                id: 1,
                src: 'assets/videos/esportes/jogos/jogo-decisivo.mp4',
                poster: 'assets/images/esportes/jogos/jogo-poster-1.jpg',
                title: 'Jogo Decisivo',
                description: 'Melhores momentos do jogo mais importante',
                category: 'jogos',
                type: 'video',
                duration: '4:20',
                date: '2024-03-15'
            }
        ];

        this.renderGalleries();
    }
