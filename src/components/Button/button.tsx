import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: string;
    variant?: "regular" | "outlined";
    size?: "normal" | "small";
    status?: "active" | "disabled";
}

function Button({
    children,
    size = "normal",
    variant = "regular",
    status = "active",
    ...props
}: ButtonProps) {
    const className = classNames(
        styles.button,
        styles[size],
        styles[variant],
        styles[status]
    );

    return (
        <button {...props} className={className}>
            {children}
        </button>
    );
}

export { Button };
