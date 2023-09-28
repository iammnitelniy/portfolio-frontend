import { useEffect, RefObject } from 'react';

type HandlerType = (event: MouseEvent) => void;

const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: HandlerType) => {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;