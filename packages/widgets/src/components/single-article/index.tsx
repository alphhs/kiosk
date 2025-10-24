import { Link } from '@tanstack/react-router';

import { ArticleBlockProps } from '../../blocks/article/article-block-type';

export function SingleArticle({ title, slug, image, author, impressionsCount }: SingleArticleProps) {
  if (!image?.attachment || !title) return null;

  return (
    <Link to={`/articles/${slug}`} className="space-y-5">
      <img
        className="aspect-[2/1] w-full rounded-xl object-cover"
        src={image.attachment}
        alt={title}
      />
      <div className="space-y-1">
        <p className="text-lg">{title}</p>
        <p className="flex items-center truncate text-sm">
          <span>{author?.fullName || author?.username || '-'}</span>
          <span className="bg-neutral mx-2 inline-block h-1 w-1 rounded-full" />
          <span className="text-neutral">{author?.followersCount || 0} дагагчид</span>
          <span className="bg-neutral mx-2 inline-block h-1 w-1 rounded-full" />
          <span className="text-neutral">{impressionsCount || 0} үзсэн</span>
        </p>
      </div>
    </Link>
  );
}

export interface SingleArticleProps {
  id: string;
  title?: string;
  preview?: string;
  slug?: string;
  template?: ArticleBlockProps['template'];
  image?: {
    id?: string;
    attachment?: string;
    attachmentFileName?: string;
  };
  author?: {
    fullName?: string;
    username?: string;
    followersCount?: number;
  };
  tagList?: string[];
  updatedAt?: string;
  impressionsCount?: number;
}
