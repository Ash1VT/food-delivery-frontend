export type SearchComponentProps = {
    searchPlaceholder: string
    onSearch: (query: string) => Promise<void>
}