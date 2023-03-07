import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import { ButtonProps } from './type';
import LoadingIcon from '@/icons/LoadingIcon';

function Button({
  type = 'solid',
  htmlType = 'button',
  shape = 'border',
  disabled = false,
  loading = false,
  className,
  children,
  onClick,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  const [showLoading, setShowLoading] = useState<boolean | number>(!!loading);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const loadingOrDelay: boolean | number = typeof loading === 'boolean' ? loading : loading?.delay || true;

  useEffect(() => {
    let delayTimer: number | null = null;

    if (typeof loadingOrDelay === 'number') {
      delayTimer = window.setTimeout(() => {
        delayTimer = null;
        setShowLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setShowLoading(loadingOrDelay);
    }

    function cleanUpTimer() {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    }

    return cleanUpTimer;
  }, [loadingOrDelay]);

  const classes = classNames(
    {
      ['btn']: type !== 'text' && type !== 'link',
      [`btn-${type}`]: type,
      [`btn-${shape}`]: shape,
      ['btn-disabled']: disabled && type !== 'text' && type !== 'link',
      ['btn-text-disabled']: disabled && (type === 'text' || type === 'link'),
      ['btn-loading']: showLoading && type !== 'text' && type !== 'link',
      ['btn-text-loading']: showLoading && (type === 'text' || type === 'link'),
    },
    className
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (showLoading || disabled) {
      event.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(event);
  };

  if (type == 'link') {
    return (
      <a
        className={classes}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <>
      <button
        type={htmlType}
        className={classes}
        disabled={disabled}
        onClick={handleClick}
        ref={buttonRef}
        {...props}
      >
        {showLoading && (
          <span className="btn-icon">
            <LoadingIcon
              size={8}
              color="#ffffff"
            />
          </span>
        )}
        {children}
      </button>
    </>
  );
}

export default Button;
