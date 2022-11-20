import React from 'react';

const Loading = () => {
    return (
        <div class="flex items-center justify-center ">
        <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin">
            <span class="visually-hidden">...</span>
        </div>
    </div>
    );
};

export default Loading;