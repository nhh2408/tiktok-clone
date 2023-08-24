import images from "~/assets/images";
import { forwardRef, useState } from "react";
import classNames from "classnames";
import styles from "./Image.module.scss";

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");
    const handleError = () => {
      setFallback(customFallback);
    };
    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        {...props}
        alt={alt}
        onError={handleError}
      />
    );
  }
);

export default Image;
