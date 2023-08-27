import { useEffect, useRef, useState } from "react";

type LazyImageProps = {
  imgSrc: string;
  imgAlt: string;
};

const LazyImage = ({ imgSrc, imgAlt }: LazyImageProps) => {
  const [inView, setInView] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  let callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (imgRef?.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return inView ? (
    <img ref={imgRef} src={imgSrc} alt={imgAlt} />
  ) : (
    <img
      ref={imgRef}
      alt={imgAlt}
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "#ddd",
      }}
    />
  );
};

export default LazyImage;
