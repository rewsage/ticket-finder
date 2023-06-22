import { SVGProps } from "react";
const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="#FF5500"
        {...props}
    >
        <rect width={20} height={20} fill="#F50" rx={4} />
        <path
            fill="#fff"
            d="M14.5 10a.375.375 0 0 1-.375.375h-8.25a.375.375 0 1 1 0-.75h8.25A.375.375 0 0 1 14.5 10Z"
        />
    </svg>
);
export { MinusIcon };
