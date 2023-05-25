// import React from "react";

// const AsSeenOn = () => {
//   return (
//     <div>
//       <section className="bg-[#F7F7F7]">
//         <div className="max-w-screen-xl mx-auto ">
//           <h3 className="my-5 text-center text-3xl font-bold text-[#4B4F58] font-sans">
//             As soon on:
//           </h3>
//           <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-4 mx-auto">
//             <div>
//               <img
//                 className="w-[500px] h-[120px] p-6"
//                 src="https://digitavision.com/wp-content/uploads/2021/10/Projuktigeek-logo-bn.png"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 className="w-[500px] h-[120px] p-6"
//                 src="https://digitavision.com/wp-content/uploads/2021/10/rsz_serpkey-logo-black.png"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 className="w-[500px] h-[120px] p-6"
//                 src="https://digitavision.com/wp-content/uploads/2021/10/470-4701366_transparent-newspaper-clipping-clipart-prothom-alo-logo-png.png"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 className="w-[500px] h-[120px] p-5"
//                 src="https://digitavision.com/wp-content/uploads/2021/09/logo.png"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AsSeenOn;

import React from "react";

const PopularTools = () => {
  return (
    <div>
      <section className="w-11/12 mx-auto ">
        <div>
          <h1 className="text-primary text-center text-5xl py-16 uppercase font-semibold">
            Our Most popular Group buy tools
          </h1>
        </div>

        <div className=" stats border shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <img
                src="https://i.ibb.co/8jxsY61/ahrefs-cloud.png"
                alt=""
                srcset=""
                className=" rounded w-28 h-28"
              />
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <img
                src="https://i.ibb.co/mG3f6cK/SEMrush.png"
                alt=""
                srcset=""
                className=" rounded w-28 h-28"
              />
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-28 h-28 rounded ">
                  <img src="https://i.ibb.co/2cPqCGh/copyscape.png" alt="" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-28 h-28 rounded">
                  <img src="https://i.ibb.co/G7RzKg1/jasper.png" alt="" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-28 h-28 rounded ">
                  <img src="https://i.ibb.co/nbgHWb9/Story-Blocks.png" alt="" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-28 h-28 rounded">
                  <img
                    src="https://i.ibb.co/cvMymGp/grammarly-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularTools;
