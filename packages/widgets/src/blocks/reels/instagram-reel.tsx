import { formatMoney } from '@cody-mn/utils';
import { HitObject } from '@cody-mn/utils/es-service';
import Link from '../../components/Link';

export function InstagramReel({ id, product }: { id: string; product?: HitObject }) {
  return (
    <div className="grid h-[503px] place-content-center place-items-center gap-2">
      <blockquote
        className="instagram-media skeleton h-[458px] max-h-[458px] w-full p-0 transition-all duration-300 will-change-transform group-[.swiper-slide-active]/slide:h-[503px] group-[.swiper-slide-active]/slide:max-h-[503px]"
        data-instgrm-permalink={`https://www.instagram.com/p/${id}`}
        data-instgrm-version="14"
      />
      {product && (
        <div className="bg-base-100 z-10 -mt-3 flex w-[326px] items-center gap-2 rounded-md p-2">
          <Link href={`/product/${product.slug}`} className="block size-12 flex-none">
            <img src={product?.image} alt={product.name} />
          </Link>
          <Link href={`/product/${product.slug}`} className="block overflow-hidden">
            <h5 className="truncate text-sm">{product.name}</h5>
            <p className="text-sm whitespace-nowrap">{formatMoney(product.selling_price)}</p>
          </Link>
        </div>
      )}
    </div>
  );
}
