import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import './Loader.scss';

interface LoaderProps {
   className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
   return (
      <div className="lds-heart"><div></div></div>
   );
}