import React from 'react'

const KeyPieceCard = ({ ID, key_pieces, key_pieces_details }) => {
    return (
        <div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-teal-200 pointer-events-none"></div>
                </div>
                <div
                    class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 title-font font-medium text-sm">
                    {ID}</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div
                        class="flex-shrink-0 w-24 h-24 bg-teal-100 text-teal-500 rounded-full inline-flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 class="title-font mb-1 text-xl text-black font-bold font-serif">{key_pieces}</h2>
                        <p class="leading-relaxed text-xl text-black font-serif">{key_pieces_details}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyPieceCard;