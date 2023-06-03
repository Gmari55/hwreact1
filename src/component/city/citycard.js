import './style.css'
export function CityCard(props)
{
    return(
        <div className="citycard">
        <p>Name: {props.name}</p>
    </div>
    )
}