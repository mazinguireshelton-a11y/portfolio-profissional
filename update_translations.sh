#!/bin/bash

echo "🔧 ATUALIZANDO TRADUÇÕES PARA TODOS OS IDIOMAS..."

# Backup
cp js/translations.js js/translations.js.backup
echo "✅ Backup criado: js/translations.js.backup"

# Português
echo "📝 Atualizando Português..."
sed -i '/"pt": {/,/},/{s/"skills":/"skill1": "Programação",\n        "skill2": "Liderança",\n        "skill3": "Handebol",\n        "skill4": "Português\/Inglês",\n        "skill5": "Inovação",\n        "skills"/}' js/translations.js
sed -i '/"pt": {/,/},/{s/"educationList":/"subject1": "Matemática",\n        "subject2": "Física e Química",\n        "subject3": "Programação Básica",\n        "educationList"/}' js/translations.js
sed -i '/"pt": {/,/},/{s/"benefits":/"benefit1": "Disciplina e foco",\n        "benefit2": "Trabalho em equipe",\n        "benefit3": "Gestão do tempo",\n        "benefit4": "Resiliência mental",\n        "benefit5": "Saúde física",\n        "benefits"/}' js/translations.js

# Inglês
echo "📝 Atualizando Inglês..."
sed -i '/"en": {/,/},/{s/"skills":/"skill1": "Programming",\n        "skill2": "Leadership",\n        "skill3": "Handball",\n        "skill4": "Portuguese\/English",\n        "skill5": "Innovation",\n        "skills"/}' js/translations.js
sed -i '/"en": {/,/},/{s/"educationList":/"subject1": "Mathematics",\n        "subject2": "Physics and Chemistry",\n        "subject3": "Basic Programming",\n        "educationList"/}' js/translations.js
sed -i '/"en": {/,/},/{s/"benefits":/"benefit1": "Discipline and focus",\n        "benefit2": "Teamwork",\n        "benefit3": "Time management",\n        "benefit4": "Mental resilience",\n        "benefit5": "Physical health",\n        "benefits"/}' js/translations.js

# Espanhol
echo "📝 Atualizando Espanhol..."
sed -i '/"es": {/,/},/{s/"skills":/"skill1": "Programación",\n        "skill2": "Liderazgo",\n        "skill3": "Balonmano",\n        "skill4": "Portugués\/Inglés",\n        "skill5": "Innovación",\n        "skills"/}' js/translations.js
sed -i '/"es": {/,/},/{s/"educationList":/"subject1": "Matemáticas",\n        "subject2": "Física y Química",\n        "subject3": "Programación Básica",\n        "educationList"/}' js/translations.js
sed -i '/"es": {/,/},/{s/"benefits":/"benefit1": "Disciplina y enfoque",\n        "benefit2": "Trabajo en equipo",\n        "benefit3": "Gestión del tiempo",\n        "benefit4": "Resiliencia mental",\n        "benefit5": "Salud física",\n        "benefits"/}' js/translations.js

# Russo
echo "📝 Atualizando Russo..."
sed -i '/"ru": {/,/},/{s/"skills":/"skill1": "Программирование",\n        "skill2": "Лидерство",\n        "skill3": "Гандбол",\n        "skill4": "Португальский\/Английский",\n        "skill5": "Инновации",\n        "skills"/}' js/translations.js
sed -i '/"ru": {/,/},/{s/"educationList":/"subject1": "Математика",\n        "subject2": "Физика и Химия",\n        "subject3": "Основы программирования",\n        "educationList"/}' js/translations.js
sed -i '/"ru": {/,/},/{s/"benefits":/"benefit1": "Дисциплина и фокус",\n        "benefit2": "Командная работа",\n        "benefit3": "Управление временем",\n        "benefit4": "Психическая устойчивость",\n        "benefit5": "Физическое здоровье",\n        "benefits"/}' js/translations.js

# Chinês
echo "📝 Atualizando Chinês..."
sed -i '/"zh": {/,/},/{s/"skills":/"skill1": "编程",\n        "skill2": "领导力",\n        "skill3": "手球",\n        "skill4": "葡萄牙语\/英语",\n        "skill5": "创新",\n        "skills"/}' js/translations.js
sed -i '/"zh": {/,/},/{s/"educationList":/"subject1": "数学",\n        "subject2": "物理和化学",\n        "subject3": "基础编程",\n        "educationList"/}' js/translations.js
sed -i '/"zh": {/,/},/{s/"benefits":/"benefit1": "纪律和专注",\n        "benefit2": "团队合作",\n        "benefit3": "时间管理",\n        "benefit4": "心理韧性",\n        "benefit5": "身体健康",\n        "benefits"/}' js/translations.js

echo "🎉 TRADUÇÕES ATUALIZADAS PARA TODOS OS 5 IDIOMAS!"
echo "📁 Backup salvo como: js/translations.js.backup"
