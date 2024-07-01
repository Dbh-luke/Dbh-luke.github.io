import styles from "./page.module.scss";
import Nav from "../../_components/nav";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings"
};

export default function Settings({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav num={8}/>
      <section className={styles.main}>
        <div>
          <div id="heading">
            <div id="name">
              <h1>Luke Forte</h1>
              <p>Manage your details and personal preferences here.</p>
            </div>
            <form action="search" method="get">
              <input type="search" name="search" id="search" placeholder="Search" />
              <button type="button">Invite</button>
              <button type="button">Upgrade</button>
              <Image
              src = "/"
              width={30}
              height={30}
              alt="Profile pic"
              />
            </form>
          </div>
          <div id="subNav">
            <ul>
              <li>General</li>
              <li>Security</li>
              <li>Billing</li>
              <li>Notifications</li>
              <li>Apps</li>
              <li>Branding</li>
              <li>Refer a friend</li>
              <li>Sharing</li>
            </ul>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
