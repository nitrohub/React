class App extends React.Component{
    render(){
        const fnc = ()=>{
            return "Hi Funcy";
        }

        return (
            <div>
                <Hello from="Shankar" to="Shendge" align="center"/>
                <Hello 
                    from   ="Ramabai" 
                    to     ="Colony" 
                    align  ="right" 
                    bull   = {true}
                    bangs  = {4}
                    arr    = {[0,1,2,3,4]}
                    fnc    = {fnc} 
                 />
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));
