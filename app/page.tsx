import styles from "./page.module.scss";
import Link from "next/link";

export default function Login() {
  return (
    <main className={styles.main}>
        <div>
            <h1>Login</h1>
            <form action="login" method="post">
                <input type="email" name="email" id="email" placeholder="JohnDoe@gmail.com"/>
                <input type="password" name="password" id="password" placeholder="Password"/>
                <Link href="/home" className={styles.Button}>
                    <input type="button" value="login" />
                </Link>
            </form>
        </div>
    </main>
  );
}
