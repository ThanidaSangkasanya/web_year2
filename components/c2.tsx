'use client'
import { useParams } from "next/navigation"

export default function C2() {
    const params = useParams();
    return <>{params.id}</>
}