import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './hero'
import { aboutType } from './about'
import { servicesType } from './services'
import { projectsType } from './projects'
import { testimonialsType } from './testimonials'
import { contactType } from './contact'
import { landingPageType } from './landingPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, aboutType, servicesType, projectsType, testimonialsType, contactType, landingPageType],
}
