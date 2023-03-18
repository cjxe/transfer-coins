import React from 'react';
import MenuTitle from '@/components/Menu/MenuTitle/MenuTitle';
import MenuUList from '@/components/Menu/MenuUList/MenuUList';
import MenuList from '@/components/Menu/MenuList/MenuList';

function Menu({ children }) {
  return <div className="flex flex-col gap-2 bg-white px-3 py-4 dark:bg-gray-900">{children}</div>;
}

Menu.Title = MenuTitle;
Menu.UList = MenuUList;
Menu.List = MenuList;

export default Menu;
