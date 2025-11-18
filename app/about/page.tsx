import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '700'],

 
})

export default function About () {
  
    return (
        <section className="about flex gap-10 flex-col">
            <h2 className="font-bold text-xl text-center">About Us</h2>
            <div>
                <p className={`${poppins.className} tracking-wider leading-relaxed`}>
                Welcome to a space where sport meets soul, where every step, jump, and celebration is powered by the iconic swoosh.
We’re not just another Nike store. We’re a curated love letter to the culture that Nike has built over decades — from the thunderous roar of the basketball court to the quiet confidence of a fresh pair of slides after the game. This is where the N7 heritage collection lives alongside rare Jordan drops, where $25 socks sit proudly next to limited-run pieces that feel like wearable art.
Our catalog tells stories:
The young hooper spinning the ball on one finger, dreaming of the league.
The runner chasing sunrise on the track at 5 a.m.
The friends laughing in custom hoodies that cost more than rent — because some moments are priceless.
The everyday athlete who just wants to feel good, look good, and move freely.
We believe greatness isn’t only found in stadiums. It’s in the small wins — lacing up when you don’t feel like it, choosing comfort that still turns heads, celebrating the holidays in a kit that makes you feel unstoppable.
Whether you’re here for the $29 hidden gem or the $1000 statement piece that stops conversations, you’ll find it wrapped in the same passion: authentic Nike energy, hand-picked and presented with care.
This isn’t just a shop.
It’s a vibe.
It’s a community.
It’s where you come to remind yourself — and the world — that when you look good, you play good, you feel good, you live good.
Just do it.
Your way.
Welcome home.
                </p>
                
            </div>
            <div className='flex gap-3'>
                <p className="text-sm font-semibold">JUST DO IT </p>
                <Image 
                src={"/NikeLogo.png"}
                width={20}
                height={20}
                alt='logo'
                />
            </div>

            
        </section>
    )
}