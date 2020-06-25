import React from "react";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-simple-icons/github";
import externalLink from "@iconify/icons-feather/external-link";

import style from "../Projects.module.scss";

export const ProjectsMap = ({ projects }) => {
  const renderProjects = projects.map((project, i) => {
    return (
      <div className={style.item} key={i}>
        <div
          className={style.section__projects__container__item__image__container}
        >
          {project.img.map((img, index) => {
            return (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  (i + 1) % 2 === 0 && index > 0 ? style.right : style.left
                }
              >
                <img src={`${img}`} alt={`${project.title}`} />
              </a>
            );
          })}
        </div>
        <div className={style.info}>
          <div className={style.description}>
            <div className={style.title}>
              <h2>{project.title}</h2>
              <div className={style.separator}></div>
            </div>
            <p>
              {project.desc} {project.tech}
            </p>
            <div className={style.links}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Icon icon={externalLink} />
              </a>
              <a
                href={project.codeurl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={githubIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderProjects}</>;
};
