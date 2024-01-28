import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='w-full'>
    <div className="rounded-b-[35px] bg-gradient-to-r from-silver to-metal rounded-t-full-2xl px-6 py-8  ring-slate-900/5 shadow-xl">
        <div className='container flex justify-between'>
        <Link  to="/"><img src="https://www.meram.bel.tr/assets/img/logo.svg" alt="Meram Belediyesi Logo" className="h-14 bg-light" /></Link>
            
    
            <div className='flex gap-4'>
                <Link className='w-32 h-8 text-white rounded flex items-center justify-center bg-metal' to="/images">Resimler</Link>
                <Link className='w-32 h-8 text-white rounded flex items-center justify-center bg-metal' to="/projects">Projeler</Link>
                <Link className='w-32 h-8 text-white rounded flex items-center justify-center bg-metal' to="/contact">İletişim</Link>
            </div>

        </div>
    </div>
</div>  )
}

export default Header