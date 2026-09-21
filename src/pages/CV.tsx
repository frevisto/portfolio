import React from "react";
import { useApp } from "../context/AppContext";
import { theme } from "../styles/theme";
import { asset } from "../utils/helperAsset";

// Página CV
export const CV: React.FC = () => {
  const { language } = useApp();

  const cvContent = {
    pt: {
      name: "Vitor Francisco",
      title: "Desenvolvedor de Software",
      summary: `Perfil prático. Tenho mais de 10 anos de experiência em Linux, mais de 3 anos em JS, HTML, CSS e Postgres (Muito embora quando tinha 16 anos fiz algumas páginas em HTML puro), 3 anos usando o Express.js, 2 anos em React, Typescript e Python (criei uma integração de API's e fiz estudos sobre machine learning), um projeto simples para Esp32 em C, feito desde a fiação até a documentação do código (IoT), mexi um pouco com MongoDB e Mongoose, assim como PowerBi, Dart/Flutter, sei o básico de segurança de servidor (XSS stored e reflected (evitar tags), CSRF (links que executam scripts), CORS, RateLimiter, firewall), sei que existem e para que servem: NGINX e Apache Web Server.`,
      sections: {
        experience: "Experiência Profissional",
        education: "Educação",
        skills: "Competências",
        contact: "Contato",
      },
      experiences: [
        {
          role: "Tutor de Estatística",
          company: "Fatec Jacareí",
          period: "03/2026 - Presente",
          description:
            "Tutoria de alunos em estatística, oferecendo orientação sobre conceitos estatísticos, análise de dados e técnicas de resolução de problemas.",
        },
        {
          role: "Estagiário",
          company: "DFH Consultoria e Assessoria Empresarial LTDA",
          period: "11/2025 - 03/2026",
          description:
            "Desenvolvimento de web drivers para automação de tarefas. Terceirização de processos de negócio e intermediação para clientes como Hughes, Claro e Vivo. Atuação em NOC e cumprimento de SLA.",
        },
        {
          role: "Desenvolvedor de Software e Testador de QA",
          company: "INPE - Instituto Nacional de Pesquisas Espaciais",
          period: "01/2025 - 06/2025",
          description:
            "Desenvolvimento e documentação de drivers de teste para validação de sistemas de detecção de focos de incêndio via imagens de satélite. Construção de um MVP para visualização de incêndios.",
        },
        {
          role: "Tutor de Algoritmos e Programação",
          company: "Fatec Jacareí",
          period: "06/2024 - 12/2024",
          description:
            "Tutoria de alunos em algoritmos e programação, abordando HTML, CSS, JavaScript, Git e programação orientada a objetos.",
        },
        {
          role: "Assistente Contábil",
          company: "Contabilidade e Administração de Condomínios Teixeira",
          period: "06/2022 - 08/2023",
          description:
            "Migração de trinta clientes para um novo sistema contábil (de Contmatic para Domínio). Atuação em contabilidade para pequenas e médias empresas e obrigações governamentais.",
        },
        {
          role: "Assistente Administrativo",
          company: "Oliveira, Moraes e Almeida Serviços Contábeis LTDA",
          period: "12/2020 - 01/2022",
          description:
            "Emissão de notas fiscais, cálculo de tributos, contabilidade por custeio direto, elaboração de demonstrações financeiras e balanços, projeções de custos, regularização fiscal e obrigações acessórias.",
        },
        {
          role: "Artista Visual e Ilustrador",
          company: "Autônomo",
          period: "06/2017 - 12/2020",
          description:
            "Fotografia profissional, criação de logotipos e ilustrações. Atuação em curtas-metragens. Produção e pós-produção de imagens analógicas e digitais.",
        },
        {
          role: "Técnico Assistente",
          company: "Digital World Computadores",
          period: "01/2012 - 12/2012",
          description:
            "Atuação com Linux (Ubuntu), manutenção de computadores, instalação de sistemas e softwares, diagnóstico de hardware e suporte ao cliente.",
        },
      ],
      education: [
        {
          degree: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
          institution: "Fatec Jacareí",
          year: "2024 - 2026",
        },
        {
          degree: "Curso de Psicoterapia Psicanalítica",
          institution: "Sociedade Internacional de Psicanálise de São Paulo",
          year: "2024",
        },
        {
          degree: "Bacharelado em Ciências Contábeis (incompleto)",
          institution: "Universidade do Norte do Paraná (EAD)",
          year: "2021 - 2023",
        },
        {
          degree: "Bacharelado em Artes Visuais (incompleto)",
          institution: "Universidade Anhembi Morumbi (EAD)",
          year: "2019",
        },
        {
          degree: "Curso Livre em Hospitalidade e Turismo",
          institution: "Holosback & Moreira LTDA",
          year: "2018",
        },
        {
          degree: "Bacharelado em História da América Latina (incompleto)",
          institution:
            "Universidade Federal da Integração Latino-Americana (UNILA)",
          year: "2016 - 2017",
        },
        {
          degree: "Bacharelado em História (incompleto)",
          institution: "Universidade Estadual Paulista (UNESP)",
          year: "2013 - 2015",
        },
      ],
      skills: [
        "APIs RESTful",
        "Análise Financeira",
        "C/C++",
        "CSS3 / SCSS",
        "Contabilidade",
        "Contabilidade Empresarial",
        "Design Responsivo",
        "Docker",
        "Filosofia",
        "Flutter",
        "Fotografia Profissional",
        "Garantia de Qualidade de Software",
        "Git",
        "HTML5",
        "Ilustração",
        "JavaScript (ES6+)",
        "Linux",
        "Pedagogia",
        "PostgreSQL",
        "Produção Visual",
        "Psicanálise",
        "Python",
        "React.js",
        "TypeScript",
        "Vite",
      ],
      contactEmail: "vitor_faz@msn.com",
      contactLocation: "Jacareí, São Paulo, Brasil",
    },
    en: {
      name: "Vitor Francisco",
      title: "Software Developer",
      summary: `Hands-on profile. I have over 10 years of experience with Linux; over 3 years with JS, HTML, CSS, and Postgres (though I did create some pages using raw HTML back when I was 16); 3 years using Express.js; and 2 years with React, TypeScript, and Python (including building an API integration and studying machine learning). I also worked on a simple ESP32 project in C, from wiring to code documentation (IoT), such as PowerBI for Data Mining, and have dabbled in MongoDB/Mongoose and Dart/Flutter. I understand the basics of server security, including stored and reflected XSS (tag prevention), CSRF (script-executing links), CORS, Rate Limiting, and firewalls. I am aware of NGINX and Apache Web Server.`,
      sections: {
        experience: "Professional Experience",
        education: "Education",
        skills: "Skills",
        contact: "Contact",
      },
      experiences: [
        {
          role: "Statistics Tutor",
          company: "Fatec Jacareí",
          period: "03/2026 - Present",
          description:
            "Tutoring students in statistics, providing guidance on statistical concepts, data analysis, and problem-solving techniques.",
        },
        {
          role: "Intern",
          company: "DFH Consultoria e Assessoria Empresarial LTDA",
          period: "11/2025 - 03/2026",
          description:
            "Development of web drivers for task automation. Business process outsourcing and broking for clients as Hughes, Claro and Vivo. Network Operations Center attendance and compliance to System Level Agreement.",
        },
        {
          role: "Software Developer and QA Tester",
          company: "INPE - Instituto Nacional de Pesquisas Espaciais",
          period: "01/2025 - 06/2025",
          description:
            "Development and documentation of test drivers for assertion of fire recognition system via satelite images. Development of a Minnimal Viable Product for visualizing fires.",
        },
        {
          role: "Algorithms and Programming Tutor",
          company: "Fatec Jacareí",
          period: "06/2024 - 12/2024",
          description:
            "Tutoring students in algorithms and programming, providing guidance on HTML, CSS, Javascript, Git and POO.",
        },
        {
          role: "Assistant Accountant",
          company: "Contabilidade e Administração de Condomínios Teixeira",
          period: "06/2022 - 08/2023",
          description:
            "Successfully transitioned thirty clients to the new accounting system, from Contmatic to Domínio. Small and medium business accounting and governamental filings.",
        },
        {
          role: "Administrative Assistant",
          company: "Oliveira, Moraes e Almeida Serviços Contábeis LTDA",
          period: "12/2020 - 01/2022",
          description:
            "Issuance of invoices, tax calculation, direct costing accounting, preparation of financial statements and balance sheets, cost projection, tax regularization, and ancillary tax filings.",
        },
        {
          role: "Visual Artist and Illustrator",
          company: "Self-employed",
          period: "06/2017 - 12/2020",
          description:
            "Professional photography. Production of logo designs and illustrations. Acting role in short-movies. Production and post-production of analogic and digital images.",
        },
        {
          role: "Assistant Technician",
          company: "Digital World Computadores",
          period: "01/2012 - 12/2012",
          description:
            "Introduction to Linux Ubuntu. Maintenance of computers and notebooks, installation of operating systems and software, hardware troubleshooting, and customer support.",
        },
      ],
      education: [
        {
          degree: "Associate Degree in Multiplataform Software Development",
          institution: "Fatec Jacareí",
          year: "2024 - 2026",
        },
        {
          degree: "Psychanalytic Psychotherapy Course",
          institution: "Socidade Internacional de Picanálise de São Paulo",
          year: "2024",
        },
        {
          degree: "Accounting Bachelor Course (unfinished)",
          institution: "Universidade do Norte do Paraná (EAD)",
          year: "2021 - 2023",
        },
        {
          degree: "Visual Arts Bachelor Course (unfinished)",
          institution: "Universidade Anhembi Morumbi (EAD)",
          year: "2019",
        },
        {
          degree: "Non-Credit Course in Hospitality and Tourism",
          institution: "Holosback & Moreira LTDA",
          year: "2018",
        },
        {
          degree: "Latin America History Bachelor Course (unfinished)",
          institution:
            "Universidade Federal da Integração Latino-Americana (UNILA)",
          year: "2016 - 2017",
        },
        {
          degree: "History Bachelor Course (unfinished)",
          institution: "Universidade Estadual Paulista (UNESP)",
          year: "2013 - 2015",
        },
      ],
      skills: [
        "Accounting",
        "API RESTful",
        "Business Accounting",
        "C/C++",
        "CSS3 / SCSS",
        "Docker",
        "Financial Analysis",
        "Flutter",
        "Git",
        "HTML5",
        "Illustration",
        "JavaScript ES6+",
        "Linux",
        "Pedagogy",
        "Philosophy",
        "Postgres",
        "Professional Photography",
        "Psychanalysis",
        "Python",
        "REST APIs",
        "React.js",
        "Responsive Design",
        "Software Quality Assurance",
        "TypeScript",
        "Visual Products Handling",
        "Vite",
      ],
      contactEmail: "vitor_faz@msn.com",
      contactLocation: "Jacareí, São Paulo, Brazil",
    },
  };

  const cv = cvContent[language];

  return (
    <div
      style={{
        paddingTop: "100px",
        paddingBottom: "60px",
        background: theme.colors.lighter,
        minHeight: "100vh",
        fontFamily: theme.fonts.primary,
      }}
    >
      <div
        style={{
          maxWidth: "950px",
          margin: "0 auto",
          padding: `0 ${theme.spacing.sm}`,
          background: theme.colors.lighter,
          borderRadius: "8px",
          // backgroundColor: theme.colors.dark,
        }}
      >
        {/* Cabeçalho CV */}
        <section
          style={{
            paddingBottom: theme.spacing["2xl"],
            borderBottom: `2px solid ${theme.colors.border}`,
            marginBottom: theme.spacing["2xl"],
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: theme.spacing.md,
              marginBottom: theme.spacing.sm,
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: theme.colors.dark,
                margin: 0,
              }}
            >
              {cv.name}
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: theme.spacing.sm,
              }}
            >
              <a
                href="https://github.com/frevisto"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: `all ${theme.transitions.normal}`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/vitor-francisco-128629386/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: theme.colors.primary,
                  textDecoration: "none",
                  transition: `all ${theme.transitions.normal}`,
                }}
              >
                <img
                  src={asset("/images/linkedin.svg")}
                  alt="LinkedIn"
                  style={{
                    width: "24px",
                    height: "24px",
                    display: "block",
                  }}
                />
              </a>
            </div>
          </div>
          <h2
            style={{
              fontSize: "1.25rem",
              color: theme.colors.primary,
              margin: `0 0 ${theme.spacing.md} 0`,
              fontWeight: "normal",
            }}
          >
            {cv.title}
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: theme.colors.text,
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            {cv.summary}
          </p>

          {/* Contato */}
          <div
            style={{
              marginTop: theme.spacing.lg,
              display: "flex",
              gap: theme.spacing.xl,
              flexWrap: "wrap",
              fontSize: "0.9rem",
            }}
          >
            <div>
              <strong>{cv.sections.contact}:</strong>
            </div>
            <a
              href={`mailto:${cv.contactEmail}`}
              style={{
                color: theme.colors.accent,
                textDecoration: "none",
              }}
            >
              {cv.contactEmail}
            </a>
            <span>{cv.contactLocation}</span>
          </div>
        </section>

        {/* Experiência Profissional */}
        <section
          style={{
            marginBottom: theme.spacing["2xl"],
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: theme.colors.dark,
              marginBottom: theme.spacing.lg,
              borderBottom: `2px solid ${theme.colors.primary}`,
              paddingBottom: theme.spacing.md,
            }}
          >
            {cv.sections.experience}
          </h3>

          {cv.experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: theme.spacing.xl,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: theme.spacing.md,
                  marginBottom: theme.spacing.sm,
                }}
              >
                <div>
                  <strong
                    style={{ fontSize: "1rem", color: theme.colors.dark }}
                  >
                    {exp.role}
                  </strong>
                  <span
                    style={{
                      color: theme.colors.text,
                      marginLeft: theme.spacing.md,
                    }}
                  >
                    @ {exp.company}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: theme.colors.secondary,
                    fontWeight: "bold",
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  color: theme.colors.text,
                  lineHeight: "1.6",
                }}
              >
                {exp.description}
              </p>
            </div>
          ))}
        </section>

        {/* Educação */}
        <section
          style={{
            marginBottom: theme.spacing["2xl"],
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: theme.colors.dark,
              marginBottom: theme.spacing.lg,
              borderBottom: `2px solid ${theme.colors.primary}`,
              paddingBottom: theme.spacing.md,
            }}
          >
            {cv.sections.education}
          </h3>

          {cv.education.map((edu, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: theme.spacing.lg,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: theme.spacing.md,
                  marginBottom: theme.spacing.sm,
                }}
              >
                <div>
                  <strong
                    style={{ fontSize: "1rem", color: theme.colors.dark }}
                  >
                    {edu.degree}
                  </strong>
                  <span
                    style={{
                      color: theme.colors.text,
                      marginLeft: theme.spacing.md,
                    }}
                  >
                    @ {edu.institution}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: theme.colors.secondary,
                    fontWeight: "bold",
                  }}
                >
                  {edu.year}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Competências */}
        <section>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: theme.colors.dark,
              marginBottom: theme.spacing.lg,
              borderBottom: `2px solid ${theme.colors.primary}`,
              paddingBottom: theme.spacing.md,
            }}
          >
            {cv.sections.skills}
          </h3>

          <div
            style={{
              display: "flex",
              gap: theme.spacing.md,
              flexWrap: "wrap",
            }}
          >
            {cv.skills.map((skill, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                  background: theme.colors.light,
                  color: theme.colors.dark,
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  border: `1px solid ${theme.colors.border}`,
                  transition: `all ${theme.transitions.normal}`,
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme.colors.primary;
                  e.currentTarget.style.color = theme.colors.lighter;
                  e.currentTarget.style.borderColor = theme.colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = theme.colors.light;
                  e.currentTarget.style.color = theme.colors.dark;
                  e.currentTarget.style.borderColor = theme.colors.border;
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
