import Card from './ui/Card';
import Flytoget from '../assets/flytoget.png';
import Leo from '../assets/leo.png';
import Space from '../assets/space-exploration-game.png';
import Mario from '../assets/mario.png';

const Works = () => {
  return (
    <section name="works" className="max-w-3xl container mx-auto px-4">
      <h2 className="font-semibold text-xl dark:text-white mb-4 border-b-2 dark:border-darkGray-500">
        Works
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <li className="text-center mb-4">
          <a
            href="https://minside.flytoget.no/en/login"
            target="_blank"
            className=""
          >
            <img
              src={Flytoget}
              alt=""
              className="block object-cover object-center w-full rounded-lg"
            />
          </a>
        </li>
        <li className="text-center mb-4">
          <a href="#">
            <img
              src={Leo}
              alt=""
              className="block object-cover object-center w-full h-full rounded-lg aspect-[3/2]"
            />
          </a>
        </li>
        <li className="text-center mb-4 w-full">
          <a
            href="https://github.com/SanderNicolaysen/binkbik"
            className=""
            target="_blank"
          >
            <img
              src={Space}
              alt=""
              className="block object-cover object-center w-full h-full rounded-lg aspect-[3/2]"
            />
          </a>
        </li>
        <li className="text-center mb-4">
          <a href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              alt=""
              className="block object-cover object-center w-full h-full rounded-lg aspect-[3/2]"
            />
          </a>
        </li>
        <li className="text-center mb-4">
          <a href="https://github.com/SanderNicolaysen/SAM" target="_blank">
            <img
              src={Mario}
              alt=""
              className="block object-cover w-full h-full rounded-lg aspect-[3/2]"
            />
          </a>
        </li>
        <li className="text-center mb-4">
          <a href="#">
            <img
              src={Leo}
              alt=""
              className="block object-cover object-center w-full h-full rounded-lg aspect-[3/2]"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Works;
