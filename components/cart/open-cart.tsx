import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center justify-center text-white transition-colors hover:text-cyan-400">
      <ShoppingCartIcon
        className={clsx(
          "h-6 w-6 transition-all ease-in-out",
          className,
        )}
      />

      {quantity ? (
        <div className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-cyan-400 text-center text-xs font-bold text-black">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
