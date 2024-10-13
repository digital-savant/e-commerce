import { assets } from "../assets/assets";

export function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="m-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptas animi quia necessitatibus voluptatum
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privay Policy</li>
          </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+17623432434</li>
                <li>contact@gmail.com</li>
            </ul>
        </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2024@ forever.com -All right Reserved.</p>
        </div>
      </div>
    </div>
  );
}
