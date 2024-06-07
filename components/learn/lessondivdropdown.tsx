"use client";
import React from "react";
import Image from "next/image";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { useModalStore } from "./store02";

interface Lesson {
  id: number;
  name: string;
  language: string;
  image1: string;
}

const lessonsData: Lesson[] = [
  { id: 1, name: "Language of ML", language: "python", image1: "/learn/play button.svg" },
  { id: 2, name: "Supervised Learning: Classification", language: "javascript", image1: "/learn/icon 1.svg" },
  { id: 3, name: "Assessment: Python", language: "java", image1: "/learn/icon2.svg" },
  { id: 4, name: "Hands on: ML", language: "ruby", image1: "/learn/icon 3.svg" },
  { id: 5, name: "ML: Interact with data", language: "typescript", image1: "/learn/icon 4 copy.svg" }
];

const Lessonsdiv: React.FC = () => (
  <div className="mx-2 md:mx-6 w-full md:w-[60%] flex justify-center pr-3 ">
    <div className="bg-white border-[0.5px] border-[#737373] rounded-xl flex flex-col w-full h-fit px-4 md:px-8 pb-4 md:pb-8">
      <div className="w-full text-black mx-2 my-4 font-medium text-xl">Lessons</div>
      <div className="h-fit w-full mx-2 md:mx-5 mt-2">
        {lessonsData.map((lesson) => (
          <div key={lesson.id} className="w-full h-fit overflow-hidden flex flex-col md:flex-row mb-4">
            <div className="w-full h-14 flex">
              <div className="w-full md:w-[470px] h-10 flex border border-gray-50 bg-white hover:bg-[#E8E2F4] hover:border-[#E8E2F4] rounded-3xl">
                <div className="w-fit flex justify-center my-auto items-center mx-2">
                  <Image
                    src={lesson.image1}
                    alt="Lesson Icon"
                    className="border-rad"
                    width={30}
                    height={30}
                    priority
                  />
                </div>
                <div className="flex justify-center items-center">
                  <h4 className="text-black text-sm mx-2">
                    <span className="font-semibold">{lesson.name}</span>: {lesson.language}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LessonsModal: React.FC = () => {
  const { isOpen, closeModal } = useModalStore();

  return (
    <Modal isOpen={isOpen} onOpenChange={closeModal}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">Lessons</ModalHeader>
          <ModalBody>
            <Lessonsdiv />
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

export default LessonsModal;
