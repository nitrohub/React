class Slot extends React.Component{
    render(){
        const result = this.props.fruit1===this.props.fruit2 &&this.props.fruit1===this.props.fruit3;
        return (<div align="center" className="Machine">
            <h2 style={{color:"orange" ,fontSize:'30px'}}>Slot</h2>
            <h3 className={result?'win':'lose'}>
            {result?"You won":"You Loose"}
            </h3>
            <div>{this.props.fruit1} {this.props.fruit2} {this.props.fruit3}</div>
        </div>);
    }
}