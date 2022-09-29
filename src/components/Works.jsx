import Card from './ui/Card'
import Flytoget from '../assets/flytoget.png'
import Leo from '../assets/leo.png'
import Space from '../assets/space-exploration-game.png'
import Mario from '../assets/mario.jpeg'
import Optimera from '../assets/optimera.png'
import Toolit from '../assets/toolit.png'
import ArrowDownButton from './ui/ArrowDownButton'
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Works = () => {
  return (
    <section name="works" className="max-w-3xl container mx-auto px-6">
      <h2 className="font-semibold text-xl dark:text-white mb-4 border-b-2 dark:border-darkGray-500">Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Card
          image={Flytoget}
          alt="Flytoget"
          year="2021 - 2022"
          websiteLink="https://minside.flytoget.no/en/login"
          header="Flytoget"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium doloremque laborum."
          tools={['React', 'Redux', 'Formik', 'React Query']}
        />
        <Card
          image={Optimera}
          alt="Optimera"
          year="2019 - 2021"
          websiteLink="https://www.optimera.no/?gclid=CjwKCAjwvsqZBhAlEiwAqAHElbwV58kAcFavwPe9-0ueXUq-iqITT7x0hnZO_gt5Sj6ImazODHgD5hoCU6oQAvD_BwE"
          header="Optimera"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium doloremque laborum."
          tools={['.NET Core', 'Azure', 'Azure Functions', 'Azure ServiceBus']}
        />
        <Card
          image={Leo}
          alt="Politivakta"
          year="2019"
          githubLink="https://github.com/SanderNicolaysen/leo"
          header="Politivakta"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium doloremque laborum."
          tools={['Vue', 'Node', 'Express', 'MongoDB']}
        />
        <Card
          image={Toolit}
          alt="Toolit"
          year="2018"
          githubLink="https://github.com/SanderNicolaysen/toolit"
          header="Toolit"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium doloremque laborum."
          tools={['Vue', 'ASP.NET MVC']}
        />
        <Card
          image={Space}
          alt="Space Exploration Game"
          year="2017"
          githubLink="https://github.com/SanderNicolaysen/binkbik"
          header="Space Exploration Game"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium doloremque laborum."
          tools={['C++', 'SFML']}
        />
        <Card
          image={Mario}
          alt="Super Mario"
          year="2017"
          githubLink="https://github.com/SanderNicolaysen/SAM"
          header="Super Mario"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium doloremque laborum."
          tools={['Java', 'Swing']}
        />
      </div>
    </section>
  )
}

export default Works
