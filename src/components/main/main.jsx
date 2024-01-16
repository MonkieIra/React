import './main.css'
import  './kitty.jpg'

function Main({img, text, button}) {


    return ( 
        <main>
            <h2>{text}</h2>
            <img src={img} alt="no" />
            <br></br>
            <button class="btn">{button}</button>
        </main>
     );
}

export default Main;