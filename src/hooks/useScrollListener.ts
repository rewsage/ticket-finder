import { useEffect } from "react";

export function useScrollListener(onScroll: EventListener) {
    useEffect(() => {
        document.body.addEventListener("scroll", onScroll);
        return () => document.body.removeEventListener("scroll", onScroll);
    }, [onScroll]);
}
