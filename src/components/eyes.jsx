import { useEyeMovement } from "../hooks";

const Eye = () => {
  const rotate = useEyeMovement();

  return (
    <>
      <div className="eye w-full h-screen overflow-hidden">
        <div className="w-full relative h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
          <div className="absolute flex items-center gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
            <div className="w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-zinc-100">
              <div className="w-2/3 h-2/3 rounded-full relative bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className="w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-zinc-100">
              <div className="w-2/3 h-2/3 rounded-full relative bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Eye;
