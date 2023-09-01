import { useEffect, useState } from "react"
import Maintenance from "../components/templates/Maintenance"

const Transactions = () => {
    const [main] = useState(!!1)

    const init = () => {

    }
    useEffect(() => {
        init()
    })
  return <>{main ? <Maintenance /> : "Transactions"}</>;
}

export default Transactions