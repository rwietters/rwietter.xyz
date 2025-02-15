import { styled } from 'features/ui/theme';

export const Grid = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gridAutoFlow: 'row',
  gridTemplateRows: 'repeat(2, 1fr)',
  paddingTop: '$4',

  'div > div': {
    height: '100%',
  },
});
