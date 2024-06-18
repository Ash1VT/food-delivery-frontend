import { useContext, useEffect, useRef } from "react";
import { MenuCategoriesRefsContextProps } from "../menu_page.types";

const useCategoryRef = (id: string, context: React.Context<MenuCategoriesRefsContextProps>) => {
    const { setCategoriesRefs: setCategories } = useContext(context)

    const categoryRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        setCategories((prevCategories) => [...prevCategories, { id, ref: categoryRef }])
    }, [])

    return categoryRef
}

export default useCategoryRef;