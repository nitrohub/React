class Hello extends React.Component{
    render(){
        console.log(this.props.to);
        console.log(this.props.from);
        console.log(this.props.arr);
        const props = this.props;
        const bangs = this.props.bangs;
        const msg   = "!".repeat(bangs);
        return (
            <div>
                <h1 align={this.props.align}>Hello there! from={props.from} to={props.to} </h1>        
                <h3>{props.bull==true?"There"+msg :""} </h3>
                <h3>{this.props.fnc}</h3>
            </div>
        );
    }
}