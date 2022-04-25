import { facebook, instagram, twitter } from '../assets'

const Aside = () => {
  return (
    <aside className="min-w-[161px] h-full flex flex-col items-center border-r justify-between">
      <div className="font-bold mt-6 text-5xl">Xae</div>
      <div className="flex flex-col items-center mb-[52px] gap-[38px]">
        <a className="group" href="#">
          <img
            className="transition-transform group-hover:scale-125"
            src={facebook}
            alt="facebook"
          />
        </a>
        <a className="group" href="#">
          <img
            className="transition-transform group-hover:scale-125"
            src={instagram}
            alt="instagram"
          />
        </a>
        <a className="group" href="#">
          <img
            className="transition-transform group-hover:scale-125"
            src={twitter}
            alt="twitter"
          />
        </a>
      </div>
    </aside>
  )
}
export default Aside
