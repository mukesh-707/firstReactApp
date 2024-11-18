
import React from "react";

class Navbar extends React.Component{

    render(){
        return(
            <>
            <div style={styles.nav}>
                <div style={styles.title}>7 Heaven Cinema</div>
                <div style={styles.cartContainer}>
                    <img alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" style={styles.cartIcon}></img>
                    <span style={styles.cartCount}>8</span>
                </div>
            </div>
            </>
        )
    }
}
export default Navbar

const styles = {
    nav:{
         width: "100%" ,
            height: 50,
            background:"#ff4000",
            display:"flex", 
            justifyContent:"space-between" 

    },

    title:{
        fontSize:40,
        color: "white",
        fontWeight: 700,
        fontFamily: "sans-serif",
        textTransform: "uppercase",
        marginLeft:20
    },

    cartContainer:{
        position:"relative",
        cursor:"pointer"

    },
    cartIcon:{
        height:48,
        marginRight:20

    },

    cartCount:{
        background: "lightgreen",
        borderRadius: "50%",
        padding: "4px 8px",
        position: "absolute",
        right: 6,
        top: -2,
        fontSize:12

    }


}