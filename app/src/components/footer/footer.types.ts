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
    cities_per_column: number
}

export type FooterMenuProps = {
    menu_columns: FooterMenuColumnProps[]
}

export type FooterProps = {
    cities: string[]
    cities_per_column: number
    menu_columns: FooterMenuColumnProps[]
}