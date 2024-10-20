
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
         <>
            <Link href={"/"}>
                <Image
                    src="/logos/bird-logo.png"
                    alt="logo"
                    width={500}
                    height={500}
                    className="
                    w-24 bg-cover bg-center
                  "
                    />
            </Link>
    </> 
    );
}
 
export default Logo;