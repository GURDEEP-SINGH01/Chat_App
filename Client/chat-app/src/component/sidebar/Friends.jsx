import { Friend } from './Friend'

export const Friends = () => {
    return (
        <div className='flex flex-col overflow-auto'>
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
        </div>
    )
}
