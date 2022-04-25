import { facebook, instagram, twitter } from '../assets'

const Aside = () => {
  return (
    <aside className="min-w-[161px] h-full flex flex-col items-center border-r justify-between">
      <div className="font-bold mt-6 text-5xl">Xae</div>
      <div className="flex flex-col items-center mb-[52px] gap-[38px]">
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
    </aside>
  )
}
export default Aside
