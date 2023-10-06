import { useState } from 'react';
import Banner from '../components/home/Banner';



const Home = () => {
    const items = [
        {
            name: 'Cox’s Bazar',
            image:
                'https://i.ibb.co/5rXkYYX/592a3a648dcdeece5098149687022547-Expires-1697414400-Signature-O6x8a0-UZMP4q-i1-Pvp-Ikx-Bpr-O08-XOr-A.jpg',
            description:
                'Cox’s Bazar is a famous tourist destination known for having one of the longest natural sea beaches in the world.',
        },
        {
            name: 'Sreemangal',
            image:
                'https://i.ibb.co/6sRXPHm/a628b00e8738fed6eba3519683a59d48-Expires-1697414400-Signature-lsp1dy-VPlb-VTi-WIdo-YEzc4-Hxie-THd-Og.jpg',
            description:
                'Sreemangal is known as the "Tea Capital of Bangladesh" and is famous for its lush tea gardens.',
        },
        {
            name: 'Sundarbans',
            image:
                'https://i.ibb.co/vZMp1GQ/1c5db9d86fad42ea5e88d9d640f7678d-Expires-1697414400-Signature-ak-R-I2-Zn7kbzctk-a-Hcxpsy-Ggi-CJJ25oy.jpg',
            description:
                'The Sundarbans is the largest mangrove forest in the world and is home to the Bengal tiger.',
        },
        {
            name: 'St. Martin',
            image:
                'https://i.ibb.co/y83nrhb/f7ddb32e552f3698c2c18bc99924ea1f-Expires-1697414400-Signature-f-Joee-Oef-Rr-Bu-Hn10sd-Un-Y3-FF-j9nn.jpg',
            description:
                'St. Martin is a beautiful coral island known for its crystal-clear waters and vibrant marine life.',
        },
    ]
    const [activeData, setActiveData] = useState(items[0]);

    return (
        <div className=" overflow-hidden text-black " style={ {
            backgroundImage: `url(${ activeData.image })`,
            backgroundSize: 'cover  ',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
        } }>
            <div className="flex overflow-hidden backdrop-brightness-50">
                <div className="w-[40%]  flex items-center">
                    <div className="w-[450px] mx-auto overflow-hidden">
                        <h1 className="text-white text-5xl mb-2">{ activeData?.name }</h1>
                        <h1 className="text-white text-base font-normal">
                            { activeData?.description }
                        </h1>
                        <button className="bg-[#F9A51A] py-3 px-4 mt-6 rounded-lg  font-medium  text-black">Booking</button>
                    </div>
                </div>
                <div className="w-[60%]">
                    <Banner setActiveData={ setActiveData } />
                </div>
            </div>
        </div>
    );
};

export default Home;
