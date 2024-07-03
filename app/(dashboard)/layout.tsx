import type { Metadata } from "next";
import style from './page.module.scss'

export const metadata: Metadata = {
  title: "Home"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={style.main}>
      {children}
    </section>
  );
}
