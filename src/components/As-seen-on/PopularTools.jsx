import React from "react";

const PopularTools = () => {
  return (
    <div className="">
      <section className="w-11/12 mx-auto">
        <div>
          <h1 className="text-primary text-center text-5xl py-16 uppercase font-semibold">
            Our Most popular Group buy tools
          </h1>
        </div>

        <div className=" stats border shadow grid grid-cols-3">
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
