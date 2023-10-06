import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'


import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

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

const Banner = ({ setActiveData }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const prevRef = useRef(null)
    const swiperRef = useRef(null)

    const nextRef = useRef(null)
    const handleSlideChange = (swiper) => {
        setActiveData(items[swiper.activeIndex])
        setActiveIndex(swiper.activeIndex)

    }

    const handlePrevClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev()
        }
    }

    const handleNextClick = () => {
        swiperRef.current.swiper.slideNext()
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Swiper
                ref={ swiperRef }
                navigation={ {
                    prevEl: prevRef.current ? prevRef.current : undefined,
                    nextEl: nextRef.current ? nextRef.current : undefined,
                } }
                // onInit={ (swiper) => {
                //     swiper.params.navigation.prevEl = prevRef.current
                //     swiper.params.navigation.nextEl = nextRef.current
                //     swiper.navigation?.update()
                // } }
                spaceBetween={ 0 }
                slidesPerView={ 3 }
                onSlideChange={ handleSlideChange }
                autoplay
            >
                { items.map((item, index) => {
                    return (
                        <SwiperSlide key={ index }>
                            <Link to={ `/nadaews/${ index }` }>
                                <div
                                    className={ `rounded-2xl  overflow-hidden col-span-2  w-[250px] p-0 ${ activeIndex === index
                                        ? ' border-[#F9A51A] border-3'
                                        : 'border-none'
                                        }` }
                                >
                                    <img
                                        src={ item?.image }
                                        alt=''
                                        className={ `w-[250px] overflow-hidden h-[350px] object-cover` }
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                }) }
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                {/* <SwiperSlide className="hidden"></SwiperSlide> */ }

                <div className='mt-20 flex text-black gap-3'>
                    <div
                        ref={ prevRef }
                        onClick={ handlePrevClick }
                        className='cursor-pointer rounded-full bg-white p-1.5'
                    >
                        <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
                    </div>
                    <div
                        ref={ nextRef }
                        onClick={ handleNextClick }
                        className='cursor-pointer rounded-full bg-white p-1.5'
                    >
                        <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default Banner
