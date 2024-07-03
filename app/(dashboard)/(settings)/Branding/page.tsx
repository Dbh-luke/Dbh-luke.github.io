import SubNav from "../../../_components/subNav";
import style from './page.module.scss'

export default function Branding() {
    return (
        <section className={style.main}>
            <SubNav num={6}/>
        </section>
    );
}
