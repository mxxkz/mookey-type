import { motion } from 'framer-motion'
import { State } from '../hooks/useEngine'
import { formatPercentage } from '../utils/helpers'

const Results = (
    {
        state,
        errors,
        accuracyPercentage,
        total,
        wpm,
        className = '',

    } : {
        state: State
        errors: number
        accuracyPercentage: number
        total: number
        wpm: number
        className?: string
    }) => {
    if (state !== "finish") {
        return null
    }
    const initial = { opacity: 0 }
    const animate = { opacity: 1 }

    return (
        <div className='border-2 p-4 w-1/2 rounded-lg'>
            <div className='font-mono text-xl font-black text-primary-500'>
                Results
            </div>
        <motion.ul
            initial={initial}
            animate={animate}
            className={`flex flex-col mt-2 space-y-3 ${className}`}
        >
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ duration: 0.3, delay: 0.5 }}
            >
                Accuracy: &nbsp; <span className= 'font-mono font-black text-3xl text-primary-400'>
                 {formatPercentage(accuracyPercentage)}
                </span>
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ duration: 0.3, delay: 1 }}
            >
                Missed: &nbsp; <span className= 'font-mono font-black text-3xl text-red-500'>
                {errors}
                </span>
                &nbsp;
                character
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ duration: 0.3, delay: 1.4 }}
            >
                Typed: &nbsp; <span className= 'font-mono font-black text-3xl text-primary-400'>
                {total}
                </span>
                &nbsp;
                character
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ duration: 0.3, delay: 2}}
            >
                WPM: &nbsp; <span className= 'font-mono font-black text-3xl text-primary-400'>
                {wpm}
                </span>
            </motion.li>
        </motion.ul>
        </div>
    )
}

export default Results
