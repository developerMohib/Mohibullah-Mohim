import { useParallax } from "react-scroll-parallax";

const HeadingParalox = () => {
  const parallax = useParallax({});

  return (
    <h1
      ref={parallax.ref}
      className="text-stroke"
      // Use the progress variable to change the width of the stroke as progress updates
      style={{ textStrokeWidth: `calc(20px * var(--progress))` }}
    >
      Hello World
    </h1>
  );
};

export default HeadingParalox;
