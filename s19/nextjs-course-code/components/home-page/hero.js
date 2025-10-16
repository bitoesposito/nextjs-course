import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/vito.png"
          alt="An image showing Vito"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Vito</h1>
      <p>
        Learning web development - especially frontend frameworks like Angular or React.
      </p>
    </section>
  );
}
