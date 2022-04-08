
import { datos } from '../../../helpers/data';
import css from './techlayouts.module.sass'

export const TechLayouts = ({number}) => {
  const {name, description,images} = datos.technology[number]

  return (<>
    <img src={images.portrait} alt={name} className={css.planet}/>
    <article className={css.article}>
      <h6 className={css.subheading2}>The terminology...</h6>
      <h3>{name}</h3>
      <p className={css.text}>{description}</p>
    </article>  
  </>
  )
}
