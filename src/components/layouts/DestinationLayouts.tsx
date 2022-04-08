import { datos } from '../../../helpers/data';
import css from './destinationlayouts.module.css'

export const DestinationLayouts = ({number}) => {
  const {name, description, distance,travel, images} = datos.destinations[number]

  return (<>
  <img src={images.webp} alt={name} className={css.planet}/>
    <article className={css.art}>
      <h2>{name}</h2>
      <p className={css.text}>{description}</p>
      <section className={css.section}>
        <article>
          <h6 className={css.subheading2}>AVG. DISTANCE</h6>
          <h6 className={css.subheading1}>{distance}</h6>
        </article> 
        <article>
          <h6 className={css.subheading2}>EST. TRAVEL TIME</h6>
          <h6 className={css.subheading1}>{travel}</h6>
        </article>
      </section>
    </article>
  </>
  )
}
