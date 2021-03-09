export const colors = {
  alpha: '#E75C3D',
  beta: '#FAB143',
  gamma: '#E8D263',
  delta: '#6AA585',
  epsilon: '#2E7C78',
};

export const effects = {
  outline: (
    color: string,
    size: string,
  ) => `-${size} 0 ${color}, 0 ${size} ${color}, ${size} 0 ${color},
  0 -${size} ${color};`,
};
