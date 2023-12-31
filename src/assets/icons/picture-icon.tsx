import { SVGProps } from "react";
const PictureIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <path
            fill="#828282"
            d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 2v12.844l-3.259-3.258a1.998 1.998 0 0 0-2.828 0l-2.5 2.5-5.5-5.5a2 2 0 0 0-2.828 0L5 18.671V7h22ZM5 21.5l6.5-6.5 10 10H5v-3.5ZM27 25h-2.671l-4.5-4.5 2.5-2.5L27 22.672V25Zm-9-12.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
        />
    </svg>
);
export { PictureIcon };
