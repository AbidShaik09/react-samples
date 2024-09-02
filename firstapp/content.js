const style = {
    'backgroundColor':'blue',
    'height':'14vh',
    'color':'white',
    'display':'flex',
    'justifyContent':'space-around'
}
const Header = (props)=>{
return(
    <header style={style}>
     <h4>   {props.mesg} </h4>{props.menu1}
    </header>
)
}
const HeroUnit = ()=>{
   let clickhandler=()=>{alert('clicked')}
    return (
        <section style={{'backgroundColor':'cyan','width':'50vw','height':'34vh'}}>
            <button onClick={clickhandler}>Click me</button>
        </section>
    )
}
const Empty =(props)=>{
    return(
        <>
            {props.children}
        </>
    )
}
ReactDOM.render(   
    <Empty>     
        <Header mesg="Actalent" menu1="Register"/>       
        <HeroUnit/>
    </Empty>
,document.getElementById("placeholder"))