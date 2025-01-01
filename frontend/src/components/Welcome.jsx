import chinatown from '../assets/chinatown.webp';

export default function Welcome() { 
    return ( 
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen'>
            <div className='flex justify-center lg:justify-start'>
                <img src={chinatown} alt='Chinatown' className='max-w-xl lg:max-w-3xl w-full h-auto'/>
            </div>

            <div className='px-12 lg:px-20 text-center'	>
                <h1 className='text-5xl font-bold mb-8'>Your neighborhood Chinese restaurant</h1>
                <h1 className='text-3xl text-gray-700 leading-relaxed'>
                    Chinese food brings friends and family together, creating unforgettable moments around the table.
                </h1>
            </div>
        </div>
    );
}
