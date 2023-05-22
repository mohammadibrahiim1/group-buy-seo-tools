import React, { useEffect, useState } from "react";
import DisplayTools from "../../Components/DisplayTools/DisplayTools";

const AllTools = () => {
  const [allTools, seeAllTools] = useState([]);
  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        seeAllTools(data);
      });
  }, []);
  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full mx-auto">
          <table className="table w-full text-center">
            {/* head */}
            <thead >
              <tr>
                <th>
                  {/* <label>
                    <input type="checkbox" className="checkbox" />
                  </label> */}
                </th>
                <th>Tools Name</th>
                <th>Active Status</th>
                <th>Access System</th>
                <th>Limits</th>
                <th>Price</th>
                <th>Cart</th>
              </tr>
            </thead>
            {allTools.map((allTool, i) => (
              <>
                <tbody>
                  <tr>
                    <th className="text-center">{i+1}</th>
                    <td>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={allTool.profile.image} alt="" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {allTool.profile.name} 
                          </div>
                          {/* <div className="text-sm opacity-50">
                            United States
                          </div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      {allTool.profile.status}
                      {/* <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span> */}
                    </td>
                    <td>
                        {allTool.profile.access}
                        </td>
                    <td>
                    {allTool.profile.limit?.slice(0, 20)} ...
                      <button className="btn btn-ghost btn-xs">
                        see details
                      </button>
                    </td>
                    <td>${allTool.profile.price}</td>
                    <td>
                      <button className="btn btn-info btn-xs">
                        add to cart
                      </button>
                    </td>
                  </tr>
                  <hr />
                </tbody>{" "}
              </>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTools;
