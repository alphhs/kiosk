import { calculateLink, getDateFull } from '@cody-mn/utils';
import { Link } from '@tanstack/react-router';

import { NewsesQuery } from '../../blocks/media/newses.generated';

type NewsType = NewsesQuery['newses']['edges'][0]['node'];

export default function TemplatePhoto({ news }: { news: NewsType }) {
  return (
    <article key={news.id} className="group/singleNews">
      {news.thumbnail && (
        <Link
          to={`/media/${news.id}`}
          className="bg-base-100 relative block aspect-[16/9] w-full overflow-hidden rounded sm:aspect-[2/1] lg:aspect-[3/2]"
        >
          <img
            alt={news.title}
            src={calculateLink(news.thumbnail.id, news.thumbnail.file_name || news.thumbnail.fileName, 800, 0)}
            className="absolute inset-0 size-full overflow-hidden rounded object-cover transition-transform duration-200 group-hover/singleNews:scale-110"
          />
          <div className="bg-base-200 absolute right-0 bottom-0 left-0 z-10 w-full space-y-2 p-3 opacity-80 group-hover/singleNews:opacity-100">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={news.createdAt} className="text-neutral">
                {getDateFull(news.createdAt)}
              </time>
              {news.tagList && (
                <div className="flex gap-2">
                  {news.tagList.map((tag) => (
                    <Link
                      key={tag}
                      to={`/media/tag/${tag}`}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <h3 className="group-hover/singleNews:text-accent line-clamp-1 text-sm font-semibold group-hover/singleNews:line-clamp-none lg:text-base">
              <Link to={`/media/${news.id}`}>{news.title}</Link>
            </h3>
          </div>
        </Link>
      )}
    </article>
  );
}
