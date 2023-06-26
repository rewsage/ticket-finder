import { RefObject, useEffect } from "react";

export function useOutsideClickListener(
    ref: RefObject<HTMLElement>,
    onClickOutside: EventListener
) {
    useEffect(() => {
        const handleClickOutside: EventListener = (event) => {
            if (
                ref.current &&
                event.target instanceof Node &&
                !ref.current.contains(event.target)
            ) {
                onClickOutside(event);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, onClickOutside]);
}
