import { useEffect, useState } from "react"
import Maintenance from "../components/templates/Maintenance"

const Ref = () => {
    const [main] = useState(!!1)

    const init = () => {

    }
    useEffect(() => {
        init()
    })
  return <>{main ? <Maintenance /> : "Ref"}</>;
}

export default Ref
