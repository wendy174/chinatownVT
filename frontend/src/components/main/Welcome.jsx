import chinatown from '../../assets/chinatown.webp'; 

export default function Welcome() { 
    return ( 
        <div id="welcome" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center bg-white bg-opacity-95 shadow-xl rounded-xl w-full p-10 lg:p-16'>
                <div className='flex justify-center lg:justify-start'>
                    <img 
                        src={chinatown} 
                        alt='Chinatown' 
                        className='max-w-xl lg:max-w-3xl w-full h-auto rounded-lg'
                    />
                </div>

                <div className='px-8 lg:px-12 text-center'>
                    <h1 className='text-5xl font-bold text-gray-800 mb-6 leading-snug'>
                        Your local Chinese restaurant
                    </h1>
                    <h2 className='text-2xl text-gray-600 leading-relaxed'>
                        Chinese food brings friends and family together, creating unforgettable moments around the table.
                    </h2>
                </div>
            </div>
        </div>
    );
}
