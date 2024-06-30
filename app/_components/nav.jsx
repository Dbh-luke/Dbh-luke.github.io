import '../_styles/nav.scss'
import Link from 'next/link';
import Image from 'next/image';

export default function Nav(){
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
                        src="/external.svg"
                        width={10}
                        height={10}
                        id='external'
                        />
                    </Link>
                </div>
                <ul>
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/files_all">All files</Link></li>
                    <li><Link href="/files_private">Private files</Link></li>
                    <li><Link href="/files_shared">Shared with me</Link></li>
                    <li><Link href="/files_deleted">Deleted files</Link></li>
                    <li><Link href="/design">Design</Link></li>
                    <li><Link href="/notifications">Notifications <p>8</p></Link></li>
                    <li><Link href="/settings">Settings</Link></li>
                </ul>
                <div id="fileExplorer">
                    <p>File Browser</p>
                    <Image 
                    src='/vertEllipsis.svg'
                    width={25}
                    height={25}
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