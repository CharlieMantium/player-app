export const colors = {
  alpha: '#0ead69',
  beta: '#ffd23f',
  gamma: '#ee4266',
  delta: '#3bceac',
  epsilon: '#540d6e',
};

export const effects = {
  outline: (
    color: string,
    size: string,
  ) => `-${size} 0 ${color}, 0 ${size} ${color}, ${size} 0 ${color},
  0 -${size} ${color};`,
};
