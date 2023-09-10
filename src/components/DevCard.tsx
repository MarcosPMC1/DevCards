'use client'

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { MdVerified } from 'react-icons/md'

export function DevCard(){
    return (
        <Card>
            <CardHeader className='bg-gray-700 text-white flex items-center justify-center'>
            <div className="relative">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
                <div className="absolute top-0 right-0">
                    <MdVerified  />
                </div>
            </div>
            <CardTitle>Marcos</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row">
                    <AiOutlineLinkedin />
                    <AiOutlineGithub />
                    <CgWebsite />
                </div>
                <div className="flex">

                </div>
            </CardContent>
        </Card>
    )
}