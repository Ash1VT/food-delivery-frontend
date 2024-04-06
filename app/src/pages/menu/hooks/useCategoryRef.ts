import { useContext, useEffect, useRef } from "react";
import { MenuCategoriesRefsContextProps } from "../menu_page.types";

const useCategoryRef = (id: bigint, context: React.Context<MenuCategoriesRefsContextProps>) => {
    const { setCategories } = useContext(context)

    const categoryRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        setCategories((prevCategories) => [...prevCategories, { id, ref: categoryRef }])
    }, [])

    return categoryRef
}

export default useCategoryRef;