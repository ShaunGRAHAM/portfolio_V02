import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import React from 'react'


class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full sm:w-fit ">
      <div className="w-full sm:w-fit max-w-md mx-auto bg-white rounded-2xl sm:rounded-md">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className=" flex flex-row
                            w-full sm:w-fit
                            pl-2 sm:pl-4
                            pr-6
                            py-2
                            mt-2
                            text-sm
                            font-medium
                            text-left
                            text-black-900
                            bg-white hover:bg-gray-100
                            rounded-md
                            transition ease-in-out delay-150 duration-300
                            focus:outline-none focus-visible:ring focus-visible:ring-opacity-75
                            ">
                <span>{this.props.details.title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transition ease-in-out delay-150 duration-150 transform rotate-180' : ''
                  } w-5 h-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {this.props.details.description}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
    );
  }
}export default ProjectDetails;

