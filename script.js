
// Data
const bootcampData = {
    title: "Bootcamp Inteligencia Artificial",
    weeks: 36,
    modules: [
        { name: "Módulo 1", start: 1, end: 7 }, 
        { name: "Módulo 2", start: 8, end: 15 }, 
        { name: "Módulo 3", start: 17, end: 33 }, 
        { name: "End", start: 33, end: 36 }, 
    ],
    stack: [
        {
            type: "Competencia",
            name: "Gestionar equipos de forma eficiente",
            start: 1,
            end: 36,
        },
        {
            type: "Competencia",
            name: "Gestionar proyectos de desarrollo con herramientas de control de versiones.",
            start: 1,
            end: 36,
        },
        {
            type: "Competencia",
            name: "Ser capaz de desarrollar un programa en Python",
            start: 1,
            end: 36,
        },
        {
            type: "Competencia",
            name: "Diseñar y gestionar bases de datos de manera eficiente",
            start: 1,
            end: 36,
        },
        {
            type: "Competencia",
            name: "Implementar tests para garantizar la calidad del software",
            start: 1,
            end: 36,
        },
        {
            type: "Competencia",
            name: "Implementar un sistema de webscrapping para la recopilación de datos",
            start: 1,
            end: 36,
        },
        {
            type: "Competencia",
            name: "Desplegar y gestionar aplicaciones en entornos de nube",
            start: 1,
            end: 36,
        },
        {
            type: "Course",
            name: "<a href='https://www.netacad.com/courses/python-essentials-1?courseLang=en-US'>Curso de Python</a>",
            start: 1,
            end: 7,
        },
        {
            type: "Proyecto",
            name: "App con Python | <i class='bi bi-person-fill'></i>",
            start: 1,
            end: 2,
        },
        {
            type: "Proyecto",
            name: "Un CRUD | <i class='bi bi-people-fill'></i>",
            start: 3,
            end: 5,
        },
        {
            type: "Proyecto",
            name: "Web Scraping | <i class='bi bi-person-fill'></i>",
            start: 6,
            end: 7,
        },
        {
            type: "Competencia",
            name: "Evaluar conjuntos de datos utilizando herramientas de análisis y de visualización de datos",
            start: 8,
            end: 36,
        },
        {
            type: "Competencia",
            name: "Aplicar algoritmos de aprendizaje automático según el problema, identificando y resolviendo problemas clásicos de inteligencia artificial",
            start: 8,
            end: 36,
        },
        {
            type: "Course",
            name: "<a href='https://ti.to/saturdaysai/data-science-fundamentals/'>Curso de Machine Learning enfocado en Data Science</a>",
            start: 8,
            end: 15,
        },
        {
            type: "Proyecto",
            name: "Datathon | <i class='bi bi-person-fill'></i>",
            start: 8,
            end: 8,
        },
        {
            type: "Proyecto",
            name: "Problema de regresión | <i class='bi bi-person-fill'></i>",
            start: 9,
            end: 10,
        },
        {
            type: "Proyecto",
            name: "Problema de clasificación | <i class='bi bi-person-fill'></i>",
            start: 11,
            end: 12,
        },
        {
            type: "Proyecto",
            name: "Machine learning avanzado | <i class='bi bi-person-fill'></i>",
            start: 13,
            end: 15,
        },
        {
            type: "Transición",
            name: "Transición flexible",
            start: 16,
            end: 19,
        },
        {
            type: "Competencia",
            name: "Modificar los parámetros y componentes de la inteligencia artificial para mejorar su rendimiento",
            start: 20,
            end: 36,
        },
        {
            type: "Competencia",
            name: "Crear un modelo de inteligencia artificial utilizando técnicas y algoritmos de Procesamiento del Lenguaje Natural",
            start: 20,
            end: 36,
        },
        {
            type: "Competencia",
            name: "Crear un modelo de inteligencia artificial utilizando técnicas y algoritmos de Computer Vision",
            start: 20,
            end: 36,
        },
        {
            type: "Course",
            name: "<a href='https://learn.microsoft.com/es-es/credentials/certifications/azure-ai-fundamentals/?practice-assessment-type=certification'>Certificaciones de Azure</a>",
            start: 20,
            end: 32,
        },
        {
            type: "Proyecto",
            name: "Tracks: Data Engineer (Spark, Redis, Kafka, etc.), Data Analyst (Power BI, Tableau, Dash, etc.), AI Developer (Keras, MLops, etc.) | <i class='bi bi-people-fill'></i>",
            start: 20,
            end: 23,
        },
        {
            type: "Proyecto",
            name: "NLP (Youtube comments) | <i class='bi bi-people-fill'></i>",
            start: 24,
            end: 26,
        },
        {
            type: "Proyecto",
            name: "LLM (Rag + agentes) | <i class='bi bi-people-fill'></i>",
            start: 27,
            end: 29,
        },
        {
            type: "Proyecto",
            name: "Computer vision | <i class='bi bi-people-fill'></i>",
            start: 30,
            end: 32,
        },
        {
            type: "Proyecto",
            name: "Proyectos Finales | <i class='bi bi-people-fill'></i>",
            start: 33,
            end: 36,
        },
    ],
    links:  {
        googleCalendar: "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FMadrid&src=Y18zMDQ4MjU4NDYxYWE5MTk2YzE3YjgyNDc4OTk5NDk2MzNjNzMzZDk4MzhlZjFhZTQ1YzMzZTQ5ZDRkZGU5ZGZmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4",
        zoom: "https://us02web.zoom.us/j/84219607621",
        classroom: "https://classroom.google.com/c/NzQ1NDc4OTU1MzQ4?cjc=qhpavje",
        discord: "https://discord.gg/u54GR4D3",
        github: "https://github.com/Factoria-F5-dev"
    },
    competencies: [
        {
            name: "Gestionar equipos de forma eficiente",
            metric: ["Planificación y gestión del proyecto"],
            indicator: {
                typeBasic: [
                    "Uso de roles Definidos", 
                    "Uso de kanban / burndown chart", 
                    "Uso de sprint backlog",
                    "Uso de herramientas de gestión de proyectos (Trello, Jira, etc.)",
                    "Uso de estimación de tareas",
                    "Uso de Actas de reuniones",
                    "Uso de Daily",
                    "Uso de Retros",
                    "Prioriza al equipo",
                    "Uso de Historias de usuario",
                    "Uso de Workflow diagram",
                    "Uso de Documentación (README) o celdas MD en notebook",
                ],
                typeExtra:[
                    "Integración de Gitflow con herramientas de gestión de proyectos (Jira y Trello)",
                ]
            },
            themes: {
                typeBasic: [
                    "Metodología Scrum y kanban (roles y ceremonias)", 
                ],
                typeExtra: [
                    "Integración de Gitflow con herramientas de gestión de proyectos (Jira y Trello)",
                    "Herramientas de gestión de proyectos (Trello & Jira), actas de reuniones e historias de usuario",
                    "Documentación; archivos md (README), Workflow diagram, etc.",

                ]
            }
        },
        {
            name: "Comunicar efectivamente el desarrollo de un proyecto de forma claras y estructurada",
            indicator: {
                typeBasic: [
                    "Uso de Contenido Visual", 
                    "Uso de Estructura ordenada",
                    "Uso de estructura Pragmática / Concreta",
                    "Participación del equipo",
                    "Uso de Storytelling",
                ],
                typeExtra:[
                    "Uso de herramientas de diseño (Canva, Figma, etc.)",
                ]
            }
        },
        {
            name: "Gestionar eficientemente proyectos de desarrollo con herramientas de control de versiones",
            indicator: {
                typeBasic: [
                    "Uso de github, gitlab o bitbucket", 
                    "Conectar repo local al remoto", 
                    "Uso de Gitflow methodology",
                    "Uso de Commits descriptivos",
                    "Uso apropiado de ramas",
                    "Uso de Nomenclatura en commits",
                    "Uso de Nomenclatura en ramas",
                ],
                typeExtra: [
                    "Integración de github actions CI/CD", 
                    "Uso de SonarQube, ESLint",
                    "Uso de Dependabot",
                ]
            },
            themes: {
                typeBasic: [
                    "Sistemas operativos (Windows, Linux, Mac)",
                    "Terminal unix (¿Unix está en todos los sistemas operativos?)",
                    "Git vs github",
                    "Gitflow",
                ],
                typeExtra: [
                    "Git actions CI/CD",
                    "Monitoreo de código y calidad con herramientas de integración continua (SonarQube, ESLint)",
                    "Manejo de versiones de dependencias con herramientas como Dependabot",
                    "Manejo de logs",
                ]
            }
        },
        {
            name: ["Ser capaz de desarrollar un programa en Python"],
            indicator: {
                typeBasic: [
                    "Uso de bucles", 
                    "Uso de condicionales",
                    "Uso de Funciones, programación funcional",
                    "Uso de Control de errores (cláusula try/except)",
                    "Uso de herramientas de logger",
                    "Uso de POO (Programación Orientada a Objetos)",
                    "Uso de frameworks (fASTAPI, Flask, Django)",
                    "Uso de librerias",
                    "Uso de jupyter",
                    "Uso de Entornos virtuales (venv, conda, virtualenv)",
                    "Uso de Archivo de dependencias (requirements.txt)",
                ],
                typeExtra: [
                    "Uso de decoradores", 
                    "Uso de funciones lambda",
                    "Uso de itertools",
                    "Uso de hilos",
                    "Uso de métodos mágicos (__call__, __iter__, __next__)",
                    "Desarrollo de decoradores"
                ]
            },
            themes: {
                typeBasic: [
                    "Introducción a Python (tipos de datos, variables, operadores, estructuras de control)",
                    "Entornos virtuales (venv, conda, virtualenv)",
                    "Entornos de desarrollo IDEs (VSCode, Pycharm) & notebooks(Jupyter notebook, google colab)",
                    "POO (Programación Orientada a Objetos)",
                    "Programación funcional",
                    "Heramientas de logger",
                    "IOT",
                    "Introducción a redes y protocolos de comunicación",
                    "Api rest",
                    "CRUD",
                    "Frameworks (fASTAPI, Flask, Django)",
                    "Clean code (SOLID, DRY, KISS)",
                    "Patrones de Diseño",
                    "Regex",

                ],
                typeExtra: [
                    "Desarrollo de decoradores",
                    "Métodos mágicos",
                    "Hilos en python",
                    "Itertools",
                    "Protocolo SSH",
                    "Cross-site-origin (CORS)",
                ]
            }
        },
        // 
        {
            name: "Implementar un sistema de webscrapping para la recopilación de datos",
            indicator: {
                typeBasic: [
                    "Uso de Scraper",
                    "Uso de tareas Cron",
                ]
            },
            themes: {
                typeBasic: [
                    "Estructura de un documento HTML (DOM y conección a Javascript)",
                    "Requests, API REST",
                    "Scrappy",
                    "Selenium",
                    "BeautifulSoup",
                    "Cronjob"
                ]
            }
        },
        // 
        {
            name: "Diseñar y gestionar bases de datos de manera eficiente",
            indicator: {
                typeBasic: [
                    "Uso de Modelado de datos",
                    "Consumir grandes volúmenes de datos en tiempo real (Kafka) ",
                    "Guardar datos en base de datos SQL",
                    "Guardar datos en base de datos NoSQL",
                    "Uso de Normalización de datos"
                ],
                typeExtra: [
                    "Implementación de técnicas de seguridad en bases de datos", 
                    "Implementación de bases de datos en la nube"
                ]
            },
            themes: {
                typeBasic: [
                    "Bases de datos relacionales (sql, mysql, postgresql)",
                    "Bases de datos no relacionales (mongo, firebase) & bases de datos vectoriales",
                    "ORM/ODM",
                    "Diagrama ER",
                    "Normalización de datos"
                ],
                typeExtra: [
                    "Diseño y gestión de bases de datos de alta disponibilidad y recuperación ante desastres", 
                    "Migración y actualización de bases de datos: Estrategias y mejores prácticas"
                ]
            }
        },
        {
            name: "Implementar tests para garantizar la calidad del software",
            indicator: {
                typeBasic: [
                    "Uso de Test Unitarios",
                    "Uso de Test de Integración",
                    "Uso de TDD"
                ],
                typeExtra: [
                    "Covertura del 80% de código",
                    "Uso de Pruebas de aceptación y validación de funcionalidades (Test de Aceptación del Usuario - UAT)",
                    "Uso de Pruebas de compatibilidad (cross-browser, dispositivos, versiones)"
                ]
            },
            themes: {
                typeBasic: [
                    "Test Unitarios (pytest, unittest)",
                    "Test de Integración",
                    "Test driven development (TDD)",
                ],
                typeExtra: [
                    "Pruebas de integración continua y despliegue continuo (CI/CD)",
                    "Mocking y pruebas con dependencias externas (mockito, pytest-mock WireMock)"
                ]
            }
        },
        {
            name: "Desplegar y gestionar aplicaciones en entornos de nube",
            indicator: {
                typeBasic: [
                    "Uso de Docker",
                    "Uso de un servicio de cloud (Azure, AWS, etc)",
                    "Uso de plataformas de deployment (render, etc)"
                ],
                typeExtra: [
                    "Uso avanzado de herramientas de orquestación de contenedores (Docker Compose, Kubernetes, Docker Swarm)", 
                    "Implementación de pipelines CI/CD para automatización de despliegues (Jenkins, GitLab CI, GitHub Actions)",
                    "Desarrollo de arquitecturas de microservicios con Kafka como backbone de comunicación"

                ]
            },
            themes: {
                typeBasic: [
                    "Introducción a docker (contenedores, imágenes, volúmenes, redes)",
                    "Despliegue y gestión de microservicios en la nube (Docker Compose)"
                ],
                typeExtra: [
                    "Implementación de Kafka en microservicios con Docker y Kubernetes", 
                    "Optimización de costos y gestión de recursos en la nube",
                    "Cloud Computing",
                    "HDFS",
                    "MLOps"
                ]
            }
        },
        {
            name: "Evaluar conjuntos de datos utilizando herramientas de análisis y de visualización de datos",
            indicator: {
                typeBasic: [
                    "Uso y gestión de formato .csv",
                    "Limpieza y preprocesado de datos",
                    "Visualización de datos (seaborn, matplotlib, plotly)",
                    "Análisis exploratorio detallado (EDA)",
                    "Uso de librerías que permitan el desarrollo de paneles de visualización de datos (dash, streamlit, gradio)",
                    "Uso de técnicas de preprocesado  (normalización, escalado, label encoder, one hot encoder)",
                    "Visualización de datos en Dashboard de BI (powerBI, Tableu))",
                    "Uso de técnicas avanzadas de limpieza de datos (eliminación de valores atípicos, imputación de valores faltantes)"
                ],
                typeExtra:[
                    "Uso de técnicas de reducción de dimensionalidad (PCA, t-SNE)",
                ]
            },
            themes: {
                typeBasic: [
                    "Estadística en el análisis de datos",
                    "Data Cleaning con Python",
                    "Tipos de gráficas en analisis de datos",
                    "ETLs",
                    "PowerBi y alternativas",
                    "Storytelling de datos"
                ],
                typeExtra: [
                    "Implementación de pipelines automatizados para limpieza y preprocesamiento de datos con herramientas como scikit-learn o TensorFlow Data",
                ]
            }
        },
        {
            name: "Aplicar algoritmos de aprendizaje automático según el problema, identificando y resolviendo problemas clásicos de inteligencia artificial",
            indicator: {
                typeBasic: [
                    "Seleccionar las variables que son útiles y las que no lo son",
                    "Reconocer si es un problema de regresión o de clasificación",
                    "Separación de datos en train/test",
                    "Entrenar un modelo simple de ML  (SVM, Logistic Regression, Linear Regression, Decission Tree, Naive Bayes)",
                    "Reconocer un caso de aprendizaje no supervisado",
                    "Aplicar modelos de clustering",
                    "Uso modelos de ensemble (RandomForest, GradientBoosting, AdaBoost, XGBoost, LightGBM)",
                    "Uso de técnicas avanzadas de visualización como heatmaps, pairplots, y 3D visualizations",
                    "Introducción a estadística para Machine Learning"
                ],
                typeExtra: [
                    "Análisis de series temporales y visualización con Plotly y seaborn", 
                    "Optimización del rendimiento de las herramientas de visualización para grandes volúmenes de datos (técnicas de muestreo y reducción de dimensionalidad)"
                ]
            },
            themes: {
                typeBasic: [
                    "Humanismo y ética de la IA",
                    "ML Supervisado - Algoritmos clasicos",
                    "Ingeneria de Caracteristicas",
                    "ML No Supervisado - Algoritmos clásicos",
                    "Estadística en Machine Learning",
                    "Etapas de un proyecto de ML",
                    "Validación Cruzada",
                    "Perceptrón",

                ],
                typeExtra: [
                    "Implementación de pipelines de preprocesamiento y análisis con scikit-learn y pandas",
                ]
            }
        },
        {
            module: "Módulo 3",
            name: "Modificar los parámetros y componentes de la inteligencia artificial para mejorar su rendimiento",
            indicator: {
                typeBasic: [
                    "Optimización de Hiperparámetros",
                    "Aplica técnicas de regularización",
                    "Conocer las métricas de evaluación típicas de cada tipo de problema (MSE, Recall, F1, etc)",
                    "Tratamiento de Datos Desbalanceados",
                    "Selecciona el modelo adecuado",
                    "Uso de modelos de redes neuronales",
                    "Visualización de resultados y métricas",
                    "Procesar y almacenar datos de eventos en tiempo real",
                ],
                typeExtra: [
                    "Entender los componentes de una red neuronal y su funcionamiento (funciones de activacion, descenso de gradiente, backpropagation, etc",
                    "Transfer Learning",
                    "Data Augmentation",
                    "Implementa pipelines de preprocesamiento",
                ]
            },
            themes: {
                typeBasic: [
                    "Uso de redes Neuronales",
                    "Redes Neuronales Convolucionales",
                    "PCA: reducción de la dimensionalidad",
                    "Autoencoders",
                    "Algoritmo de Backpropagation",
                    "Descenso del Gradiente y optimizadores",
                    "Tecnicas Ensamble",
                ],
                typeExtra: [
                    "MLOps",
                ]
            }
        },
        {
            module: "Módulo 3",
            name: "Crear un modelo de inteligencia artificial utilizando técnicas y algoritmos de Procesamiento del Lenguaje Natural",
            indicator: {
                typeBasic: [
                    "Preprocesamiento (stemming, lematización, stopwords)",
                    "Modelos de clasificación aplicados a texto",
                    "Uso de redes Neuronales Recurrentes (LSTM, GRU)",
                    "Emplea técnicas de vectorización clásicas",
                    "Uso de Expresiones regulares",
                    "Implementa técnicas de data augmentation en texto (traducción, reemplazo por sinónimos, etc)",
                    "Uso de modelos LLM",
                    "Uso de frameworks para desarrollar aplicaciones de LLMs (LancgChain, CrewAI)",
                    
                ],
                typeExtra: [
                    "Finetuning de LLMs",
                    "Uso de Modelos basados en Transformers",
                    "Uso de arquitecturas RAG",
                ]
            },
            themes: {
                typeBasic: [
                    "Pytorch",
                    "Redes Recurrentes (RNNs, LSTM, GRU)",
                    "TensorFlow y Keras",
                    "Técnicas de data augmentation textual",
                ],
                typeExtra: [
                    "Aprendizaje por refuerzo aplicado a NLP",
                ]
            }
        },
        {
            module: "Módulo 3",
            name: "Crear un modelo de inteligencia artificial utilizando técnicas y algoritmos de Computer Vision",
            indicator: {
                typeBasic: [
                "Uso de técnicas de preprocesamiento de imágenes: resizing, normalización, escalado",
                "Uso de Datasets de Imágenes para detección de objetos",
                "Implementa detección de objetos reentrenando modelo preentrenado",
                "Aumento de datos con técnicas visuales (flip, crop, color jitter)",
                ],
                typeExtra: [
                    "Uso de técnicas de segmentación de objetos", 
                    "Uso de técnicas de detección de objetos en tiempo real"
                ]
            },
            themes: {
                typeBasic: [
                    "Técnicas de Aumento de Datos en Imágenes",
                    "Reconoce patrones visuales y características con CNNs",
                    "Transfer Learning en Visión por Computadora",
                    "Detección de Objetos con YOLO , R-CNN y SSD",
                    "Tipos de segmentación de Imágenes (U-Net, SAM)"
                ],
                typeExtra: [
                    "Redes Generativas Antagónicas (GANs) en Visión por Computadora",
                    "Modelos de Difusión",
                ]
            }
        }
    ]
}

const { weeks, stack, periods, modules, links, title } = bootcampData;

//Generate the roadmap on page load
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Generate the roadmap on page load
    generateGantt();
});

// Generate table depending on the number of weeks
function setWeeksValue(weeksNumber) {
    const weeksInput = document.getElementById("weeks");
    weeksInput.setAttribute("value", weeksNumber); 
}

//Generate title
 function setTitle(title) {
    const titleElement = document.getElementById("nav-title");
    const titleDocument = document.querySelector("title");
    titleElement.textContent = title;
    titleDocument.textContent = title;
 }

//Generate the links
function setLinks(links) {
    const link_buttons = document.querySelectorAll("[data-link]");

    // Itera sobre los botones y asigna los enlaces dinámicamente
    link_buttons.forEach(button => {
        const linkType = button.getAttribute("data-link"); // Obtiene el valor de data-link
        const anchor = button.querySelector("a"); // Encuentra el elemento <a> dentro del botón

        if (links[linkType] && anchor) { // Si hay un enlace asociado y el <a> existe
            anchor.href = links[linkType]; // Asigna el enlace al atributo href
        }

        if(linkType === "googleCalendar") {
            button.setAttribute('src', links[linkType])
         }

    })

} 

function setStackTags(stack){
          
            const list_tag_stack = document.querySelector(".list-inline");
            const types = [...new Set(stack.map(item => item.type))];
    
            function createListItem(item) {
                const listItem = document.createElement("li");
                listItem.classList.add("list-inline-item");
                const badge = document.createElement("span");
                badge.classList.add("badge");
                

                if (item === "Competencia") {
                    badge.classList.add("temas");
                    badge.innerHTML = `<i  class="bi bi-lightbulb-fill"></i> competencia`;
                } else if (item === "Course") {
                    badge.classList.add("certificate-course");
                    badge.innerHTML = `<i class="bi bi-arrow-return-right"></i> <i class="bi bi-bookmark-check"></i> certificado o curso`;
                } else if (item === "Proyecto") {
                    badge.classList.add("project");
                    badge.innerHTML = `<i class="bi bi-briefcase-fill"></i> | <i class="bi bi-people-fill"></i> project`;
                } else if(item === "Transición") {
                    badge.classList.add("transicion");
                    badge.innerHTML = `<i class="bi bi-diagram-3-fill"></i> transición-flexible`
                }

    
               
                listItem.appendChild(badge);
                return listItem;
            }
    
            // Generar la lista dinámica
            types.forEach(item => {
                const listItem = createListItem(item);
                list_tag_stack.appendChild(listItem);
            });
}

//Generate the Gantt chart
function generateGantt() {
    setTitle(title);
    setWeeksValue(bootcampData.weeks);
    setLinks(links);
    setStackTags(stack);
    const weeks = document.getElementById("weeks").value;
    const table = document.getElementById("gantt-table");
    table.innerHTML = ""; 

    if(modules.length > 0) {
        let moduleHeaderRow = "<tr><th class=''>Módulos</th>";

        modules.forEach(module => {
            let colspan = module.end - module.start + 1;
            moduleHeaderRow += `<th colspan="${colspan}">${module.name}</th>`;
        });
        moduleHeaderRow += "</tr>";
        table.innerHTML += moduleHeaderRow;
    }

// generate months 

    let monthHeaderRow = "<tr><th>Meses</th>";
    for (let i = 1; i <= weeks; i += 4) {
        const month = Math.ceil(i / 4);
        let colspan = Math.min(4, weeks - i + 1); 
        monthHeaderRow += `<th colspan="${colspan}">Mes ${month}</th>`;
    }
   
    monthHeaderRow += "</tr>";
    table.innerHTML += monthHeaderRow;

    let weekHeaderRow = "<tr><th>Elemento</th>";
    for (let i = 1; i <= weeks; i++) {
        weekHeaderRow += `<th>${i}</th>`;
    }
    weekHeaderRow += "</tr>";
    table.innerHTML += weekHeaderRow;

    let lastEnd = 0;

    stack.forEach((item) => {
        let colorClass = "";
        let iconoProject = '<i class="bi bi-briefcase-fill"></i>';
        let iconoCompetencia = '<i class="bi bi-lightbulb-fill"></i>';
        let iconoIntegracion = '<i class="bi bi-diagram-3-fill"></i>';
        let iconCertificate = '<i class="bi bi-arrow-return-right"></i><i class="bi bi-bookmark-check"></i>';
        let icon = '';

        if (item.type === "Proyecto") {
            colorClass = "proyecto";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconoProject;
        } else if (item.type === "Competencia") {
            colorClass = "tema";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconoCompetencia;
        } else if (item.type === "Transición") {
            colorClass = "transicion";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconoIntegracion;

        }else if (item.type === "Course") {
            colorClass = "certificate-course";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconCertificate;
        }

        lastEnd = item.end;

        let row = `<tr><td class="label ${colorClass}">${icon} ${item.name}</td>`;

        for (let i = 1; i <= weeks; i++) {
            if (i >= item.start && i <= item.end) {
                row += `<td class="block ${colorClass}"></td>`;
            } else {
                row += `<td class="empty"></td>`;
            }
        }

        row += "</tr>";
        table.innerHTML += row;
    });

    table.style.width = `${weeks * 30 + 260}px`; 

    // Obtener el contenedor del acordeón
    const accordionContainer = document.getElementById('accordion');
    // Generar dinámicamente el contenido del acordeón
    bootcampData.competencies.forEach((competency, index) => {
        const collapseId = `collapse${index}`;
        const headingId = `heading${index}`;
        const expanded = index === 0 ? 'true' : 'false';
        const showClass = index === 0 ? 'show' : '';

        console.log(competency);

        const accordionItem = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="${headingId}">
                    <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#${collapseId}" 
                        aria-expanded="${expanded}" 
                        aria-controls="${collapseId}">
                        <span><i class="bi bi-lightbulb-fill"></i> Competencia:  ${competency.name}</span>
                    </button>
                </h2>
                <div id="${collapseId}" class="accordion-collapse collapse ${showClass}" aria-labelledby="${headingId}" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p><strong>Indicadores</strong></p>
                        <ul>
                            ${competency.indicator?.typeBasic?.length > 0 ? `
                            <li>
                                Básicos
                                <ul class="list-inline">
                                    ${competency.indicator.typeBasic.map(criterio => `<li class="list-inline-item"><span class="badge badge-soft-success">${criterio}</span></li>`).join('')}
                                </ul>
                            </li>
                            ` : ''}
                            ${competency.indicator?.typeExtra?.length > 0 ? `
                            <li>
                                Extra
                                <ul class="list-inline">
                                    ${competency.indicator.typeExtra.map(criterio => `<li class="list-inline-item"><span class="badge badge-soft-danger">${criterio}</span></li>`).join('')}
                                </ul>
                            </li>
                            ` : ''}
                        </ul>
                        ${competency.themes?.typeBasic?.length > 0 ? `<p><strong>Temas</strong></p>` : ''}
                        <ul>
                            ${competency.themes?.typeBasic?.length > 0 ? `
                            <li>
                                Básicos
                                <ul class="list-inline">
                                    ${competency.themes.typeBasic.map(pildora => `<li class="list-inline-item"><span class="badge badge-soft-success">${pildora}</span></li>`).join('')}
                                </ul>
                            </li>
                            ` : ''}
                            ${competency.themes?.typeExtra?.length > 0 ? `
                            <li>
                                Extra
                                <ul class="list-inline">
                                    ${competency.themes.typeExtra.map(pildora => `<li class="list-inline-item"><span class="badge badge-soft-danger">${pildora}</span></li>`).join('')}
                                </ul>
                            </li>
                            ` : ''}
                        </ul>
                    </div>
                </div>
            </div>
    `;


    // Insertar el elemento generado en el contenedor
    accordionContainer.innerHTML += accordionItem;
});
}
