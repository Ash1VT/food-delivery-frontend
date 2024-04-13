import { MenuCategoryRef } from "../menu_page.types"

const scrollToCategory = (id: string, categories: MenuCategoryRef[]) => {
    const category = categories.find((category) => category.id === id)
    const categoryComponent = category?.ref.current;

    const scrollToComponent = (component: HTMLElement) => {
        window.scrollTo({
            top: component.offsetTop - 120,
            behavior: 'smooth'
        })
    }

    if (categoryComponent) 
        scrollToComponent(categoryComponent)
    
}

export default scrollToCategory;
