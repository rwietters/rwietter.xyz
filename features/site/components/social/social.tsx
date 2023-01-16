import { links, SocialLink } from 'data/social-links';
import { Link, SocialContainer } from './styles';

const SidebarSocialIcons = () => (
  <SocialContainer>
    {links.map((link: SocialLink) => (
      <Link
        key={link.url}
        href={link.url}
        target="_blank"
        rel="noreferrer"
        title={link.name}
        aria-label={link.name}
        social={link.color as any}
      >
        {link.icon}
      </Link>
    ))}
  </SocialContainer>
);

export { SidebarSocialIcons };
