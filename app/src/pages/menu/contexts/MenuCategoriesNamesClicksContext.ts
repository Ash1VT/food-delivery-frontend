import React from "react";
import { ClicksContextProps } from "src/hooks/useActiveClick";

const MenuCategoriesNamesClicksContext = React.createContext<ClicksContextProps>({
    clicks: [],
    setClicks: () => {},
    activeItemId: BigInt(0),
    setActiveItemId: () => {},
});

export default MenuCategoriesNamesClicksContext;