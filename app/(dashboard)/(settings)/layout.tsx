import styles from "./page.module.scss";
import Nav from "../../_components/nav";
import Image from "next/image";
import type { Metadata } from "next";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { VscVerifiedFilled } from "react-icons/vsc";

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
              <label>
                <input type="search" name="search" id="search" placeholder="Search" />
                <span><IoIosSearch /></span>
              </label>
              <button type="button"><FaPlus /> Invite</button>
              <button type="button">Upgrade</button>
              <div>
                <Image
                src = "/mj_portrait.jpg"
                width={30}
                height={30}
                alt="Profile pic"
                />
                <div>
                  <span></span>
                  <VscVerifiedFilled />
                </div>
              </div>
            </form>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
