import { ReactNode } from "react";

type ModalType = {
  className?: string;
  childrenClass?: string;
  overlayClass?: string;
  showModal: boolean;
  setShowModal: (e: boolean) => void;
  children: ReactNode;
  onAfterClose?: () => void;
};

export function Modal({
  className,
  childrenClass,
  overlayClass,
  showModal,
  setShowModal,
  children,
}: ModalType) {
  return (
    <section
      className={`${
        showModal ? "block" : "hidden"
      } fixed z-[1000] inset-0 ${className}`}
    >
      <div
        className={`fixed inset-0 bg-black/30 z-[1001] overflow-auto flex justify-center items-center ${overlayClass}`}
        onClick={() => setShowModal(false)}
      >
        <div
          className={`max-tablet:w-[250px] relative z-[1002] max-w-[90%] max-h-[90%] mx-auto my-10 bg-white rounded-3xl shadow-md p-4 overflow-y-auto scroll-smooth scroll-my-5 scrollbar-hidden ${childrenClass}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
