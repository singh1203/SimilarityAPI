import { FC, forwardRef, HTMLAttributes }  from 'react';
import { VariantProps, cva} from 'class-variance-authority';


const paragraphvariants = cva(
    'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-centre',
    {
        variants: {
            size: {
                default: 'text-base sm:text-lg',
                sm: 'text-sm sm:text-base',
            }
        },
        defaultVariants: {
            size: 'default',
        },
    }
)

interface ParagraphProps 
extends HTMLAttributes<HTMLParagraphElement>, 
VariantProps<typeof paragraphvariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps> (
    ({ className, size, children, ...props }, ref) => {
        return <p ref={ref} {...props} className={}></p>
    }
)

export default Paragraph;