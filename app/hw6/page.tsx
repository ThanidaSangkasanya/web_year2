import Link from 'next/link'
import Image from 'next/image'

export default function Homework() {
    return (
        <div className='min-h-screen bg-[#F2ECE3] font-roboto'>
            <header className="flex items-center py-1">
            <div className="w-6 h-6">
            <img 
            src="https://cdn-icons-png.flaticon.com/128/2948/2948025.png" 
            alt="house" 
            className="w-full h-full"/>
        </div>


        <div className="ml-2 font-bold">CoC</div>
        <div className="hidden lg:flex gap-4 ml-auto font-bold">
            <span>HOME</span>
            <span>ABOUT</span>
            <span>CONTACT</span>
        </div>
        <div className="lg:hidden absolute right-0 top-0 p-0.5 cursor-pointer"   >
            <div className="w-9 h-1 bg-gray-800 my-1"></div>
            <div className="w-9 h-1 bg-gray-800 my-1"></div>
            <div className="w-9 h-1 bg-gray-800 my-1"></div>
        </div>
    </header>
        <hr className="bg-[#957979] h-0.5 border-0" />
           <div className='relative w-[99vw] h-[350px] bg-cover bg-center rounded-lg px-7 flex flex-col justify-center m-2'>
            
            <Image             
                src="https://plus.unsplash.com/premium_photo-1664300969611-f3745a737234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D"
                alt="Picture of the computer"
                layout="fill" 
                objectFit="cover"                
                 /></div>
                 
            <div className='absolute top-5 left-0 p-7 m-11'>
           <h2 className="text-xl font-bold text-black/90 lg:drop-shadow-[2px_2px_5px_rgb(243,191,94)]">Lorem ipsum dolor</h2>
        <h1 className="text-3xl font-bold text-black/90 lg:drop-shadow-[2px_2px_5px_rgb(243,191,94)]">WE ARE THE BEST</h1>
        <div className="text-black/90">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div className="text-black/90">Obcaecati assumenda cupiditate vitae, asperiores sit</div>
        <div className="text-black/90">Consequuntur nostrum nisi, velit necessitatibus!</div>
        <div className="mt-5 bg-black/80 text-white font-bold py-2 px-4 rounded-full w-max">Join us now</div>

           </div>

<hr className="bg-[#957979] h-0.5 border-0 my-5" />

<div className="flex justify-around font-bold">
        <span>SERVICE1</span>
        <span>SERVICE2</span>
        <span className="hidden md:inline">SERVICE3</span>
    </div>

    <hr className="bg-[#957979] h-0.5 border-0 my-5" />

    <div className="grid grid-cols-2 lg:flex lg:justify-between gap-3">
        
            <img src="https://plus.unsplash.com/premium_photo-1683140554145-c7fb8c93cb36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D" 
            alt="pic1" 
            className='w-full h-[25vh] bg-cover bg-center rounded-lg'/>
            <img src="https://plus.unsplash.com/premium_photo-1661779750334-87670a9dd099?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D" 
            alt="pic2" 
            className='w-full h-[25vh] bg-cover bg-center rounded-lg'/>
            <img src="https://plus.unsplash.com/premium_photo-1706410455451-27bf63e2b08e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxsaXZpbmclMjByb29tfGVufDB8fDB8fHww" 
            alt="pic3" 
            className='w-full h-[25vh] bg-cover bg-center rounded-lg'/>
            <img src="https://plus.unsplash.com/premium_photo-1664300969611-f3745a737234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D" 
            alt="pic4" 
            className='w-full h-[25vh] bg-cover bg-center rounded-lg'/>
        
    

        </div>
        <footer className="flex flex-col lg:items-center lg:justify-center items-start justify-start">
            <div className="font-bold">Lorem ipsum dolor sit amet</div>
            <div >Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quisquam, saepe natus porro</div>
            <div className="font-bold">Copyright © All Right Reserved</div>

        </footer>
        </div>
    )
}
