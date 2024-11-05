import Link from "next/link";

interface HeadProps {
  font: {
    className:string;
  };
}

export default function Header({ font }: HeadProps ) {
    return (
      <>
        <div className= {`${font.className} parent-links`}>
            <ul className="Links">
                <li className="link"><Link href="">Works</Link></li>
                <li className="link"><Link href="">Blog</Link></li>
                <li className="link"><Link href="">Contact</Link></li>
            </ul>
        </div>
      </>
    );
  }