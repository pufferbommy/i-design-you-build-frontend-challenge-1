import Navbar from '../components/Navbar'
import { arrow, astronaut, atmoon, boxes } from '../assets'

const Home = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex flex-col justify-between h-[calc(100%-88px)] lg:h-[calc(100%-75px)]">
        <div className="ml-[30px] lg:ml-[125px] flex flex-col justify-center h-full">
          <h1 className="font-bold text-7xl">
            Adventure
            <br />
            Together
          </h1>
          <p className="max-w-[260px] lg:max-w-[524px] mt-[34px] font-medium text-xs lg:text-lg text-opacity-90 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
            potenti faucibus nec, rhoncus, vulputate vitae. Dictum rutrum ut cras
            nullam porta id dolor arcu, quis.
          </p>
        </div>
        <div className="w-full backdrop-blur-lg bottom-card min-h-[187px] lg:min-h-[244px] relative flex pl-[30px] lg:pl-[125px] items-center">
          <div className="absolute h-full lg:h-auto bottom-0">
            <img className="h-full w-full" src={atmoon} alt="atmoon" />
          </div>
          <div className="flex">
            <div className="ml-[calc(239.47px+23px)] lg:ml-[calc(83px+324px)] space-y-[18px]">
              <h2 className="font-bold text-2xl">Exploration</h2>
              <p className="min-w-[111px] overflow-hidden h-28 lg:h-auto lg:max-w-[427px] font-medium text-lg text-white text-opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
                potenti faucibus nec, rhoncus, vulputate
              </p>
            </div>
            <div className="hidden lg:block cursor-pointer self-end">
              <img src={arrow} alt="" />
            </div>
            <div className="ml-[151px] hidden lg:block space-y-[18px]">
              <h2 className="font-bold text-2xl">Footprint</h2>
              <p className="max-w-[238px] font-medium text-lg text-white text-opacity-90">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 -right-96 lg:right-0 bottom-20 lg:bottom-0">
        <img
          className="animate-float absolute left-52 lg:left-64 rounded-full top-64 lg:top-40"
          src={astronaut}
          alt=""
        />
        <img src={boxes} alt="boxes" />
      </div>
    </div>
  )
}
export default Home
