import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
          <Link href={`/`} className="text-primary flex items-center">
            <FaArrowRight className="h-10 w-10" />
            {''} <h1 className="text-4xl font-bold">Hovincity</h1>
          </Link>
          <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-primary">
            Reserved to do better.
            <Link href={`www.primereserved.live`} 
              className="text-primary font-bold ml-2">
              <h1 className="font-bold text-primary">PrimeReserved</h1>
            </Link>
          </div>
        </div>
    {props.renderDefault(props)}
    </div>
  )
}
 
export default StudioNavbar; 
