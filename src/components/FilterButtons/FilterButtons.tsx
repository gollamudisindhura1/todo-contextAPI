import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import "./FilterButtons.css";


export default function FilterButtons(){
    const {filter, setFilter} = useContext(FilterContext)

    return (

        <><div className="filters">
            {["all", "active", "completed"].map(f => (
                <button
                    key={f}
                    className={`btn btn-outline-secondary ${filter === f ? "active" : ""}`}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onClick={() => setFilter(f as any)}
                >
                    {f}
                </button>
            ))}
        </div></>

        )

}