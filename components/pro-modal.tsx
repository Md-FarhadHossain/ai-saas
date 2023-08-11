"use client"

import React from 'react'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { useProModal } from '@/hooks/use-pro-modal'
import { Badge } from './ui/badge'

export const ProModal  = () => {
    
    const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
                    <div className='flex items-center gap-x-2 font-bold py-1'>
                        Upgrade to Genius
                        <Badge className='uppercase py-1 text-sm'>
                            Pro
                        </Badge>
                    </div>
                </DialogTitle>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}
