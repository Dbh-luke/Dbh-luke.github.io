import '../_styles/nav.scss'
import Link from 'next/link';
import Image from 'next/image';
  
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
                        <Image 
                        src="/external.png"
                        width={10}
                        height={10}
                        id='external'
                        alt='X'
                        />
                    </Link>
                </div>
                <ul>
                    {pageNum.num != 1 ? <Link href="/home"><li>Home</li></Link> : <Link href="/home"><li id='active'>Home</li></Link>}
                    {pageNum.num != 2 ? <Link href="/allfiles"><li>All files</li></Link> : <Link href="/allfiles"><li id='active'>All files</li></Link>}
                    {pageNum.num != 3 ? <Link href="/privatefiles"><li>Private files</li></Link> : <Link href="/privatefiles"><li id='active'>Private files</li></Link>}
                    {pageNum.num != 4 ? <Link href="/sharedfiles"><li>Shared with me</li></Link> : <Link href="/sharedfiles"><li id='active'>Shared with me</li></Link>}
                    {pageNum.num != 5 ? <Link href="/deletedfiles"><li>Deleted files</li></Link> : <Link href="/deletedfiles"><li id='active'>Deleted files</li></Link>}
                    {pageNum.num != 6 ? <Link href="/design"><li>Design</li></Link> : <Link href="/design"><li id='active'>Design</li></Link>}
                    {pageNum.num != 7 ? <Link href="/notifications"><li>Notifications <p>8</p></li></Link> : <Link href="/notifications"><li id='active'>Notifications <p>8</p></li></Link>}
                    {pageNum.num != 8 ? <Link href="/General"><li>Settings</li></Link> : <Link href="/settings"><li id='active'>Settings</li></Link>}
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