import { createContext, useState, type ReactNode } from "react";

// using Union Type to restrict filter values to only these stringd.
export type Filter = "all" | "active" | "completed"

interface FilterContextType {
    filter : Filter
    setFilter: (filter: Filter) => void
}

const FIlterContext = createContext<FilterContextType>({
    filter : "all",
    setFilter: () => {}
})

export function FilterProvider({children}: {children: ReactNode}){

    // Store current Filter

    const [filter, setFilter] = useState<Filter>("all")

    return (
        <FIlterContext.Provider value = {{filter, setFilter}}>
            {children}
        </FIlterContext.Provider>
    )
}
