'use client'

import { createApiKey } from '@/helpers/create-api-key'
import { FC, FormEvent, useState } from 'react'
import { toast } from '@/ui/Toast'
import { Key } from 'lucide-react'
import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import CopyButton from '@/components/CopyButton'
import { Input } from '@/ui/Input'


const RequestApiKey: FC = () => {
    const [isCreating, setIsCreating] = useState<boolean>(false)
    const [apiKey, setApiKey] = useState<string | null>(null)

    const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsCreating(true)

        try {
            const generatedApiKey = await createApiKey()
            setApiKey(generatedApiKey)
        } catch (err) {
            if (err instanceof Error) {
                toast({
                    title: 'Error',
                    message: err.message,
                    type: 'error',
                })
                return 
            }

            toast({
                title: 'Error',
                message: 'Something went wrong',
                type: 'error',
            })
        } finally {
            setIsCreating(false)
        }
    }

    return <div  className='container md:max-w-2xl'>
        <div className='flex flex-col gap-6 items-center'>
            <Key className='mx-auto h-12 w-12 text-gray-400' />
            <LargeHeading >Request your API Key</LargeHeading>
            <Paragraph>You haven&apos;t requested an API key yet.</Paragraph>
        </div>
        <form
            onSubmit={createNewApiKey}
            className='mt-6 sm:flex sm:items-center'
            action='#'>
                <div className='relative rounded-md shadow-dm sm:min-w-0 sm:flex-1'>
                    {apiKey ? (
                        <CopyButton className='absolute inset-y-0 right-0 animate-in fade-in duration-300' valueToCopy={apiKey}/>
                        <Input />
                    ) : null}
                </div>
        </form>
    </div>
}

export default RequestApiKey