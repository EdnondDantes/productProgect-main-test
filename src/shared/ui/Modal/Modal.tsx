import React, { useState, useCallback, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
   className?: string;
   children?: React.ReactNode;
   isOpen?: boolean;
   onClose?: () => void
   lazyLoading?: boolean
}

export const Modal = (props: ModalProps) => {
    
    const { 
       className, 
       children, 
       isOpen, 
       onClose,
       lazyLoading,
    } = props;
    
    const ANIMATION_DELAY = 300;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<NodeJS.Timeout>();


    useEffect(() => {
      if (isOpen) {
        window.addEventListener('keydown', onEscapePress);
      }

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        window.removeEventListener('keydown', onEscapePress);
      }
    }, [isOpen]);


    useEffect(() => {
      if (isOpen) {
        setIsMounted(true);
      }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
      if (onClose) {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
          onClose();
          setIsClosing(false);
        }, ANIMATION_DELAY);
      }  
    },[onClose]);

    const onContentClick = (e: React.MouseEvent) => {
      e.stopPropagation();
    }

    const onEscapePress = useCallback((e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    }, [closeHandler]);


    if (lazyLoading && !isMounted) {
      return null;
    }


    const mods: Record<string, boolean> = {
      [cls.opened]: isOpen,
      [cls.isClosing]: isClosing
    };

   return (
      <Portal>
         <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
               <div className={cls.content} onClick={onContentClick}>
                  {children}
               </div>
            </div>
         </div>
      </Portal>
   );
}
