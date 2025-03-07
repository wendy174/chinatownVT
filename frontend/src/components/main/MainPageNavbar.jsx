import { Disclosure } from '@headlessui/react';
import chinatown_logo from '../../assets/chinatown_logo.png'; 
import CartIcon from '../CartIcon';
import Login from '../Login'; 

const navigation = [
    { name: 'Home', href: '', current: true },
    { name: 'Order Online', href: 'menu', current: false },
    { name: 'Food Gallery', href: '#foodgallery', current: false },
    { name: 'About', href: '#about', current: false },
    { name: 'Contact', href: '#contact', current: false }
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MainPageNavbar() {

  return (
    <Disclosure as="nav" className="bg-white shadow-lg ring-1 ring-gray-200 rounded-2xl mx-4 mt-4">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src={chinatown_logo}
                alt="Your Company"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-indigo-600 border-b-2 border-indigo-500"
                        : "text-gray-500 hover:text-gray-700",
                      "px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <CartIcon />
            <Login />
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
  
