import { Cities } from './cities'
import { CityCard } from './citycard'


export function Citylist()
{
    return(
<div className='cardlist'>
   <div>
    
    {Cities.map(C=><CityCard key={C.id} {...C}/>)}
   </div>
    </div>
    )
}