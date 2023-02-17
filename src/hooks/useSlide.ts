import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const useSlide = (slideNumber: number, isLast: boolean = false) => {
  const router = useRouter();

  const changeSlide = useCallback(
    (e: KeyboardEvent) => {
      if (e.key == 'ArrowLeft' && slideNumber > 0) {
        window.removeEventListener('keydown', changeSlide);
        router.push(`/slides/${slideNumber - 1}`);
      } else if (e.key == 'ArrowRight' && !isLast) {
        window.removeEventListener('keydown', changeSlide);
        router.push(`/slides/${slideNumber + 1}`);
      }
    },
    [slideNumber, isLast, router]
  );

  useEffect(() => {
    window.addEventListener('keydown', changeSlide);
  }, [changeSlide]);
};

export default useSlide;
