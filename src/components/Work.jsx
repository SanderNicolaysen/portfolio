import Card from './ui/Card';
import Flytoget from '../assets/flytoget.png';
import Leo from '../assets/leo.png';
import Space from '../assets/space-exploration-game.png';
import Mario from '../assets/mario.jpeg';
import Optimera from '../assets/optimera.png';
import Toolit from '../assets/toolit.png';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const workVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Works = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <section name="work" className="max-w-3xl container mx-auto px-6">
      <h2 className="font-semibold text-xl dark:text-white mb-6 dark:border-darkGray-500 flex items-center line-after-text">
        Work
      </h2>
      <motion.div
        ref={ref}
        variants={workVariant}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        <Card
          image={Flytoget}
          alt="Flytoget"
          year="2021 - 2022"
          websiteLink="https://minside.flytoget.no/en/login"
          header="Flytoget"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium doloremque laborum."
          tools={['React', 'Redux', 'Formik', 'React Query']}
          variants={itemVariant}
        />
        <Card
          image={Optimera}
          alt="Optimera"
          year="2019 - 2021"
          websiteLink="https://www.optimera.no/?gclid=CjwKCAjwvsqZBhAlEiwAqAHElbwV58kAcFavwPe9-0ueXUq-iqITT7x0hnZO_gt5Sj6ImazODHgD5hoCU6oQAvD_BwE"
          header="Optimera"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium doloremque laborum."
          tools={['.NET Core', 'Azure', 'Azure Functions', 'Azure ServiceBus']}
          variants={itemVariant}
        />
        <Card
          image={Leo}
          alt="Politivakta"
          year="2019"
          githubLink="https://github.com/SanderNicolaysen/leo"
          header="Politivakta"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium doloremque laborum."
          tools={['Vue', 'Node', 'Express', 'MongoDB']}
          variants={itemVariant}
        />
        <Card
          image={Toolit}
          alt="Toolit"
          year="2018"
          githubLink="https://github.com/SanderNicolaysen/toolit"
          header="Toolit"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium doloremque laborum."
          tools={['Vue', 'ASP.NET MVC']}
          variants={itemVariant}
        />
        <Card
          image={Space}
          alt="Space Exploration Game"
          year="2017"
          githubLink="https://github.com/SanderNicolaysen/binkbik"
          header="Space Exploration Game"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium doloremque laborum."
          tools={['C++', 'SFML']}
          variants={itemVariant}
        />
        <Card
          image={Mario}
          alt="Super Mario"
          year="2017"
          githubLink="https://github.com/SanderNicolaysen/SAM"
          header="Super Mario"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium doloremque laborum."
          tools={['Java', 'Swing']}
          variants={itemVariant}
        />
      </motion.div>
    </section>
  );
};

export default Works;
