import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Avatar from "../Avatar";
import { useUser } from "../../contexts/UserContext";
import { useAuth } from "../../contexts/AuthContext";
import { TbPhotoPlus } from "react-icons/tb";

export default function Modal({ isOpen, setIsOpen }) {
    const { currentUser } = useAuth();
    const {
        user: { allUsers },
        setUser,
        editUserProfile,
    } = useUser();
    const [userValue, setUserValue] = useState({});
    const [profileURL, setProfileURL] = useState("");

    const updatedCurrentUser = allUsers?.find(
        ({ username }) => username === currentUser?.username
    );

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        editUserProfile(userValue);
        setIsOpen(false);
    };

    const handleChange = (e) =>
        setUserValue({
            ...userValue,
            [e.currentTarget.name]: e.currentTarget.value,
        });

    useEffect(() => {
        setUserValue(updatedCurrentUser);
        setProfileURL(updatedCurrentUser?.avatar);
    }, [updatedCurrentUser]);

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
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-neutral-800 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-100"
                                    >
                                        Edit Profile
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <div className="flex flex-col pb-10">
                                            <div className="relative">
                                                <Avatar
                                                    src={profileURL}
                                                    profile="true"
                                                />
                                                <input
                                                    className="absolute bottom-0 hidden hover:cursor-pointer"
                                                    accept="image/**"
                                                    type="file"
                                                    id="avatar"
                                                    name="avatar"
                                                    onChange={(e) => {
                                                        setProfileURL(
                                                            URL.createObjectURL(
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        );
                                                        setUserValue({
                                                            ...userValue,
                                                            avatar: URL.createObjectURL(
                                                                e.target
                                                                    .files[0]
                                                            ),
                                                        });
                                                    }}
                                                />
                                                <label
                                                    htmlFor="avatar"
                                                    className="absolute bottom-0 left-24 cursor-pointer rounded-full border-2 border-x-white bg-neutral-800 p-2"
                                                >
                                                    <TbPhotoPlus size={24} />
                                                </label>
                                            </div>
                                            <div className="flex gap-5">
                                                <div>
                                                    <p className="mt-2">
                                                        Firstname:
                                                    </p>
                                                    <input
                                                        name="firstName"
                                                        className="mb-1 rounded-lg border border-teal-200 bg-black/[0.2] p-2 text-xl font-medium text-gray-100"
                                                        value={
                                                            userValue?.firstName
                                                        }
                                                        onChange={handleChange}
                                                        placeholder="Firstname"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="mt-2">
                                                        Lastname:
                                                    </p>
                                                    <input
                                                        name="lastName"
                                                        className="mb-1 rounded-lg border border-teal-200 bg-black/[0.2] p-2 text-xl font-medium text-gray-100"
                                                        value={
                                                            userValue?.lastName
                                                        }
                                                        onChange={handleChange}
                                                        placeholder="Lastname"
                                                    />
                                                </div>
                                            </div>
                                            <p className="mt-2">Bio:</p>
                                            <input
                                                name="bio"
                                                className="mb-1 rounded-lg border border-teal-200 bg-black/[0.2] p-2 text-xl font-medium text-gray-100"
                                                value={userValue?.bio}
                                                onChange={handleChange}
                                                placeholder="your bio"
                                            />
                                            <p className="mt-2">Website:</p>
                                            <input
                                                name="website"
                                                className="mb-1 rounded-lg border border-teal-200 bg-black/[0.2] p-2 text-xl font-medium text-gray-100"
                                                value={userValue?.website}
                                                onChange={handleChange}
                                                placeholder="your website"
                                            />
                                        </div>
                                    </div>

                                    <div className="float-right mt-4 space-x-2">
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
                                            onClick={submitHandler}
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
