import { classNames } from 'shared/lib/classNames/classNames';
import React, { ChangeEvent, InputHTMLAttributes, useEffect, useRef } from 'react';

import cls from './Input.module.scss';


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
   className?: string;
   value?: string;
   onChange?: (value: string) => void;
   autofocus?: boolean;
}

export const Input = (props: InputProps) => {
   
   const {
      className,
      value,
      onChange,
      type = 'text',
      placeholder,
      autofocus,
      ...otherProps
   } = props;

   const inputRef = useRef<HTMLInputElement>(null);

   const [isFocused, setIsFocused] = React.useState(false);
   const [caretPosition, setCaretPosition] = React.useState(0);

   useEffect(() => {
      if (autofocus) {
         setIsFocused(true);
         inputRef.current?.focus();
      }
   }, [autofocus]);

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
   };

   const onBlur = () => {
      setIsFocused(false);
   };
   
   const onFocus = () => {
      setIsFocused(true);
   };

   const onSelect = (e: any) => {
      setCaretPosition(e?.target?.selectionStart || 0);
   };
      

   return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
         { placeholder && (
          <div className={cls.placeholder}>
            {`${placeholder}>`} 
         </div>
         )}

         <div className={cls.caretWrapper}>
            <input
             ref={inputRef}
             type={type}
             value={value}
             onChange={onChangeHandler}
             className={cls.Input}
             onFocus={onFocus}
             onBlur={onBlur}
             onSelect={onSelect}
             {...otherProps}
            />
            {isFocused && 
            <span
             className={cls.caret}
             style={{left: `${caretPosition * 9}px`}} 
             />
            }
         </div>
      </div>
   );
}

