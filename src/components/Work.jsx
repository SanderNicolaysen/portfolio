import { motion } from 'framer-motion';
import Card from './ui/Card';
import Flytoget from '../assets/flytoget.png';
import Leo from '../assets/leo.jpeg';
import Space from '../assets/space-exploration-game.png';
import Mario from '../assets/mario.jpeg';
import Optimera from '../assets/optimera.png';
import Toolit from '../assets/toolit.png';

const workVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -25 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Works() {
  return (
    <section name="work" className="max-w-3xl container mx-auto px-6 mb-20">
      <h2 className="font-semibold text-xl dark:text-white mb-6 dark:border-darkGray-500 flex items-center line-after-text">
        Work
      </h2>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        variants={workVariant}
        initial="hidden"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        <Card
          image={Flytoget}
          alt="Flytoget"
          year="2021 - 2022"
          websiteLink="https://minside.flytoget.no/en/login"
          header="Flytoget"
          body={`Modernized the airport express train's website "My Page" for a better overview of receipts and bank cards.`}
          tools={['React', 'Redux Toolkit', 'Formik', 'React Query']}
          variants={itemVariant}
        />
        <Card
          image={Optimera}
          alt="Optimera"
          year="2019 - 2021"
          websiteLink="https://www.optimera.no/?gclid=CjwKCAjwvsqZBhAlEiwAqAHElbwV58kAcFavwPe9-0ueXUq-iqITT7x0hnZO_gt5Sj6ImazODHgD5hoCU6oQAvD_BwE"
          header="Optimera"
          body="Developed a service platform for making data available for eCommerce in addition to several integrations with external systems."
          tools={['.NET Core', 'Azure', 'Azure Functions', 'Azure ServiceBus']}
          variants={itemVariant}
        />
        <Card
          image={Leo}
          alt="Politivakta"
          year="2019"
          githubLink="https://github.com/SanderNicolaysen/leo"
          header="Politivakta"
          body="Developed a digital solution (POC) in collaboration with the police in Oslo to optimize their queuing system at the police station."
          tools={['Vue', 'Node', 'Express', 'MongoDB']}
          variants={itemVariant}
        />
        <Card
          image={Toolit}
          alt="Toolit"
          year="2018"
          githubLink="https://github.com/SanderNicolaysen/toolit"
          header="Toolit"
          body="Developed a solution that allows the company and its employees to keep track of common tools."
          tools={['Vue', 'ASP.NET MVC']}
          variants={itemVariant}
        />
        <Card
          image={Space}
          alt="Space Exploration Game"
          year="2017"
          githubLink="https://github.com/SanderNicolaysen/binkbik"
          header="Space Exploration Game"
          body='Developed an "open world" game. The game involves exploring a solar system, collecting resources and upgrading the spaceship.'
          tools={['C++', 'SFML']}
          variants={itemVariant}
        />
        <Card
          image={Mario}
          alt="Super Mario"
          year="2017"
          githubLink="https://github.com/SanderNicolaysen/SAM"
          header="Super Mario"
          body="Developed a Super Mario Bros Clone in Java."
          tools={['Java', 'Swing']}
          variants={itemVariant}
        />
      </motion.div>
    </section>
  );
}

export default Works;
