import { FC }  from 'react';
import { cva} from 'class-variance-authority';

interface ParagraphProps {}

const paragraphvariants = cva(
    'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-centre'
)

const Paragraph: FC<ParagraphProps> = ({}) => {
    return <div> Paragraph</div>
}

export default Paragraph;