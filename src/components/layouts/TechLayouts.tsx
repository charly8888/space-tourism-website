
import { datos } from '../../../helpers/data';
import css from './techlayouts.module.sass'

const images = {
  0 : "../../../assets/technology/image-launch-vehicle-portrait.jpg",
  1: "../../../assets/technology/image-spaceport-portrait.jpg",
  2: "../../../assets/technology/image-space-capsule-portrait.jpg",
}


export const TechLayouts = ({number}) => {
  const {name, description,} = datos.technology[number]

  return (<>
    <img src={images[number]} alt={name} className={css.planet}/>
    <article className={css.article}>
      <h6 className={css.subheading2}>The terminology...</h6>
      <h3>{name}</h3>
      <p className={css.text}>{description}</p>
    </article>  
  </>
  )
}
