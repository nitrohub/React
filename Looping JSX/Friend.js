class Friend extends React.Component{
    static defaultProps={
        from : 'Anonymous',
        bangs : 1
    }
    render(){
        const name    = this.props.from;
        const hobbies = this.props.hobbies;
        const hobList =  hobbies.map(a=><li>{a}</li>)
        const bangs   = this.props.bangs;
        const msg     =  "!".repeat(bangs);
        return(
            <div>
                <h2>Name   :{name}</h2>
                <ul>
                    {hobList}
                </ul>
            </div>
        );
    }
}