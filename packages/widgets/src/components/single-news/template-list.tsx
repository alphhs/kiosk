import { calculateLink, getDateFull } from '@cody-mn/utils';
import { Link } from '@tanstack/react-router';

import { NewsesQuery } from '../../blocks/media/newses.generated';

type NewsType = NewsesQuery['newses']['edges'][0]['node'];

export default function TemplateList({ news }: { news: NewsType }) {
  return (
    <article key={news.id} className="group/singleNews grid w-full grid-cols-3 items-center gap-8">
      {news.thumbnail && (
        <Link to={`/media/${news.id}`} className="col-span-1 mb-4 block w-full overflow-hidden rounded-2xl">
          <img
            alt={news.title}
            src={calculateLink(news.thumbnail.id, news.thumbnail.file_name || news.thumbnail.fileName, 800, 0)}
            className="bg-base-100 aspect-[16/9] w-full object-cover transition-transform duration-200 group-hover/singleNews:scale-110 sm:aspect-[2/1] lg:aspect-[3/2]"
          />
        </Link>
      )}
      <div className="col-span-2 space-y-3">
        <div className="flex items-center gap-x-4 text-sm">
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
        <h3 className="text-base font-semibold lg:text-lg">{news.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: news.body || '' }} className="h-24 overflow-hidden" />
        <Link to={`/media/${news.id}`} className="text-neutral group-hover/singleNews:text-accent mt-10 block">
          Дэлгэрэнгүй унших
        </Link>
      </div>
    </article>
  );
}
