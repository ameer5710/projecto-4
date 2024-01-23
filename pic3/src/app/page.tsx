import Image from "next/image";

import mantech from "../../public/me3.jpg"
export default function Home() {
  return (
    <div>
  <Image className="w-50 h-50 md:w-15 rounded-full  " src="/me3.jpg" alt="" width="360" height="240"/>

    </div>

  );
}
