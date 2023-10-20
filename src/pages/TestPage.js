import React from 'react'
import client from '../sanityClient.js';
import { useState, useEffect } from 'react';
export default function TestPage() {

    const [pets, setPets] = useState([]); // [
    useEffect(() => {
        client.fetch(`*[_type == "pet"]{
            name,
            coverImage{
                asset->{
                    _id,
                    url
                }
            }        
        }`)
            .then((data) => setPets(data))
            .catch(console.error);
    }
        , []);

    return (
        <div>TestPage
            {pets.map((pet) => (
                <div>
                    <h1>{pet.name}</h1>
                    <img src={pet.coverImage.asset.url} alt={pet.name} />
                </div>
            ))}
        </div>
    )
}
