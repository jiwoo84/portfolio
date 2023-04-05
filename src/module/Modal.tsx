import { useEffect } from "react";
import tw from "tailwind-styled-components";
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRecoilState } from "recoil";
import { modalContentState } from "../../recoil";

interface ModalContainerProps {
  modalContentTxt: string;
}

const ModalContainer = ({ modalContentTxt }: ModalContainerProps) => {
  const [modalContent, setModalContent] = useRecoilState(modalContentState);

  useEffect(() => {
    const $modalElement: HTMLElement = document.querySelector("#modalEl")!;

    const modalOptions: ModalOptions = {
      placement: "bottom-right",
      backdrop: "dynamic",
      backdropClasses:
        "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
      closable: true,
      onHide: () => {
        console.log("modal is hidden");
      },
      onShow: () => {
        console.log("modal is shown");
      },
      onToggle: () => {
        console.log("modal has been toggled");
      },
    };

    const modal: ModalInterface = new Modal($modalElement, modalOptions);
  });

  return (
    <Container id="modalEl">
      <button
        data-modal-target="extralarge-modal"
        data-modal-toggle="extralarge-modal"
        className="block w-full md:w-auto text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setModalContent(modalContentTxt)}
      >
        상세보기
      </button>
      <div
        id="extralarge-modal"
        tabIndex={-1}
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
      >
        <div className="relative w-full h-full max-w-7xl">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                프로젝트 상세보기
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="extralarge-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="px-[5%] py-10 space-y-6">
              <MarkDownContainer className="prose">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {modalContent}
                </ReactMarkdown>
              </MarkDownContainer>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ModalContainer;

const Container = tw.div``;
const MarkDownContainer = tw.div``;
