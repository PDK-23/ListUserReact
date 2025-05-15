import React from 'react';

export default function UserCard({ picture, name, gender, email, country, phoneNumber }) {
    return (
        <div className="bg-white shadow-md rounded-lg my-6 border border-gray-200 relative flex flex-col">
            <div className="flex justify-center -mt-12">
                <img
                    src={picture}
                    alt={name}
                    className="rounded-full w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 border-1 border-white shadow-md"
                />
            </div>
            <div className="bg-white rounded-b-lg px-3 sm:px-3 md:px-6 pt-1 pb-4 sm:pb-4 md:pb-6 overflow-hidden">
                <div className="text-sm font-bold mt-2">Name: </div>
                <div className="font-normal text-sm md:text-base truncate">{name}</div>
                <div className="text-sm font-bold mt-2">Gender: </div>
                <div className="font-normal text-sm md:text-base">{gender}</div>
                <div className="text-sm font-bold mt-2">Email: </div>
                <div className="font-normal text-sm md:text-base truncate">{email}</div>
                <div className="text-sm font-bold mt-2">Country: </div>
                <div className="font-normal text-sm md:text-base">{country}</div>
                <div className="text-sm font-bold mt-2">Phone number: </div>
                <div className="font-normal text-sm md:text-base truncate">{phoneNumber}</div>
            </div>
        </div>
    );
}