import React from 'react';
import MenuTitle from '@/components/core/Menu/MenuTitle/MenuTitle';
import MenuUList from '@/components/core/Menu/MenuUList/MenuUList';
import MenuList from '@/components/core/Menu/MenuList/MenuList';

function Menu({ children }) {
  return <div className="flex flex-col gap-2 px-3 py-4">{children}</div>;
}

Menu.Title = MenuTitle;
Menu.UList = MenuUList;
Menu.List = MenuList;

export default Menu;
