

export const FilterDiv = () => {
    return (
        <div className='w-56 mt-5'>
            <div className='flex items-center border-b pb-3'>
                <div className='text-xl font-semibold'>
                    Filters
                </div>
                <div className='flex items-center border px-3 ml-20'>
                    <div className=''>
                        <button className='text-sm font-normal text-gray-400'>Reset</button>
                    </div>
                    <div className='ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="size-4 text-gray-400  ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='flex items-center mt-4'>
                    <div className='text-sm font-normal text-gray-600'>
                        Catagory
                    </div>
                    <div className='ml-36'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="size-4 text-gray-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>

                <div className='flex items-center mt-5'>
                    <div className='text-sm font-normal text-gray-600 pr-6'>
                        Price
                    </div>
                    <div className='ml-36'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="size-4 text-gray-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>

                <div className='flex items-center mt-5'>
                    <div className='text-sm font-normal text-gray-600'>
                        Discount
                    </div>
                    <div className='ml-36'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="size-4 text-gray-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>

                <div className='flex items-center mt-5'>
                    <div className='text-sm font-normal text-gray-600 pr-5'>
                        Brand
                    </div>
                    <div className='ml-36'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="size-4 text-gray-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
