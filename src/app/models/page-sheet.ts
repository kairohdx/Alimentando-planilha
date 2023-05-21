export interface PageSheet {
    pageName: string,
    firstLine: string[],
    values: (string|boolean)[]
}

export interface SheetResult{
    FileAndPageStatus:boolean
}