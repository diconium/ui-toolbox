export const typeToColor = (type = 'info', filled = false) => {
  const shade = filled ? '' : '-50';
  let color = `bg-toolbox-primary${shade}`;

  switch (type) {
    case 'success':
      color = `bg-toolbox-feedback-green${shade}`;
      break;
    case 'warning':
      color = `bg-toolbox-feedback-orange${shade}`;
      break;
    case 'error':
      color = `bg-toolbox-feedback-red${shade}`;
      break;
    default:
      break;
  }

  return color;
};

export const typeToBorderColor = (type = 'info') => {
  let border = 'border-toolbox-primary';

  switch (type) {
    case 'success':
      border = 'border-toolbox-feedback-green';
      break;
    case 'warning':
      border = 'border-toolbox-feedback-orange';
      break;
    case 'error':
      border = 'border-toolbox-feedback-red';
      break;
    default:
      break;
  }

  return border;
};

export const typeToIcon = (type = 'info') => {
  let icon = 'circle-information';

  switch (type) {
    case 'success':
      icon = 'circle-check';
      break;
    case 'warning':
      icon = 'triangle-exclamation';
      break;
    case 'error':
      icon = 'circle-xmark';
      break;
    default:
      break;
  }

  return icon;
};

export const typeToTextColor = (type = 'info', filled = false) => {
  if (filled) {
    return 'text-toolbox-white';
  }
  let text = 'text-toolbox-primary';

  switch (type) {
    case 'success':
      text = 'text-toolbox-feedback-green';
      break;
    case 'warning':
      text = 'text-toolbox-feedback-orange';
      break;
    case 'error':
      text = 'text-toolbox-feedback-red';
      break;
    default:
      break;
  }

  return text;
};

export default {
  typeToColor,
  typeToBorderColor,
  typeToIcon,
  typeToTextColor,
};
