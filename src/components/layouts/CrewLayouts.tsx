import css from './crewlayouts.module.sass'
import { datos } from '../../../helpers/data';
import { Number } from './TechLayouts';

export const CrewLayouts = ({number}:Number) => {
  const {name, images, role,bio} = datos.crew[number]

  return (<>
    <img src={images.webp} alt={name} className={css.person}/>
    <article className={css.art}>
      <h4 className={css.h4}>{role}</h4>
      <h3 className={css.h3}>{name}</h3>
      <p className={css.text}>{bio}</p>
    </article>
  </>
  )
}
