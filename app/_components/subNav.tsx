import '../_styles/subNav.scss'
import Link from 'next/link';

interface page{
    num: number
}

export default function SubNav(pageNum:page){
    return(
        <div id="subNav">
            <ul>
            {pageNum.num != 1 ? <Link href="/General"><li>General</li></Link> : <Link href="/General" id='active'><li>General</li></Link>}
            {pageNum.num != 2 ? <Link href="/Security"><li>Security</li></Link> : <Link href="/Security" id='active'><li>Security</li></Link>}
            {pageNum.num != 3 ? <Link href="/Billing"><li>Billing</li></Link> : <Link href="/Billing" id='active'><li>Billing</li></Link>}
            {pageNum.num != 4 ? <Link href="/Notifications"><li>Notifications</li></Link> : <Link href="/Notifications" id='active'><li>Notifications</li></Link>}
            {pageNum.num != 5 ? <Link href="/Apps"><li>Apps</li></Link> : <Link href="/Apps" id='active'><li>Apps</li></Link>}
            {pageNum.num != 6 ? <Link href="/Branding"><li>Branding</li></Link> : <Link href="/Branding" id='active'><li>Branding</li></Link>}
            {pageNum.num != 7 ? <Link href="/Refer"><li>Refer a friend</li></Link> : <Link href="/Refer" id='active'><li>Refer a friend</li></Link>}
            {pageNum.num != 8 ? <Link href="/Sharing"><li>Sharing</li></Link> : <Link href="/Sharing" id='active'><li>Sharing</li></Link>}
            </ul>
        </div>
    );
}