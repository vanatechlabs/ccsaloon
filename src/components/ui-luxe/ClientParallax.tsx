import { useEffect, useState } from "react";

export function Parallax(props: any) {
  const [ParallaxComponent, setParallaxComponent] = useState<any>(null);

  useEffect(() => {
    import("react-parallax")
      .then((mod) => {
        const P = mod.Parallax || (mod as any).default?.Parallax || (mod as any).default;
        if (P) setParallaxComponent(() => P);
      })
      .catch((err) => console.error("Failed to load react-parallax", err));
  }, []);

  if (!ParallaxComponent) {
    return (
      <div
        className={props.className}
        style={{
          backgroundImage: `url(${props.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          ...props.style,
        }}
      >
        {props.children}
      </div>
    );
  }

  return <ParallaxComponent {...props} />;
}
