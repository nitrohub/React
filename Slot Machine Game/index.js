function fruitRandomizer(){
    const arr = ["🍇","🍌","🍒"];
    return arr[Math.floor(Math.random()*arr.length)];
}

function funcy(){
    window.location.reload();
}

class App extends React.Component{
    render(){
        const buttonStyle={backgroundColor:"Green",color:"#fff"}
        return <div align="center">
            <Slot
             fruit1={fruitRandomizer()}
             fruit2={fruitRandomizer()}
             fruit3={fruitRandomizer()}
             />
            <Slot
             fruit1={fruitRandomizer()}
             fruit2={fruitRandomizer()}
             fruit3={fruitRandomizer()}
             />
             <Slot
             fruit1={fruitRandomizer()}
             fruit2={fruitRandomizer()}
             fruit3={fruitRandomizer()}
             />
             <br/>
             <button style={buttonStyle} onClick={funcy}>▶ Play</button>
        </div>
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))