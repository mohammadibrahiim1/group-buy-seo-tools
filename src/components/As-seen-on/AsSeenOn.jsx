import React from "react";

const AsSeenOn = () => {
  return (
    <div>
      <section className="bg-[#F7F7F7]">
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="my-5 text-center text-3xl font-bold text-[#4B4F58] font-sans">
            As soon on:
          </h3>
          <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-4 mx-auto">
            <div>
              <img
                className="w-[500px] h-[120px] p-6"
                src="https://digitavision.com/wp-content/uploads/2021/10/Projuktigeek-logo-bn.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[500px] h-[120px] p-6"
                src="https://digitavision.com/wp-content/uploads/2021/10/rsz_serpkey-logo-black.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[500px] h-[120px] p-6"
                src="https://digitavision.com/wp-content/uploads/2021/10/470-4701366_transparent-newspaper-clipping-clipart-prothom-alo-logo-png.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[500px] h-[120px] p-5"
                src="https://digitavision.com/wp-content/uploads/2021/09/logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AsSeenOn;
