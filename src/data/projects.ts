// Interface para projeto
export interface Project {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  image: string;
  url?: string;
  tech?: {
    pt: string[];
    en: string[];
  };
}

// Dados dos projetos
export const projects: Project[] = [
  {
    id: "project-1",
    title: {
      pt: "Projeto Queimadas - INPE",
      en: "INPE Queimadas Project",
    },
    description: {
      pt: "Desenvolvimento de Software para validação de produto técnico-científico do INPE. Elaboração de protótipo em software para visualização de queimadas.",
      en: "Software development for the validation of a technical-scientific product from INPE. Development of a software prototype for fire visualization.",
    },
    image: "/images/Stac.webp",
    tech: {
      pt: [
        "Linux",
        "WMS",
        "STAC",
        "HTML5",
        "CSS",
        "Javascript",
        "API RESTful",
        "PostGIS",
        "Python",
        "Docker",
      ],
      en: [
        "Linux",
        "WMS",
        "STAC",
        "HTML5",
        "CSS",
        "Javascript",
        "API RESTful",
        "PostGIS",
        "Python",
        "Docker",
      ],
    },
  },
  {
    id: "project-2",
    title: {
      pt: "STEEL-HARD",
      en: "STEEL-HARD",
    },
    description: {
      pt: "Grupo de pesquisa e desenvolvimento de soluções em software, vencedor de competições na Fatec Jacareí.",
      en: "Research and develpopment group for software solutions, winner of competitions at Fatec Jacareí.",
    },
    image: "/images/steelhard.png",
    url: "https://github.com/Steel-Hard/",
    tech: {
      pt: [
        "Node.js",
        "Typescript",
        "Postgres",
        "React.js",
        "MongoDB",
        "C/C++",
        "Python",
        "UML",
        "Docker",
      ],
      en: [
        "Node.js",
        "Typescript",
        "Postgres",
        "React.js",
        "MongoDB",
        "C/C++",
        "Python",
        "UML",
        "Docker",
      ],
    },
  },
  {
    id: "project-3",
    title: {
      pt: "Clube do Xadrez",
      en: "Chess Club",
    },
    description: {
      pt: "Projeto de extensão e desenvolvimento de uma apostila de xadrez, com foco em estratégias e táticas, para iniciantes a jogadores intermediários.",
      en: "Extension project and development of a chess booklet, focusing on strategies and tactics, for beginners to intermediate players.",
    },
    image: "/images/xadrez.jpg",
    tech: {
      pt:["Arte", "Educação", "Xadrez", "Camaradagem"],
      en:["Art","Education","Chess","Camraderie"],
    }
    
  },
  {
    id: "project-4",
    title: {
      pt: "Contabilidade Empresarial",
      en: "Corporate Accounting",
    },
    description: {
      pt: "Formação em análise de balanços patrimoniais, com foco em automação de processos contábeis.",
      en: "Formation in the analysis of patrimonial balances, with focus on automating accounting processes.",
    },
    image: "/images/bp.jpg",
    tech: {
      pt: ["Contmatic", "Domínio", "Excel"],
      en: ["Contmatic", "Domínio", "Excel"],
  }
},
  {
    id: "project-5",
    title: {
      pt: "Formação em Psicanálise",
      en: "Psychoanalysis Training",
    },
    description: {
      pt: "Programa de formação em psicanálise, com foco em desenvolvimento de competências terapêuticas e compreensão dos processos mentais.",
      en: "Psychoanalysis training program, focusing on developing therapeutic skills and understanding mental processes.",
    },
    image: "/images/psicanalise.jpg",
    tech: {pt:["Freud", "Klein", "Ricoeur", "DSM-5"],en:["Freud", "Klein", "Ricoeur", "DSM-5"]},
  },
  {
    id: "project-6",
    title: {
      pt: "Voluntariados e Ações Sociais",
      en: "Volunteer Work and Social Actions",
    },
    description: {
      pt: "Ações voluntárias, educacionais, culturais e sociais para a instituição Centro Espírita Paula Ortiz",
      en: "Volunteer work and social actions for the Centro Espírita Paula Ortiz institution.",
    },
    image: "/images/teatro.jpeg",
    tech: {pt:["Cultura", "Religião", "Educação", "Música"],en:["Culture", "Religion", "Education", "Music"]},
  },
];
