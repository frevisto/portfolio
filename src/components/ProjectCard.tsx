import React from "react";
import type { Project } from "../data/projects";
import { useApp } from "../context/AppContext";
import { theme } from "../styles/theme";

interface ProjectCardProps {
  project: Project;
}

// Componente para card de projeto
export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language } = useApp();
  const [isHovered, setIsHovered] = React.useState(false);

  const title = language === "pt" ? project.title.pt : project.title.en;
  const description =
    language === "pt" ? project.description.pt : project.description.en;
  const tech = 
    language === "pt" ? project.tech?.pt : project.tech?.en;

  return (
    <div
      style={{
        background: theme.colors.lighter,
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: isHovered
          ? "0 10px 30px rgba(0, 0, 0, 0.2)"
          : "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: `all ${theme.transitions.normal}`,
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        // cursor: 'none',
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagem do projeto */}
      <div
        style={{
          width: "100%",
          height: "200px",
          background: theme.colors.light,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={project.image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: `transform ${theme.transitions.normal}`,
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
          loading="lazy"
        />
      </div>

      {/* Conteúdo */}
      <div
        style={{
          padding: theme.spacing.lg,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            margin: `0 0 ${theme.spacing.md} 0`,
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: theme.colors.dark,
            fontFamily: theme.fonts.primary,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "0.95rem",
            color: theme.colors.text,
            lineHeight: "1.6",
            fontFamily: theme.fonts.primary,
          }}
        >
          {description}
        </p>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ padding:theme.spacing.sm}}>
            <svg
              xmlns="http://w3.org"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        )}
        {/* Tags de tecnologia */}
        {tech && (
          <div
            style={{
              marginTop: theme.spacing.md,
              display: "flex",
              gap: theme.spacing.sm,
              flexWrap: "wrap",
            }}
          >
            {tech.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  fontSize: "0.75rem",
                  background: theme.colors.primary,
                  color: theme.colors.lighter,
                  padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                  borderRadius: "20px",
                  fontFamily: theme.fonts.primary,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
