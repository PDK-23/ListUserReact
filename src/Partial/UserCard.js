import React from 'react';

export default function UserCard({ picture, name, gender, email, country, phoneNumber }) {
    return (
        <div className="bg-white shadow-md rounded-lg my-6 border border-gray-200 relative">
            <div className="flex justify-center -mt-12">
                <img
                    src={picture}
                    alt={name}
                    className="rounded-full w-24 h-24 border-1 border-white shadow-md"
                />
            </div>
            <div className="bg-white rounded-b-lg px-6 pt-1 pb-6">
                <div className="text-sm font-bold mt-2">Name: </div>
                <div className="font-normal">{name}</div>
                <div className="text-sm font-bold mt-2">Gender: </div>
                <div className="font-normal">{gender}</div>
                <div className="text-sm font-bold mt-2">Email: </div>
                <div className="font-normal">{email}</div>
                <div className="text-sm font-bold mt-2">Country: </div>
                <div className="font-normal">{country}</div>
                <div className="text-sm font-bold mt-2">Phone number: </div>
                <div className="font-normal">{phoneNumber}</div>
            </div>
        </div>
    );
}