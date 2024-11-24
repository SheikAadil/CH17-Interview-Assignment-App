import React from 'react';
import { Breadcrumbs } from '@material-tailwind/react';

const Breadcrumb = ({ links }) => {
  return (
    <Breadcrumbs separator="-" className="text-xl font-bold mt-3 mb-3">
      {links.map((link, index) => (
        <a key={index} href={link.href} className={`px-2 ${link.active ? 'text-black' : 'opacity-60'}`}>
          {link.label}
        </a>
      ))}
    </Breadcrumbs>
  );
};

export const generateBreadcrumbs = (location) => {
  const paths = location.pathname.split('/').filter(Boolean); 
  const state = location.state || {};

  const breadcrumbs = [{ label: 'Home', href: '/', active: paths.length === 0 }];

  if (paths[0] === 'categories' || paths.length === 0) {
    breadcrumbs.push({ label: 'Categories', href: '/categories', active: true });
  }

  if (paths[0] === 'offers') {
    breadcrumbs.push({ label: 'Categories', href: '/categories', active: false });
    breadcrumbs.push({
      label: state.categoryName || 'Category',
      href: location.pathname,
      active: true,
    });
  }
  return breadcrumbs;
};

export default Breadcrumb;
