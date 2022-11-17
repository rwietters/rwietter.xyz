import Link from 'next/link';
import React from 'react';
import {
  CardContainer, CardImage, CardInformations, CardImageContainer,
} from './styles';

const Card = ({ article }: any) => (
  <Link href={`/blog/article/${article.attributes.slug}`} passHref>
    <CardContainer>
      <CardImageContainer>
        <CardImage
          src={article.attributes.image.data.attributes.url}
          alt="Cover image of the article"
          width={70}
          height={70}
          loading="lazy"
        />
      </CardImageContainer>

      <CardInformations>
        <h1 id="title">
          {article.attributes.title}
        </h1>
        <h2 id="description">
          {article.attributes.description}
        </h2>
        <h3 id="category">
          #
          {article.attributes.category.data.attributes.name}
        </h3>
      </CardInformations>
    </CardContainer>
  </Link>
);

export { Card };
