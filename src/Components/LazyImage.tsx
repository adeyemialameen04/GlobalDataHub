import { useEffect, useRef, useState } from "react";

type LazyImageProps = {
  imgSrc: string;
};

const LazyImage: React.FC<LazyImageProps> = ({ imgSrc }) => {
  const [inView, setInView] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  let callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
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
    <img ref={imgRef} src={imgSrc} alt="" />
  ) : (
    <img
      ref={imgRef}
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "#ddd",
      }}
    />
  );
};

export default LazyImage;