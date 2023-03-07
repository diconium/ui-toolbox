import React, { PropsWithChildren } from 'react';
import Icon from '../Icon';
import PrimaryButton from '../Button/Primary';
import TextButton from '../Button/Text';

export interface Props extends PropsWithChildren {
  title: string;
  acknowledgement?: string;
  dismissal?: string;
  onAcknowledge?: () => void;
  onDismiss?: () => void;
}

function Modal({
  title,
  children,
  acknowledgement = 'OK',
  dismissal = 'CANCEL',
  onAcknowledge = () => {},
  onDismiss = () => {},
}: Props) {
  const isSimpleContent = typeof children === 'string' || children instanceof String;

  return (
    <div className="max-w-sm flex flex-col bg-toolbox-white rounded-2xl shadow p-6">
      <div className="flex justify-end items-center">
        <button
          type="button"
          onClick={() => onDismiss()}
        >
          <Icon
            icon="xmark"
            size="s"
          />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-toolbox-neutral text-2xl">{title}</div>
        <div className="py-6">
          {isSimpleContent && (
            <div className="text-toolbox-neutral leading-5 text-base mx-2">{children}</div>
          )}
          {!isSimpleContent && children}
        </div>
      </div>
      <div className="mx-2 flex flex-col justify-center">
        <PrimaryButton
          label={acknowledgement}
          onClick={() => onAcknowledge()}
        />
        <TextButton
          label={dismissal}
          onClick={() => onDismiss()}
        />
      </div>
    </div>
  );
}

export default Modal;
