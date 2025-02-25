
'use client';

import { useRef } from "react";

export default function ScrollWrap ({id, children}) {
  const section1Ref = useRef(null);

  const scrollToSection1 = () => {
    section1Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <button onClick={scrollToSection1}>Go to Section 1</button>
      <section ref={section1Ref} id={id}>
       {children}
      </section>
    </>
  );
}
    