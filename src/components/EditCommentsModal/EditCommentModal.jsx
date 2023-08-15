import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useComment } from "../../contexts/CommentContext";
import { usePost } from "../../contexts/PostContext";

export default function Modal({ isOpen, setIsOpen, comment, postId }) {
  const { editComment } = usePost();
  const [editedComment, setEditedComment] = useState({
    _id: comment?._id,
    text: comment?.text,
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const saveUpdatedComment = () => {
    editComment(postId, editedComment?._id, editedComment?.text);
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={openModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/[0.2] backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-neutral-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-100"
                  >
                    Edit Comment
                  </Dialog.Title>
                  <div className="mt-2">
                    {/* <p > */}
                    <textarea
                      className="text-medium text-gray-200 bg-transparent"
                      cols={50}
                      rows={8}
                      value={editedComment?.text}
                      onChange={(e) =>
                        setEditedComment({
                          ...editedComment,
                          text: e.target.value,
                        })
                      }
                    ></textarea>
                    {/* </p> */}
                  </div>

                  <div className="mt-4 space-x-2 float-right">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-teal-100 px-4 py-2 text-sm font-medium text-teal-900 hover:bg-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={saveUpdatedComment}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}