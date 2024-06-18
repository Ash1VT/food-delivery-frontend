import { SvgIconComponent } from "@mui/icons-material";

export type FooterCitiesColumnProps = {
    cities: string[]
}

export type FooterMenuColumnProps = {
    title: string
    items: string[]
}

export type FooterFollowProps = {
    title: string
    icons: SvgIconComponent[]
}

export type FooterSubscriptionProps = {
    title: string
}

export type FooterRightsProps = {
    text: string
    company: string
    year: string
}

export type FooterCitiesProps = {
    title: string
    cities: string[]
    citiesPerColumn: number
}

export type FooterMenuProps = {
    menuColumns: FooterMenuColumnProps[]
}

// export type FooterProps = {
//     cities: string[]
//     citiesPerColumn: number
//     menuColumns: FooterMenuColumnProps[]
// }