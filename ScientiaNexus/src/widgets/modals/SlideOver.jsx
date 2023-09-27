import { Dispatch, Fragment, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function SlideOver({ open, setOpen, title, description, children }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative !z-[110]" onClose={setOpen}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div role="presentation" className="fixed inset-0 bg-slate-800 bg-opacity-40 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl p-4">
                  <div className="flex h-full flex-col backdrop-blur-xl bg-gray-700/40 rounded-xl p-2">
                    {/* Header */}
                    <div className="flex w-full items-start justify-between text-center mb-3">
                      <div className="w-full flex justify-center">
                        <div className="space-y-1">
                          <Dialog.Title className="text-base font-bold text-white text-center uppercase">{title}</Dialog.Title>
                          <p className="text-sm font-medium bg-teal-500/40 text-teal-500 rounded-full text-center px-2">{description}</p>
                        </div>
                      </div>
                      <button type="button" className="w-fit text-slate-900 hover:text-rose-600 transition ring-0 ease-in-out duration-150" onClick={() => setOpen(false)}>
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    {/* Main */}
                    <div className="h-full overflow-y-auto">
                      <div className="h-full rounded-md overflow-y-auto space-y-2">{children}</div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
