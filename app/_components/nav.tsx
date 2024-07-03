import '../_styles/nav.scss'
import Link from 'next/link';
import Image from 'next/image';
import { GoLinkExternal } from "react-icons/go";
import { RiHome3Line } from "react-icons/ri";
import { IoFolderOutline } from "react-icons/io5";
import { RiFolderUserLine } from "react-icons/ri";
import { BsPersonAdd } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import { IoInvertModeSharp } from "react-icons/io5";
import { CgNotifications } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";

interface page{
    num: number
}

export default function Nav(pageNum:page){
    return(
        <>
            <nav>
                <div id="logo">
                    <Image 
                    src="/logo.png"
                    height={25}
                    width={25}
                    alt='Logo'
                    />
                    <p>Untitled UI</p>
                    <Link href="/">
                        <p>v4.0</p>
                        <GoLinkExternal id='external'/>
                    </Link>
                </div>
                <ul>
                    {pageNum.num != 1 ? <Link href="/home"><li><RiHome3Line /> Home</li></Link> : <Link href="/home"><li id='active'><RiHome3Line /> Home</li></Link>}
                    {pageNum.num != 2 ? <Link href="/allfiles"><li><IoFolderOutline /> All files</li></Link> : <Link href="/allfiles"><li id='active'><IoFolderOutline /> All files</li></Link>}
                    {pageNum.num != 3 ? <Link href="/privatefiles"><li><RiFolderUserLine /> Private files</li></Link> : <Link href="/privatefiles"><li id='active'><RiFolderUserLine /> Private files</li></Link>}
                    {pageNum.num != 4 ? <Link href="/sharedfiles"><li><BsPersonAdd /> Shared with me</li></Link> : <Link href="/sharedfiles"><li id='active'><BsPersonAdd /> Shared with me</li></Link>}
                    {pageNum.num != 5 ? <Link href="/deletedfiles"><li><IoTrashOutline /> Deleted files</li></Link> : <Link href="/deletedfiles"><li id='active'><IoTrashOutline /> Deleted files</li></Link>}
                    {pageNum.num != 6 ? <Link href="/design"><li><IoInvertModeSharp /> Design</li></Link> : <Link href="/design"><li id='active'><IoInvertModeSharp /> Design</li></Link>}
                    {pageNum.num != 7 ? <Link href="/notifications"><li><CgNotifications /> Notifications <p>8</p></li></Link> : <Link href="/notifications"><li id='active'><CgNotifications /> Notifications <p>8</p></li></Link>}
                    {pageNum.num != 8 ? <Link href="/General"><li><IoSettingsOutline /> Settings</li></Link> : <Link href="/settings"><li id='active'><IoSettingsOutline /> Settings</li></Link>}
                </ul>
                <div id="fileExplorer">
                    <p>File Browser</p>
                    <Image 
                    src='/vertEllipsis.svg'
                    width={25}
                    height={25}
                    alt='X'
                    />
                    <div id='explorer'>
                        <details>
                            <summary>Folder</summary>
                            <p>File.txt</p>
                        </details>
                    </div>
                </div>
                <div id="storage">
                    <p>Storage</p>
                    <Link href="/upgrade">Upgrade</Link>
                    <div id='outerProgress'>
                        <div id='innerProgress'></div>
                    </div>
                    <p>9.2 GB of 10 GB used</p>
                </div>
            </nav>
        </> 
    );
}