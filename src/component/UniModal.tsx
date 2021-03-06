import React, { useEffect, ReactElement } from 'react';
import PropTypes from 'prop-types';

type UniModalProps = {
  open: boolean,
  hideFn: () => void,
  header: null | string | ReactElement,
  body: null | string | ReactElement,
  footer: null | string | ReactElement,
  closeOnOutsideClick: null | boolean
};

const UniModal: React.FC<UniModalProps> = ({
  open = false,
  hideFn,
  header = null,
  body = null,
  footer = null,
  closeOnOutsideClick = false,
}): (JSX.Element | null) => {
  useEffect(() => {
    if (closeOnOutsideClick && open && hideFn) {
      const clickHandler = (evt: Event) => {
        if (!(evt.target as HTMLElement).closest('.uni-modal')) {
          hideFn();
        }
      };
      window.addEventListener('click', clickHandler, true);
      return () => {
        window.removeEventListener('click', clickHandler, true);
      };
    }
    return () => {};
  }, [closeOnOutsideClick, open, hideFn]);

  if (!open) {
    return null;
  }

  return (
    <div className="uni-modal">
      <button className="uni-modal__close-button" type="button" onClick={hideFn}>x</button>
      {header && <div className="uni-modal__header">{header}</div>}
      <div className="uni-modal__body">{body}</div>
      {footer && <div className="uni-modal__footer">{footer}</div>}
    </div>
  );
};

UniModal.propTypes = {
  open: PropTypes.bool.isRequired,
  hideFn: PropTypes.func.isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  closeOnOutsideClick: PropTypes.bool,
};

export default UniModal;
