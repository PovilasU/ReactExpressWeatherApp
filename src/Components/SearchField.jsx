import { myStore } from "../App"
import { useContext } from "react"
export default () => {

    let [store, updateStore] = useContext(myStore)
    function updateDate(time) {

        let updated = { ...store }
        updated.date = time;
        updateStore(updated)
    }

    return (
        <>
            <p>date: {store.date}</p>
            <button onClick={() => { updateDate('1999') }}>date </button>
        </>
    )


}