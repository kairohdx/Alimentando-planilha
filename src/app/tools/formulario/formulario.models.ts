import { FormControl } from "@angular/forms"
import { InputSets } from "../input-form/input-form.models"

export interface FormJson{
    form_title: string,
    userId:string, 
    sheetsId:string,
    inputs: InputSets[],
    btn_submit:string,
    protect?: boolean
    password?:string
}