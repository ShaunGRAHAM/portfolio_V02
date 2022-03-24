import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState, Component } from 'react';
import { projectsDataEn } from '../../data/en/projectsDataEn.js';


class DropdownMenu extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state ={
    displayProject: ''
    };
  }


   handleClick = (e) => {
      this.props.updateProject(e.target.value);

    // console.log(e.target.value);
   }

  render () {
      return (
          <div className="absolute top-3 right-3 z-10">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex items-center justify-center w-full px-4 py-2 border-solid border-2 border-black text-sm font-medium text-black bg-white rounded-full transition ease-in-out delay-150 duration-150 hover:bg-black hover:text-white hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  PROJECTS
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                  </svg>
                </Menu.Button>
              </div>
              <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute border-white border-solid border-2 right-0 w-88 mt-2 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                  {this.props.projects.map(element => {
                    return (
                      <div className="px-1 pb-1 pt-0.5 rounded-sm transition ease-in-out delay-50 duration-50 hover:bg-black hover:font-bold text-black hover:text-white font-light">
                        <Menu.Item>
                          <button key={element.id} value={element.id} onClick={this.handleClick} className=" leading-none px-2 text-xs text-sans">
                            {element.project.title}
                          </button>
                        </Menu.Item>
                      </div>
                      )
                  })}

                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          )

  }

}

export default DropdownMenu;




