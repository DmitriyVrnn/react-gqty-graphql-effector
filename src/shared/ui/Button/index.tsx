import { ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({
  children,
  onClick,
  icon,
  className,
  disabled,
  type = 'button',
}: ButtonProps) => (
  <button
    className={`${styles.button} ${className}`}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {icon && <span className={styles.icon}>{icon}</span>}
    {children}
  </button>
);
