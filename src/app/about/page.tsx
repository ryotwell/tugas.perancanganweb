'use client'

import Stacks, { icons } from '@/components/Stacks'
import WithAnimation from '@/components/WithAnimation'

const About = () => {
    const iconKeys = Object.keys(icons).join(', ')

    return (
        <WithAnimation>
            <div className="content mt-36">
                <div className="mb-6" data-aos="fade-up" data-aos-delay="300">
                    <h1 className="font-bold text-3xl">About</h1>
                    <h1 className="font-bold text-4xl">Zulzario Zaeri</h1>
                </div>
                <div
                    className="mb-10 lg:flex"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <div className="w-3/6 block lg:hidden mb-6">
                        <img
                            className="w-full shadow-md rounded-md overflow-hidden"
                            src="https://res.cloudinary.com/ryotwell/image/upload/q_auto,f_auto/ryotwell/about/mwczlpayiyl3yzedkbnq"
                        />
                    </div>
                    <div className="w-full space-y-6 pr-10">
                        <p className="max-w-2xl">
                            Saya seorang Junior Web Developer dengan pengalaman
                            dalam pengembangan aplikasi menggunakan berbagai
                            teknologi dan framework. Keahlian utama saya
                            meliputi PHP dengan framework Laravel, serta ReactJS
                            dan NextJS untuk pengembangan frontend. Saya juga
                            memiliki pengalaman dalam menggunakan Tailwind CSS
                            untuk desain dan Git untuk kontrol versi.
                        </p>
                        <p className="max-w-2xl">
                            Sejak awal minat saya dalam dunia pemrograman, saya
                            telah aktif belajar dan mengembangkan diri untuk
                            meningkatkan keterampilan teknis saya. Saya sangat
                            menikmati tantangan dalam menyelesaikan masalah
                            pemrograman dan mengeksplorasi cara-cara baru untuk
                            meningkatkan efisiensi dan kualitas kode.
                        </p>
                        <p className="max-w-2xl">
                            Saat ini, saya berkomitmen untuk terus mengembangkan
                            kemampuan saya dalam mengintegrasikan teknologi
                            terbaru dan praktik terbaik dalam pengembangan web.
                            Saya percaya bahwa dengan dedikasi yang kuat dan
                            semangat untuk belajar, saya dapat memberikan
                            kontribusi yang berarti dalam proyek-proyek yang
                            saya ikuti di masa depan.
                        </p>
                    </div>
                    <div className="w-2/6 hidden lg:block">
                        <img
                            className="w-full shadow-md rounded-md overflow-hidden"
                            src="https://res.cloudinary.com/ryotwell/image/upload/q_auto,f_auto/ryotwell/about/mwczlpayiyl3yzedkbnq"
                        />
                    </div>
                </div>
                <div className="mb-20" data-aos="fade-up" data-aos-delay="500">
                    <h1 className="font-bold text-3xl mb-4">Tech Stack</h1>
                    <div className="space-x-4">
                        <Stacks tech_stack={iconKeys} icon_size={30} />
                    </div>
                </div>
                <div className="mb-20" data-aos="fade-up" data-aos-delay="500">
                    <h1 className="font-bold text-4xl mb-4">Contact</h1>
                    <p className="max-w-2xl">
                        {`Do contact me if you need my opinion about web development, especially frontend works. I’ll be happy to help! (find my email in the footer)`}
                    </p>
                </div>
                <div className="mb-20">
                    <h1 className="font-bold text-4xl mb-4">Desktop</h1>
                    <div className="w-full">
                        <div>
                            <img
                                src="https://res.cloudinary.com/ryotwell/image/upload/q_auto,f_auto/ryotwell/about/lyrqby68ic8nabu1dppc"
                                alt="Desktop"
                                className="rounded-md"
                            />
                        </div>
                        <div className="p-8">
                            <ul className="list-disc">
                                <li className="list-disc-primary p-2">
                                    Dell 7390 with i5 gen 8 (8GB, 256GB)
                                </li>
                                <li className="list-disc-primary p-2">
                                    Arch Linux
                                </li>
                                <li className="list-disc-primary p-2">
                                    Desktop Environment Cinnamon
                                </li>
                                <li className="list-disc-primary p-2">
                                    Window Manager Mutter
                                </li>
                                <li className="list-disc-primary p-2">
                                    Visual Studio Code
                                </li>
                                <li className="list-disc-primary p-2">
                                    Nord Theme
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </WithAnimation>
    )
}

export default About
