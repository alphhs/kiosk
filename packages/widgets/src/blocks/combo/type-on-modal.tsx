
import { NextImage } from '@kiosk/ui/image';

// import { registry } from '../../registry';
import { CodyImg } from '../image/image-block-type';
import { ComboItemType } from './combo-block';

export function TypeOnModal({ id, items = [], image }: { id: string; items: ComboItemType[]; image: CodyImg }) {
  // const BuyComponent = registry?.btnBuyAction;
  // const SingleProduct = registry.product!;

  return (
    <>
      <div className="skeleton relative rounded-none">
        <NextImage
          id={image.id}
          file_name={image.file_name}
          width={image.width || 80}
          height={image.height || 80}
          onClick={() => (document.getElementById(`modal-${id}`) as HTMLDialogElement)?.showModal()}
        />
      </div>

      <dialog id={`modal-${id}`} className="modal modal-bottom lg:modal-middle relative z-10">
        <div className="modal-box p-0 lg:max-w-5xl">
          <div className="bg-base-200 p-4">
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm absolute top-2 right-2">✕</button>
            </form>
          </div>

          <div className="grid gap-6 p-4 lg:grid-cols-2">
            <div className="border-base-content/20 hidden border-r pr-6 lg:block">
              <NextImage
                id={image.id}
                file_name={image.file_name}
                width={image.width || 80}
                height={image.height || 80}
                onClick={() => (document.getElementById(`modal-${id}`) as HTMLDialogElement)?.showModal()}
              />
            </div>
            <div className="max-h-[60vh] space-y-8 overflow-x-hidden overflow-y-auto">
              {items.map((item, idx) => {
                return (
                  <div key={idx} className="space-y-2">
                    {!!item.name && <h5 className="text-left text-base font-semibold">{item.name}</h5>}
                    {!!item.description && (
                      <div className="text-left text-sm" dangerouslySetInnerHTML={{ __html: item.description }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  );
}
