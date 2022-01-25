class App extends React.Component{
    render(){
        return (<div>
            <Friend 
            from="Ravi"
            hobbies={["Cricket","Dancing","Reading"]}
            />
            <Friend 
            name="Shashi"
            hobbies={["Guitar","Games","Running"]}
            />
        </div>);
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))