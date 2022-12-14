import React, { Fragment, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import Metamask from "../assets/image 66.png";
import Walletimg from "../assets/image 69.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const Wallet = ({ setonnectWallet }) => {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const closeModal = () => {
    setonnectWallet(false);
    setOpen(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="flex justify-between">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Connect Wallet
                        </Dialog.Title>
                        <AiOutlineClose
                          className="cursor-pointer"
                          onClick={closeModal}
                        />
                      </div>

                      <hr className="mt-2" />
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Choose your preferred wallet:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm"
                    onClick={closeModal}
                  >
                    <div className="flex">
                      <img src={Metamask} alt="metamask" />
                      <span className="mx-2 my-2">Metamask</span>
                    </div>
                    <MdOutlineArrowForwardIos className="mx-2 my-2" />
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-4 sm:text-sm"
                    onClick={closeModal}
                    ref={cancelButtonRef}
                  >
                    <div className="flex">
                      <img src={Walletimg} alt="wallet" />
                      <span className="mx-2 my-2">WalletConnect</span>
                    </div>
                    <MdOutlineArrowForwardIos className="mx-2 my-2" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Wallet;
