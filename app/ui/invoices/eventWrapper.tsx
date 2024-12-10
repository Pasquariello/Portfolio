'use client'

import { useState } from "react"
import { InfoModal } from "../modals"

export default function EventWrapper({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [foo, setFoo] = useState()
    return (
        <>
            <InfoModal title="hello body" body="hello body" display={true}/>
            {children}
        </>
    )
}
