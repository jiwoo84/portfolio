import React from "react";

interface ProjectProps {
  imgScr: string;
  title: string;
  date: string;
  skill: string;
  describe: string;
  repository: string;
  showDetail: string;
  posting: string;
}

const Project: React.FC<ProjectProps> = ({
  imgScr,
  title,
  date,
  skill,
  describe,
  repository,
  showDetail,
  posting,
}) => {
  return (
    <>
      <img src={imgScr} />
      <h2>{title}</h2>
      <p>{date}</p>
      <p>사용 기술: {skill}</p>
      <textarea>{describe}</textarea>
      <button>
        <a href={repository} target="_blank">
          깃허브 링크
        </a>
      </button>
      <button>
        <a href={showDetail} target="_blank">
          상세보기
        </a>
      </button>
      <button>
        <a href={posting} target="_blank">
          회고
        </a>
      </button>
    </>
  );
};

export default Project;
