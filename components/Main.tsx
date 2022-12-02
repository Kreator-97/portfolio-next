import {
  Contact,
  HardSkills,
  Learning,
  NextToLearn,
  Projects,
  SoftSkills
} from '../components'

export const Main = () => {
  return (
    <main>
      <div className='grid grid-cols-1 mb-8'>

        <div className='max-w-5xl mx-auto px-4'>
          <HardSkills />
          <SoftSkills />
        </div>

        <Projects/>
        
        <div className='max-w-5xl mx-auto px-4'>
          <Learning />
          <NextToLearn/>
          <Contact />
        </div>

      </div>
    </main>
  )
}
