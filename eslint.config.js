import { isExclamationToken } from "typescript";

export default[
    {
        files:['*/*'],
        languajeOptions:{
            ecmaVersion:'latest',
            sourceType:'module'
        },
        rules:{
            semi:['error','always'],
            quote:['error','single']
        }
    }
]