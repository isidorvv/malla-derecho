// script.js

// 1. Datos de la Malla Curricular de Derecho UAH
// Aquí se define la estructura completa de la malla, incluyendo nombres, códigos,
// créditos, descripciones y, lo más importante, los prerrequisitos.
// Los prerrequisitos se basan en la lista proporcionada por el usuario.
// Los créditos del Primer Semestre han sido actualizados con la información proporcionada.
// Para los semestres del 2° al 10°, se ha asignado un valor por defecto de 5 créditos.
// Si obtienes los créditos exactos para los semestres restantes, puedes actualizarlos directamente aquí.
const curriculumData = [
    {
        semester: 1,
        courses: [
            // Créditos actualizados según la imagen proporcionada
            { code: 'INT_DER', name: 'Introducción al Derecho', credits: 8, prerequisites: [], description: 'Fundamentos básicos del sistema jurídico y sus principales ramas.' },
            { code: 'TPC_I', name: 'Teoría Política y Constitucional (TPC)', credits: 8, prerequisites: [], description: 'Estudio de los principios fundamentales de la teoría política y constitucional.' },
            { code: 'EXP_ORAL', name: 'Expresión Oral', credits: 7, prerequisites: [], description: 'Desarrollo de habilidades comunicativas orales para el ámbito jurídico.' },
            { code: 'ESC_ACAD', name: 'Escritura Académica e Investigación Jurídica', credits: 8, prerequisites: [], description: 'Aprendizaje de técnicas de escritura e investigación aplicadas al derecho.' },
            { code: 'HIS_CULT_MOD', name: 'Historia de la Cultura Moderna', credits: 8, prerequisites: [], description: 'Análisis de los procesos históricos y culturales que influyeron en el pensamiento moderno.' },
            { code: 'INGLES_I', name: 'Inglés I', credits: 10, prerequisites: [], description: 'Adquisición de los fundamentos del idioma inglés.' }
        ]
    },
    {
        semester: 2,
        courses: [
            // Créditos por defecto (5). Actualizar si se obtiene información precisa.
            { code: 'DER_PRIV_IDP', name: 'Introducción al Derecho Privado I (D° Privado IDP)', credits: 5, prerequisites: ['INT_DER'], description: 'Primer acercamiento a los principios y conceptos del derecho privado.' }, // Prereq: Introducción al Derecho
            { code: 'CONST_I_FUND', name: 'Consti I: D° Fundamentales', credits: 5, prerequisites: ['TPC_I'], description: 'Estudio del Derecho Constitucional enfocado en los derechos fundamentales.' }, // Prereq: TPC
            { code: 'INT_ABOGACIA', name: 'Introducción a la Abogacía', credits: 5, prerequisites: [], description: 'Exploración de la profesión legal y sus implicaciones éticas y prácticas.' }, // Abre a: Nada
            { code: 'TEO_GRAL_DER', name: 'Teoría Gral. Del Derecho Intro. Al D°', credits: 5, prerequisites: ['INT_DER'], description: 'Profundización en la teoría general del derecho y su relación con la introducción al derecho.' }, // Prereq: Introducción al Derecho (Teoría General Del Derecho)
            { code: 'HIS_IDEOLOGIAS', name: 'Historia de las Ideologías en Chile', credits: 5, prerequisites: ['HIS_CULT_MOD'], description: 'Análisis de las principales corrientes ideológicas que han marcado la historia chilena.' }, // Prereq: Historia de la Cultura Moderna
            { code: 'INGLES_II', name: 'Inglés II', credits: 5, prerequisites: ['INGLES_I'], description: 'Continuación del aprendizaje del idioma inglés, con énfasis en vocabulario jurídico.' } // Prereq: Inglés I
        ]
    },
    {
        semester: 3,
        courses: [
            // Créditos por defecto (5). Actualizar si se obtiene información precisa.
            { code: 'CIV_I_PYB', name: 'Civ I: Persona y Bienes', credits: 5, prerequisites: ['DER_PRIV_IDP'], description: 'Estudio del derecho civil referente a las personas y los bienes.' }, // Prereq: Introducción al Derecho Privado I
            { code: 'CONST_II_REC', name: 'Consti II: Recursos', credits: 5, prerequisites: ['CONST_I_FUND'], description: 'Análisis de los recursos constitucionales y su aplicación.' }, // Prereq: Consti I: D° Fundamentales
            { code: 'PROC_I_INST', name: 'Procesal I: Instituciones Procesales', credits: 5, prerequisites: ['INT_ABOGACIA'], description: 'Introducción a las instituciones fundamentales del derecho procesal.' }, // Prereq: Introducción a la Abogacía
            { code: 'TEO_JUSTICIA', name: 'Teoría de la Justicia', credits: 5, prerequisites: ['TEO_GRAL_DER'], description: 'Exploración de las diferentes teorías sobre la justicia y su impacto en el derecho.' }, // Prereq: Teoría Gral. Del Derecho
            { code: 'SOCIOLOGIA', name: 'Sociología', credits: 5, prerequisites: ['HIS_IDEOLOGIAS'], description: 'Estudio de la sociedad y sus estructuras, con énfasis en el contexto jurídico.' }, // Prereq: Historia de las Ideologías en Chile
            { code: 'OFT_OFG_S3', name: 'OFT/OFG', credits: 5, prerequisites: [], description: 'Optativo de Formación Teológica o General.' } // Abre a: Nada
        ]
    },
    {
        semester: 4,
        courses: [
            // Créditos por defecto (5). Actualizar si se obtiene información precisa.
            { code: 'CIV_II_AJ', name: 'Civ II: Acto Jurídico', credits: 5, prerequisites: ['CIV_I_PYB'], description: 'Análisis del acto jurídico como fuente de derechos y obligaciones.' }, // Prereq: Civ I: Persona y Bienes
            { code: 'CONST_III_ORG', name: 'Consti III: Orgánico', credits: 5, prerequisites: ['CONST_II_REC'], description: 'Estudio de la organización constitucional y sus instituciones.' }, // Prereq: Consti II: Recursos
            { code: 'PROC_II_ORD', name: 'Procesal II: Procedimiento Ordinario', credits: 5, prerequisites: ['PROC_I_INST'], description: 'Profundización en el procedimiento ordinario civil y su relación con Procesal I.' }, // Prereq: Procesal I: Instituciones Procesales
            { code: 'DER_JUST_SOC', name: 'Derecho y Justicia Social', credits: 5, prerequisites: ['TEO_JUSTICIA'], description: 'Exploración de la relación entre el derecho y la justicia social.' }, // Prereq: Teoría de la justicia
            { code: 'ECONOMIA_POL', name: 'Economía Política', credits: 5, prerequisites: [], description: 'Estudio de los principios económicos y su influencia en el ámbito político y jurídico.' }, // Abre a: Nada
            { code: 'OFT_OFG_S4', name: 'OFT/OFG', credits: 5, prerequisites: [], description: 'Optativo de Formación Teológica o General.' } // Abre a: Nada
        ]
    },
    {
        semester: 5, // Ciclo de Profundización
        courses: [
            // Créditos por defecto (5). Actualizar si se obtiene información precisa.
            { code: 'CIV_III_OBLIG', name: 'Civ III: Obligaciones', credits: 5, prerequisites: ['CIV_II_AJ'], description: 'Estudio de las obligaciones en el derecho civil.' }, // Prereq: Civ II: Acto Jurídico
            { code: 'D_ADMIN_I', name: 'D° Admin I', credits: 5, prerequisites: ['CONST_I_FUND'], description: 'Introducción al Derecho Administrativo, con base en el Derecho Constitucional.' }, // Prereq: Consti I: D° Fundamentales
            { code: 'PROC_III_EJEC', name: 'Procesal III: J. Ejecutivo', credits: 5, prerequisites: ['PROC_II_ORD'], description: 'Análisis del procedimiento ejecutivo en el derecho procesal.' }, // Prereq: Procesal II: Procedimiento Ordinario
            { code: 'LABORAL_I', name: 'Laboral I: D° individual', credits: 5, prerequisites: [], description: 'Estudio del derecho laboral individual y las relaciones de trabajo.' }, // Abre a: Clínica I
            { code: 'ECONOMICO', name: 'Económico', credits: 5, prerequisites: ['ECONOMIA_POL'], description: 'Profundización en conceptos económicos aplicados al derecho.' }, // Prereq: Economía Política (Asunción por secuencia lógica)
            { code: 'PENAL_I_PG', name: 'Penal I: Parte General', credits: 5, prerequisites: ['CONST_II_REC'], description: 'Estudio de los principios generales del derecho penal, con base constitucional.' } // Prereq: Consti II: Recursos
        ]
    },
    {
        semester: 6,
        courses: [
            // Créditos por defecto (5). Actualizar si se obtiene información precisa.
            { code: 'CIV_IV_RESP', name: 'Civ IV: Responsabilidad', credits: 5, prerequisites: ['CIV_III_OBLIG'], description: 'Análisis de la responsabilidad civil y sus tipos.' }, // Prereq: Civ III: Obligaciones
            { code: 'D_ADMIN_II', name: 'D° Admin II', credits: 5, prerequisites: ['D_ADMIN_I'], description: 'Continuación del estudio del Derecho Administrativo.' }, // Prereq: D° Admin I
            { code: 'PROC_IV_REC', name: 'Proce IV: Recursos', credits: 5, prerequisites: ['PROC_III_EJEC'], description: 'Estudio de los recursos procesales y su aplicación.' }, // Prereq: Proce III: J. Ejecutivo
            { code: 'LABORAL_II', name: 'Laboral II: D° Colectivo', credits: 5, prerequisites: ['LABORAL_I'], description: 'Análisis del derecho laboral colectivo y las relaciones sindicales.' }, // Prereq: Laboral I: D° individual (asumido por secuencia, aunque el archivo dice "nada")
            { code: 'COMERCIAL_I', name: 'Comercial I', credits: 5, prerequisites: ['CIV_I_PYB'], description: 'Introducción al derecho comercial, con base en el derecho civil.' }, // Prereq: Civ I: Persona y Bienes
            { code: 'PENAL_II_PE', name: 'Penal II: Parte Gral y especial', credits: 5, prerequisites: ['PENAL_I_PG'], description: 'Estudio de los delitos en particular y sus características.' } // Prereq: Penal I: Parte General
        ]
    },
    {
        semester: 7,
        courses: [
            // Créditos por defecto (5). Actualizar si se obtiene información precisa.
            { code: 'CIV_V_AJ_PE', name: 'Civ V: Actos jurídicos Pte. Especial', credits: 5, prerequisites: ['CIV_IV_RESP'], description: 'Profundización en los actos jurídicos especiales.' }, // Prereq: Civ IV: Responsabilidad
            { code: 'DIP', name: 'DIP', credits: 5, prerequisites: ['CONST_I_FUND'], description: 'Estudio del Derecho Internacional Público, con base constitucional.' }, // Prereq: Consti I: D° Fundamentales
            { code: 'PROC_V_PENAL', name: 'Procesal V: Proceso Penal', credits: 5, prerequisites: ['PROC_IV_REC', 'PENAL_II_PE'], description: 'Análisis del proceso penal y su relación con Procesal IV y Penal II.' }, // Prereq: Proce IV: Recursos y Penal II: Parte Gral y especial
            { code: 'TRIBUTARIO', name: 'Tributario', credits: 5, prerequisites: ['ECONOMICO'], description: 'Análisis del derecho tributario y su relación con la economía.' }, // Prereq: Económico
            { code: 'COMERCIAL_II', name: 'Comercial II', credits: 5, prerequisites: ['CIV_III_OBLIG', 'COMERCIAL_I'], description: 'Profundización en el derecho comercial, con base en Comercial I y Civil III.' }, // Prereq: Civ III: Obligaciones y Comercial I
            { code: 'PENAL_III_PTE_ESP', name: 'Penal III: Pte. Especial', credits: 5, prerequisites: ['PENAL_II_PE'], description: 'Continuación del estudio de la parte especial del derecho penal.' } // Prereq: Penal II: Parte Gral y especial
        ]
    },
    {
        semester: 8,
        courses: [
            // Créditos por defecto (5). Actualizar si se obtiene información precisa.
            { code: 'CIV_VI_FYSU', name: 'Civ VI: Familia y sucesorio', credits: 5, prerequisites: ['CIV_III_OBLIG'], description: 'Estudio del derecho de familia y sucesorio.' }, // Prereq: Civ III: Obligaciones
            { code: 'COMPARADO', name: 'Comparado', credits: 5, prerequisites: [], description: 'Análisis comparativo de diferentes sistemas jurídicos.' }, // Abre a: Nada
            { code: 'D_PROBATORIO', name: 'Derecho Probatorio', credits: 5, prerequisites: ['PROC_V_PENAL'], description: 'Estudio de la prueba en el proceso judicial.' }, // Prereq: Procesal V proceso penal (asumido por secuencia, no explicitado en el documento "abre a")
            { code: 'ETICA_PROF_JUR', name: 'Ética y Profesiones Jurídicas', credits: 5, prerequisites: [], description: 'Análisis de la ética profesional en el ámbito jurídico.' }, // Abre a: Nada
            { code: 'D_CONCURSAL', name: 'D° Concursal', credits: 5, prerequisites: ['COMERCIAL_II'], description: 'Estudio del derecho concursal y los procedimientos de insolvencia.' }, // Prereq: Comercial II
            { code: 'DIPRIV', name: 'DIPRIV', credits: 5, prerequisites: ['CIV_III_OBLIG'], description: 'Estudio del derecho internacional privado.' } // Prereq: Civ III: Obligaciones
        ]
    },
    {
        semester: 9,
        courses: [
            // Créditos por defecto (5). Actualizar si se obtiene información precisa.
            { code: 'CLINICA_I', name: 'Clínica I', credits: 5, prerequisites: ['LABORAL_I', 'CIV_IV_RESP', 'PROC_IV_REC'], description: 'Aplicación práctica del derecho en casos reales.' }, // Prereq: Laboral I, Civ IV: Responsabilidad, Proce IV: Recursos
            { code: 'MET_AN_CASOS_I', name: 'Metod. De Análisis de Casos I', credits: 5, prerequisites: ['COMPARADO'], description: 'Desarrollo de habilidades para el análisis y resolución de problemas jurídicos.' }, // Prereq: Comparado (asumido por secuencia)
            { code: 'LIT_EST_I', name: 'Litigación Estratégica I', credits: 5, prerequisites: ['D_PROBATORIO'], description: 'Estudio de estrategias de litigación y teoría del caso en el ámbito penal.' }, // Prereq: Derecho Probatorio (asumido por secuencia)
            { code: 'INV_JUR_APLIC', name: 'Investigación Jurídica Aplicada', credits: 5, prerequisites: [], description: 'Desarrollo de proyectos de investigación aplicada en derecho.' }, // Abre a: Nada
            { code: 'OPT_FORM_COMP_S9_1', name: 'Optativo Formación Complementaria', credits: 5, prerequisites: [], description: 'Curso optativo para complementar la formación académica.' }, // Asumido sin prerrequisitos
            { code: 'OPT_FORM_COMP_S9_2', name: 'Optativo Formación Complementaria', credits: 5, prerequisites: [], description: 'Segundo curso optativo para complementar la formación académica.' } // Asumido sin prerrequisitos
        ]
    },
    {
        semester: 10,
        courses: [
            // Créditos por defecto (5). Actualizar si se obtiene información precisa.
            { code: 'CLINICA_II', name: 'Clínica II', credits: 5, prerequisites: ['CLINICA_I'], description: 'Continuación de la aplicación práctica del derecho en casos reales.' }, // Prereq: Clínica I
            { code: 'MET_AN_CASOS_II', name: 'Metod. De Análisis de Casos II', credits: 5, prerequisites: ['MET_AN_CASOS_I'], description: 'Profundización en el análisis de sentencias judiciales.' }, // Prereq: Metod. De Análisis de Casos I
            { code: 'LIT_EST_II', name: 'Litigación Estratégica II', credits: 5, prerequisites: ['LIT_EST_I'], description: 'Desarrollo de habilidades de litigación avanzada y negociación.' }, // Prereq: Litigación Estratégica I
            { code: 'OPT_FORM_COMP_S10_1', name: 'Optativo Formación Complementaria', credits: 5, prerequisites: [], description: 'Curso optativo para complementar la formación académica.' }, // Abre a: Nada
            { code: 'OPT_FORM_COMP_S10_2', name: 'Optativo Formación Complementaria', credits: 5, prerequisites: [], description: 'Segundo curso optativo para complementar la formación académica.' } // Abre a: Nada
        ]
    }
];

// 2. Elementos del DOM (No necesitan cambios)
const curriculumGrid = document.getElementById('curriculum-grid');
const overallProgressBar = document.getElementById('overall-progress');
const progressText = document.getElementById('progress-text');
const showHideDetailsBtn = document.getElementById('show-hide-details');
const clearProgressBtn = document.getElementById('clear-progress');

let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses')) || {}; // Cargar desde LocalStorage

// 3. Funciones de Rendereado (Dibujar la Malla - No necesitan cambios)
function renderCurriculum() {
    curriculumGrid.innerHTML = ''; // Limpiar antes de renderizar
    curriculumData.forEach(semesterData => {
        const semesterSection = document.createElement('section');
        semesterSection.classList.add('semester');
        semesterSection.id = `semester-${semesterData.semester}`;
        semesterSection.innerHTML = `<h2>Semestre ${semesterData.semester}</h2><div class="course-container"></div>`;

        const courseContainer = semesterSection.querySelector('.course-container');
        semesterData.courses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.classList.add('course');
            courseDiv.dataset.code = course.code;
            courseDiv.dataset.credits = course.credits;
            courseDiv.dataset.prerequisites = JSON.stringify(course.prerequisites); // Almacenar como JSON string
            courseDiv.dataset.description = course.description;

            // Añadir clase 'approved' si el curso ya está aprobado
            if (approvedCourses[course.code]) {
                courseDiv.classList.add('approved');
            }

            courseDiv.innerHTML = `
                <h3>${course.name}</h3>
                <p>Créditos: ${course.credits}</p>
                <button class="mark-as-approved">${approvedCourses[course.code] ? 'Aprobado' : 'Marcar Aprobado'}</button>
                <div class="course-details">
                    <p>Prerrequisitos: ${course.prerequisites.length > 0 ? course.prerequisites.map(prereqCode => findCourseName(prereqCode)).join(', ') : 'Ninguno'}</p>
                    <p>Descripción: ${course.description}</p>
                </div>
            `;
            courseContainer.appendChild(courseDiv);

            // Añadir evento al botón de marcar como aprobado
            courseDiv.querySelector('.mark-as-approved').addEventListener('click', (event) => {
                event.stopPropagation(); // Evitar que el clic en el botón afecte el clic en el curso
                toggleCourseApproval(course.code);
            });

            // Añadir evento para mostrar/ocultar detalles y resaltar prerrequisitos
            courseDiv.addEventListener('click', () => {
                toggleCourseDetails(courseDiv);
                highlightPrerequisites(course.code);
                highlightDependents(course.code);
            });
        });
        curriculumGrid.appendChild(semesterSection);
    });
    updateProgressBar();
}

// Función auxiliar para encontrar el nombre del curso por su código
function findCourseName(code) {
    for (const semester of curriculumData) {
        for (const course of semester.courses) {
            if (course.code === code) {
                return course.name;
            }
        }
    }
    return code; // Si no lo encuentra, devuelve el código
}


// 4. Funciones de Interactividad (No necesitan cambios)
function toggleCourseApproval(courseCode) {
    if (approvedCourses[courseCode]) {
        delete approvedCourses[courseCode];
    } else {
        approvedCourses[courseCode] = true;
    }
    localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses)); // Guardar en LocalStorage
    renderCurriculum(); // Volver a renderizar para actualizar el estado visual
}

function updateProgressBar() {
    let totalCredits = 0;
    let approvedCredits = 0;

    curriculumData.forEach(semesterData => {
        semesterData.courses.forEach(course => {
            totalCredits += course.credits;
            if (approvedCourses[course.code]) {
                approvedCredits += course.credits;
            }
        });
    });

    const progressPercentage = totalCredits > 0 ? (approvedCredits / totalCredits) * 100 : 0;
    overallProgressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `${Math.round(progressPercentage)}% Completado`;
}

function toggleCourseDetails(courseDiv) {
    // Si ya hay detalles mostrándose, ocultarlos primero
    document.querySelectorAll('.course.show-details').forEach(div => {
        if (div !== courseDiv) {
            div.classList.remove('show-details');
        }
    });
    courseDiv.classList.toggle('show-details');
}

function highlightPrerequisites(selectedCourseCode) {
    // Limpiar resaltados anteriores
    document.querySelectorAll('.course.highlight-prereqs, .course.highlight-dependents').forEach(c => {
        c.classList.remove('highlight-prereqs', 'highlight-dependents');
    });

    const selectedCourseData = findCourseData(selectedCourseCode);
    if (!selectedCourseData) return;

    // Resaltar prerrequisitos
    selectedCourseData.prerequisites.forEach(prereqCode => {
        const prereqDiv = document.querySelector(`.course[data-code="${prereqCode}"]`);
        if (prereqDiv) {
            prereqDiv.classList.add('highlight-prereqs');
        }
    });
}

function highlightDependents(selectedCourseCode) {
    curriculumData.forEach(semesterData => {
        semesterData.courses.forEach(course => {
            if (course.prerequisites.includes(selectedCourseCode)) {
                const dependentDiv = document.querySelector(`.course[data-code="${course.code}"]`);
                if (dependentDiv) {
                    dependentDiv.classList.add('highlight-dependents');
                }
            }
        });
    });
}

function findCourseData(code) {
    for (const semester of curriculumData) {
        for (const course of semester.courses) {
            if (course.code === code) {
                return course;
            }
        }
    }
    return null;
}


function clearAllProgress() {
    if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.')) {
        localStorage.removeItem('approvedCourses');
        approvedCourses = {};
        renderCurriculum();
    }
}


// 5. Event Listeners para los botones de control (No necesitan cambios)
showHideDetailsBtn.addEventListener('click', () => {
    document.querySelectorAll('.course').forEach(courseDiv => {
        courseDiv.classList.toggle('show-details');
    });
});

clearProgressBtn.addEventListener('click', clearAllProgress);


// 6. Inicialización (No necesitan cambios)
document.addEventListener('DOMContentLoaded', renderCurriculum); // Cargar la malla al cargar la página