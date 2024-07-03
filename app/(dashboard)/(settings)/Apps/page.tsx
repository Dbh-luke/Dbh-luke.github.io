import SubNav from "../../../_components/subNav";
import style from './page.module.scss'

export default function Apps() {
    return (
        <section className={style.main}>
            <SubNav num={5}/>
        </section>
    );
}
