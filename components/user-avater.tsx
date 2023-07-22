import { useUser } from '@clerk/nextjs'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const UserAvater = () => {
    const { user } = useUser()
  return (
    <Avatar className='w-8 h-8'>
        <AvatarImage src={user?.profileImageUrl} />
        <AvatarFallback>
            {user?.firstName?.charAt(0)}
            {user?.lastName?.charAt(0)}
        </AvatarFallback>
    </Avatar>
  )
}
