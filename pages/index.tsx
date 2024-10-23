import Image from "next/image";
import { Card } from "@repo/ui/card";
import { BannerTag } from "@repo/ui/bannerTag";
import styles from "./pageStyles/page.module.css"; // Importing the CSS module

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={`${styles.gradient} ${
        small ? styles.smallBlur : styles.largeBlur
      } ${conic ? styles.conic : ""} ${className}`}
    />
  );
}

const LINKS = [
  {
    title: "Blog",
    href: "/blog",
    description: "Learn more.",
  },
];

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <BannerTag
          iBannerTag={{
            bannerText: "example/turborepo architecture/",
            codeText: "stunning-broccoli-site",
          }}
        />
      </div>

      <div className={styles.centerContainer}>
        <div className={styles.textContent}>
          <div className={styles.imageContainer}>
            <div className={styles.circleBackground}>
              <Image alt="Turborepo" height={614} src="circles.svg" width={614} />
            </div>
            <div className={styles.imageWrapper}>
              <Gradient className={styles.gradientSmall} conic small />
            </div>

            <div className={styles.logo}>
              <Image alt="" height={120} priority src="lmnas2.svg" width={120} />
            </div>
          </div>
          <Gradient className={styles.largeGradient} conic />
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Website:3000</h1>
          </div>
        </div>
      </div>

      <div className={styles.gridTemplate}>
        {LINKS.map(({ title, href, description }) => (
          <Card href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </main>
  );
}
