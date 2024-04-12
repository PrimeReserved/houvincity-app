import Link from "next/link"
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";
import Image from "next/image";

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
          <Link href={`/`} className="text-primary flex items-center">
            <Image className="mr-2" src={ArrowRightWhite} alt="Arrow Right" width={12} height={12} />
            Hovincity
          </Link>
          <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-primary">
            <Link href={`www.primereserved.live`} 
            className="text-primary font-bold ml-2">
              <h1 className="font-bold text-primary">PrimeReserved</h1>
            </Link>
          </div>
        </div>
    <>{props.renderDefault(props)}</>
    </div>
  )
}
 
export default StudioNavbar; 