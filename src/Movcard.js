
import React from "react";

class MovieCard extends React.Component{

    render(){
        return(
       <div className="main">
        <div className="movie-card">
            <div className="left">
                <img alt="Poster" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLq1jG-xoe4TucZq58sisnl1KzUzZc_MchBeVlXlZ633F3H93t8Bu5Fr0Cfu3vWPInlW7c"></img>
            </div>
            <div className="right">
                <div className="title">Thor The Dark World</div>
                <div className="plo">Melekith Attack with Reality Stone</div>
                <div className="price">Rs. 199</div>
                <div className="footer">
                    <div className="rating">8.9</div>
                    <div className="star-dis">
                        <img className="str-btn" alt="decrease" 
                        src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"></img>
                        
                            <img alt="stars" 
                            src="https://cdn-icons-png.flaticon.com/128/477/477406.png" 
                            className="stars"></img>

                        <img className="str-btn" alt="increase" 
                        src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"></img>

                        <span>7</span>     
                    </div>
                    <button className="favourite-btn">Favurite</button>
                    <div className="cart-btn">Add To Cart</div>

                </div>
            </div>

        </div>
       </div>)
    }
}

export default MovieCard;