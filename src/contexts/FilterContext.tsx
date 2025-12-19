import { createContext, useState, type ReactNode } from "react";

// using Union Type to restrict filter values to only these stringd.
export type Filter = "all" | "active" | "completed"

interface FilterContextType {
    filter : Filter
    setFilter: (filter: Filter) => void
}


// eslint-disable-next-line react-refresh/only-export-components
export const FilterContext = createContext<FilterContextType>({
    filter : "all",
    setFilter: () => {}
})

export function FilterProvider({children}: {children: ReactNode}){

    // Store current Filter

    const [filter, setFilter] = useState<Filter>("all")

    return (
        <FilterContext.Provider value = {{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}
