import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserIcon({ onProfileClick, onSignOutClick }) {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="flex rounded-full text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <UserCircleIcon className="h-8 w-8 text-gray-500" />
        </MenuButton>
      </div>
      <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
        <MenuItem>
          {({ active }) => (
            <a
              href="#"
              onClick={onProfileClick}
              className={classNames(
                active ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm text-gray-700"
              )}
            >
              Your Profile
            </a>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <a
              href="#"
              onClick={onSignOutClick}
              className={classNames(
                active ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm text-gray-700"
              )}
            >
              Sign out
            </a>
          )}
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
