"use client"

import React from 'react'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { useProModal } from '@/hooks/use-pro-modal'

export const ProModal  = () => {
    
    const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
                    Upgrade to Genius
                </DialogTitle>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}
