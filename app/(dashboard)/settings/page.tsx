import styles from "./page.module.scss";
import Nav from "../../_components/nav";
import Image from "next/image";

export default function Settings() {
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

          </div>
          <div id="message">

          </div>
          <div id="basics">

          </div>
          <div id="devices">

          </div>
        </div>
      </section>
    </>
  );
}
