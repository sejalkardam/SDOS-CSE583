import React, { useEffect, useState } from 'react'
import client from '../sanityClient'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function CakeProductPage() {
    const { slug } = useParams();

    const temporaryReq = () => {
       

    }
    const [cakeDetails, setCakeDetails] = useState(null);
    useEffect(() => {
        const fetchCake = async () => {
            try {
                const query = `*[slugurl.current == $slug][0]{
          name,
          description,
          price,
          "imageUrl": cakeimage.asset->url
        }`;
                const params = { slug };
                const result = await client.fetch(query, params);
                console.log(result);
                setCakeDetails(result);
            } catch (error) {
                console.error('Error fetching cake details:', error.message);
            }
        };
        fetchCake();
    }, [slug]);

    if (!cakeDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>

            <div className="flex my-8 flex-row items-center justify-center space-x-12">
                <div>
                    <img className="rounded-3xs w-[28.5rem] h-[29.63rem]" src={cakeDetails.imageUrl} alt="" />
                </div>
                <div className="flex flex-col space-y-8">
                    <div className="text-[2.5rem] tracking-[1.31px] leading-[2.87rem] font-righteous text-left inline-block w-[24.94rem]">
                        {cakeDetails.name}
                    </div>
                    <div className="tracking-[0.94px] leading-[1.38rem] text-gray-700 text-left inline-block w-[34.19rem] h-[4rem]">
                     { cakeDetails.description}
                    </div>
                    <b className="text-[1.5rem] font-h2-petite text-left">
                        Rs. {cakeDetails.price }
                    </b>
                    <div className="font-medium font-h2-petite text-left inline-block w-[11.38rem]">
                        MESSAGE TO ORDER:
                    </div>
                    <div className="flex flex-row space-x-4">

                        <div onClick={temporaryReq} className="flex space-x-2 flex-row items-center justify-center rounded-3xs bg-lightgreen w-[10.13rem] h-[3.13rem]" >

                            <img
                                className="w-[1.75rem] h-[1.75rem] overflow-hidden"
                                alt=""
                                src="/akariconswhatsappfill2.svg"
                            />
                            <div className="text-[0.88rem] uppercase font-medium inline-block w-[6.13rem]">
                                Whatsapp
                            </div>
                        </div>

                        <div className="flex space-x-2 flex-row items-center justify-center rounded-3xs w-[10.13rem] h-[3.13rem] border-4" >

                            <img
                                className="w-[1.75rem] h-[1.75rem] overflow-hidden"
                                alt=""
                                src="/carbonemail.svg"
                            />
                            <div className="text-[0.88rem] uppercase font-medium inline-block w-[6.13rem]">
                                Email
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
