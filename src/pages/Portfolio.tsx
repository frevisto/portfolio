import React from "react";
import { useApp } from "../context/AppContext";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { theme } from "../styles/theme";
import { asset } from "../utils/helperAsset";

// Página Portfolio
export const Portfolio: React.FC = () => {
  const { language, setView } = useApp();

  const translations = {
    pt: {
      accessCVButton: "Acessar CV",
    },
    en: {
      accessCVButton: "Access CV",
    },
  };

  const t = translations[language];

  const handleAccessCV = () => {
    setView("cv");
  };

  const handleClick = () => {
    handleAccessCV();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        paddingTop: "30px",
        paddingBottom: "100px",
        background: theme.colors.light,
        minHeight: "100vh",
        fontFamily: theme.fonts.primary,
      }}
    >
      {/* Seção de vídeo de apresentação */}
      <section
        style={{
          padding: `${theme.spacing["3xl"]} ${theme.spacing.xl}`,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            margin: `${theme.spacing['xs']} auto`,
            aspectRatio: "16 / 9",
            background: theme.colors.darker,
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: theme.spacing.sm,
          }}
        >
          <video 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            controls
          >
            <source src={asset("/videos/port.mp4")} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </section>

      {/* BADGES */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "40px",
          flexWrap: "wrap",
          width: "100%",
          padding: "40px 0",
        }}
      >
        <img
          src="/images/devFront.png"
          alt="Desenvolvedor Front-End"
          style={{
            maxWidth: "200px",
            width: "100%",
            height: "auto",
          }}
        />

        <img
          src="/images/devMob.png"
          alt="Desenvolvedor Mobile"
          style={{
            maxWidth: "200px",
            width: "100%",
            height: "auto",
            transform: "translateY(-80px)",
          }}
        />

        <img
          src="/images/devBack.png"
          alt="Desenvolvedor Back-End"
          style={{
            maxWidth: "200px",
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Seção de projetos */}
      <section
        style={{
          padding: `${theme.spacing["3xl"]} ${theme.spacing.xl}`,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: theme.colors.dark,
            marginBottom: theme.spacing["2xl"],
            textAlign: "center",
          }}
        >
          {language === "pt" ? "Projetos" : "Projects"}
        </h2>

        {/* Grid de projetos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: theme.spacing["2xl"],
            marginBottom: theme.spacing["3xl"],
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Botão central "Acessar CV" */}
      <section
        style={{
          padding: `${theme.spacing["3xl"]} ${theme.spacing.xl}`,
          textAlign: "center",
        }}
      >
        <button
          onClick={handleClick}
          style={{
            padding: `${theme.spacing.lg} ${theme.spacing["2xl"]}`,
            fontSize: "1.125rem",
            fontWeight: "bold",
            color: theme.colors.lighter,
            background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: `all ${theme.transitions.normal}`,
            boxShadow: "0 4px 15px rgba(37, 99, 235, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 8px 25px rgba(37, 99, 235, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 15px rgba(37, 99, 235, 0.3)";
          }}
        >
          {t.accessCVButton}
        </button>
      </section>
    </div>
  );
};
