import Card from './ui/Card'

const Works = () => {
  return (
    <div name="works" className="max-w-xl container mx-auto px-4 sm:px-0">
      <h2 className="text-xl dark:text-white mb-4 border-b-2 dark:border-darkGray-500">Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Works
