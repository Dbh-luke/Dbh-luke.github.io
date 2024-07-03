import SubNav from "../../../_components/subNav";
import style from './page.module.scss'

export default function General() {
    return (
        <section className={style.main}>
            <SubNav num={1}/>
        </section>
    );
}
