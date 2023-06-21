import { SVGProps } from "react";
const BasketIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={25}
        fill="#333"
        {...props}
    >
        <path d="M27.494 6.675A2.015 2.015 0 0 0 25.984 6h-5.99a6 6 0 1 0-12 0h-5.99a2.016 2.016 0 0 0-1.5.675 2 2 0 0 0-.49 1.56l1.782 15a2 2 0 0 0 2 1.765h20.406a2 2 0 0 0 2-1.765l1.783-15a2 2 0 0 0-.491-1.56ZM13.994 2a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4Zm10.22 21a.017.017 0 0 1-.012 0H3.775L2.004 8h5.99v3a1 1 0 1 0 2 0V8h8v3a1 1 0 0 0 2 0V8h6l-1.78 15Z" />
    </svg>
);
export { BasketIcon };
