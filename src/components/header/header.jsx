import './header.css'




function Header({links, bgcolor}) {


    return ( 
        <header>
            <nav>
                <ul>
                    Цвет фона: {bgcolor}
                    {
                        links.map((link)=>{
                            return <li>{link}</li>
                        })
                    }
                    
                </ul>
            </nav>
        </header>
     );
}

export default Header;