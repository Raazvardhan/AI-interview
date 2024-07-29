"use client"

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

function Header() {
    const path = usePathname();
    const { setTheme, theme } = useTheme()

    useEffect(() => {
        console.log(path)
    }, [])

    return (
        <div className='sticky top-0 z-50 bg-background/80 backdrop-filter backdrop-blur-lg'>
            <div className='flex p-4 items-center justify-between'>
                <Image src={'/logo.svg'} width={60} height={70} alt='logo' />
                <ul className='hidden md:flex gap-6'>
                    <Link href={"/dashboard"}>
                        <li className={`hover:text-primary hover:font-bold transition-all
                        cursor-pointer
                        ${path == '/dashboard' && 'text-primary font-bold'}
                        `}
                        >Dashboard</li>
                    </Link>
                    <li className={`hover:text-primary hover:font-bold transition-all
                    cursor-pointer
                    ${path == '/dashboard/questions' && 'text-primary font-bold'}
                    `}>Questions</li>
                    <Link href={"/dashboard/upgrade"}>
                        <li className={`hover:text-primary hover:font-bold transition-all
                        cursor-pointer
                        ${path == '/dashboard/upgrade' && 'text-primary font-bold'}
                        `}>Upgrade</li>
                    </Link>
                    <li className={`hover:text-primary hover:font-bold transition-all
                    cursor-pointer
                    ${path == '/dashboard/how' && 'text-primary font-bold'}
                    `}>How it Works?</li>
                </ul>
                <div className="flex items-center gap-4">
                    {/* <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button> */}
                    <UserButton />
                </div>
            </div>
        </div>
    )
}

export default Header