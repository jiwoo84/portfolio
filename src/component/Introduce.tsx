import React, { FC } from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Introduce: React.FC = () => {
  return (
    <>
      <img src="/얼굴사진.jpg" className="w-52" />
      <div>
        <div>HI THERE! I'm a Front-End Web Developer.</div>
        <h1>곽지우</h1>
        <div>
          <p>
            문단, 영화, 연극, 마케팅 등 다양한 분야에서 다양한 사람들과
            일했습니다.
          </p>
          <p>
            10인 미만 기업에서 문제 해결력을 인정받아 팀 리더를 맡은 경험이
            있습니다.
          </p>
          <p>
            쇼핑몰을 관리하며 웹 개발을 접했고, 흥미를 느껴 학습을 시작했습니다.
          </p>
          <p>UX를 중시하며 유저 이탈이 적은 서비스를 만드는 것이 목표입니다.</p>
        </div>
        <div className="contact" style={{ display: "flex" }}>
          <a href="/곽지우.pdf" target="_blank">
            <button className="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500">
              Resume
            </button>
          </a>
          <div style={{ display: "flex" }}>
            <button>
              <a href="https://matilto:wldn0804@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </button>
            <button>
              <a href="https://github.com/jiwoo84" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </button>
            <a href="https://jiwoo84.tistory.com/" target="_blank">
              <img src="tistory.svg" style={{ width: "20px" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduce;
