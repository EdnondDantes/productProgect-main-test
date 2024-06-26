
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import React from 'react';
import { Portal } from '../Portal/Portal';

interface ModalProps {
   className?: string;
   children?: React.ReactNode;
   isOpen?: boolean;
   onClose?: () => void
}


export const Modal = (props: ModalProps) => {
    
    const { 
       className, 
       children, 
       isOpen, 
       onClose 
    } = props;
    
    const ANIMATION_DELAY = 300;

    const [isClosing, setIsClosing] = React.useState(false);
    const timerRef = React.useRef<NodeJS.Timeout>();

    const closeHandler = React.useCallback(() => {
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

    const onEscapePress = React.useCallback((e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    }, [closeHandler]);

    React.useEffect(() => {

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