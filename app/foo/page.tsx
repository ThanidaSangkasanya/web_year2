import Link from 'next/link'
import Image  from 'next/image'

export default function Foo() {
    return (
        <div>
        <div className='flex justify-center border-black border-2 text-4xl mb-4 p-4'>
            Foo</div>
            <Link href="/">Back Home</Link>
            <Image
            src="https://www.bnn.in.th/_nuxt/img/site-logo.9ca15bd.svg"
            width={200}
            height={200}
            alt="Picture of the computer"

            />
        </div>
    )
}