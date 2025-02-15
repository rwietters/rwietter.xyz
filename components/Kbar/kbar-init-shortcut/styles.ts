import { styled } from 'features/ui/theme';

export const KbarContainer = styled('div', {
  paddingTop: '2rem',
});

export const KbarButton = styled('button', {
  cursor: 'pointer',
  color: '$text_alt_color',
  padding: '2px 4px',
  borderRadius: '1em',
  border: 'none',
  outline: 'none',
  transition: '$transitonTheme',
  textAlign: 'center',
  '--fluid-type-min': '0.9rem',
  '--fluid-type-max': '1rem',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    background: '$sub_alt_color',
  },

  code: {
    background: '$sub_color',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '$text_alt_color',
    fontFamily: 'Futura std',
    padding: '2px 4px',
    letterSpacing: '0.1em',
    borderRadius: '1em',
    transition: '$transitonTheme',
    '--fluid-type-min': '.9rem',
    '--fluid-type-max': '1rem',
  },
});
