import { formatMoney } from '@cody-mn/utils';
import { HitObject } from '@cody-mn/utils/es-service';
import Link from '../../components/Link';

export function FacebookReel({ id, product }: { id: string; product?: HitObject }) {
  return (
    <div className="grid h-[476px] place-content-center place-items-center gap-2">
      <iframe
        className="max-h-[430px] rounded-md transition-all duration-300 will-change-transform group-[.swiper-slide-active]/slide:max-h-[476px]"
        src={`https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${id}%2F&show_text=false&width=267 `}
        width="267"
        height={476}
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {product && (
        <div className="bg-base-100 flex w-[267px] items-center gap-2 rounded-md p-2">
          <Link href={`/product/${product.slug}`} className="block size-12 flex-none">
            <img src={product.image} alt={product.name} />
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
