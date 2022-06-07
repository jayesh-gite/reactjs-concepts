import React from "react"
import Greet from "../typescriptwithprops/Greet"


export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>Im just taking type from greet</div>
    )
}