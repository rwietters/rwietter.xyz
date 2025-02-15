import { styled } from 'features/ui/theme';

export const CardContainer = styled('section', {
  maxWidth: '350px',
  width: '100%',
});

export const PostTitle = styled('p', {
  justifySelf: 'flex-start',
  lineHeight: '1.2',
  paddingTop: '.5rem',
  fontWeight: 600,
  fontFamily: 'Raleway, sans-serif',
  '--fluid-type-min': '1.1rem',
  '--fluid-type-max': '1.6rem',
});

export const CardInformations = styled('section', {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'flex-start',
  color: '$text_color',
  overflowWrap: 'anywhere',

  '#description': {
    padding: '.5rem 0 1rem 0',
    lineHeight: '1.3',
    fontFamily: 'Futura Std, sans-serif',
    fontWeight: 200,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 'max-content',
    width: '100%',
    display: 'block',
    '--fluid-type-max': '1.2rem',
  },

  '#category': {
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    padding: '.1rem .4rem',
    letterSpacing: '-0.02em',
    fontFamily: 'Futura Std, sans-serif',
    fontWeight: 400,
    background: '$sub_color',
    color: '$text_color',
    borderRadius: '4px',
    transition: '$transitonTheme',
    '--fluid-type-max': '1rem',
  },
});
