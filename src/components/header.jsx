
export function Header () {
    return(
        <header>
            <nav className="flex bg-slate-800 flex-row w-full color text-white p-2">
                <img src="./logo.png" alt="NYC" className=" w-20 h-20" />
                <ul className="flex text-stone-300 space-x-6 m-5 flex-grow w-full text-xl">
                    <li><a href="./contact.jsx" className=" rounded-full hover:scale-150 hover:bg-slate-900 transition-all duration-300">Artistas</a></li>
                    <li><a href="">Generos</a></li>
                    <li><a href="">Albumes</a></li>
                    <li><a href="">Canciones</a></li>
                    <li><a href="">Listas de reproduccion</a></li>
                    <li><a href="">Carpetas</a></li>
                </ul>
                <div className="ml-auto flex">
                <input type="text" placeholder="Buscar una cancion.." className="bg-slate-900 w-80 mr-6 outline-none rounded-full" name="search"/>
                <button className="bg-slate-900 rounded-full w-11 h-11 mt-4"><img src="search.svg" alt="buscar" className="w-8 h-8 ml-1"/></button>
                </div>
            </nav>
        </header>
    )
}

