import { AvailableThemes, dark, light } from 'features/ui/theme';

type T = {
  // eslint-disable-next-line no-unused-vars
  [Key in AvailableThemes]: string;
};

const themes: T = {
  dark,
  light,
};

export const applyTheme = (type: AvailableThemes) => {
  const theme = themes[type];
  const classTheme = document.querySelector('body') as HTMLBodyElement;
  classTheme.className = theme;
};
