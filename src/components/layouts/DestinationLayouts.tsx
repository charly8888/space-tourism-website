import { datos } from '../../../helpers/data';
import css from './destinationlayouts.module.css'

const images = {
  0 : "../../../assets/destination/image-moon.webp",
  1: "../../../assets/destination/image-mars.webp",
  2: "../../../assets/destination/image-europa.webp",
  3: "../../../assets/destination/image-titan.webp",
}


export const DestinationLayouts = ({number}) => {
  const {name, description, distance,travel} = datos.destinations[number]

  return (<>
  <img src={images[number]} alt={name} className={css.planet}/>
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
