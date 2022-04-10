
import { datos } from '../../../helpers/data';
import css from './techlayouts.module.sass'

export type Number = {
    number: number
}

export const TechLayouts = ({number}:Number) => {
  const {name, description,images} = datos.technology[number]

  return (<>
    <img src={images.portrait} alt={name} className={css.planet}/>
    <div className={css.containerImagen}> 
      <img src={images.landscape} alt={name} className={css.planetMobile}/>
    </div>
    <article className={css.article}>
      <h6 className={css.subheading2}>The terminology...</h6>
      <h3 className={css.h3}>{name}</h3>
      <p className={css.text}>{description}</p>
    </article>  
  </>
  )
}
