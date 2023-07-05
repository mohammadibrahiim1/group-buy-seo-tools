// import React from "react";
// import "./Counter.css";
// import { BiWorld } from "react-icons/bi";
// import { FaUserCheck, FaUserAlt } from "react-icons/fa";
// import { BsIncognito } from "react-icons/bs";

// const Counters = () => {
//   return (
//     <div>
//       <div className="pt-32">
//         {/* <div className="py-12">
//           <h1 className="text-5xl font-semibold text-center text-primary  capitalize">
//             Our Group Buy SEO Tools Service Benefit
//           </h1>
//         </div> */}
//         <div className="grid grid-cols-4 w-3/4 mx-auto gap-5">
//           <div>
//             <div class=" h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
//               <div class="pt-4 text-gray-500">
//                 <FaUserAlt class="h-8 w-8 sm:h-10 sm:w-10 text-warning text-center mx-auto" />

//                 <h3 class="mt-4 text-5xl font-semibold  text-error text-center sm:text-xl">
//                   5605
//                 </h3>

//                 <p class="mt-2 text-5xl font-semibold text-center uppercase  text-primary sm:text-xl">
//                   Total Users
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div class="  h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
//               <div class="pt-4 text-gray-500">
//                 <FaUserCheck class="h-8 w-8 sm:h-10 sm:w-10 text-warning text-center mx-auto" />

//                 <h3 class="mt-4 text-5xl font-semibold  text-error text-center sm:text-xl">
//                   193
//                 </h3>

//                 <p class="mt-2 text-5xl font-semibold text-center uppercase  text-primary sm:text-xl">
//                   Active Users
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div class="  h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
//               <div class="pt-4 text-gray-500">
//                 <BiWorld class="h-8 w-8 sm:h-10 sm:w-10 text-warning text-center mx-auto" />

//                 <h3 class="mt-4 text-5xl font-semibold  text-error text-center sm:text-xl">
//                   105
//                 </h3>

//                 <p class="mt-2 text-5xl font-semibold text-center uppercase  text-primary sm:text-xl">
//                   Countries
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div class="  h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
//               <div class="pt-4 text-gray-500">
//                 <BsIncognito class="h-8 w-8 sm:h-10 sm:w-10 text-warning text-center mx-auto" />

//                 <h3 class="mt-4 text-5xl font-semibold  text-error text-center sm:text-xl">
//                   2018
//                 </h3>

//                 <p class="mt-2 text-5xl font-semibold text-center uppercase  text-primary sm:text-xl">
//                   Since
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Counters;

import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
} from "@mantine/core";
import { IconArrowDownRight } from "@tabler/icons-react";
import { IconArrowUpRight } from "@tabler/icons-react";
// import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";

const data = [
  {
    label: "page view",
    stats: "string",
    progress: "2500",
    color: "red",
    icon: IconArrowUpRight | IconArrowDownRight,
  },
  {
    label: "page view",
    stats: "string",
    progress: "2500",
    color: "blue",
    icon: IconArrowUpRight | IconArrowDownRight,
  },
  {
    label: "page view",
    stats: "string",
    progress: "2500",
    color: "green",
    icon: IconArrowUpRight | IconArrowDownRight,
  },
];

// const icons = {
//   up: IconArrowUpRight,
//   down: IconArrowDownRight,
// };

const Counter = () => {
  const stats = data.map((stat) => {
    // const Icon = icons[stat.icon];
    return (
      <Paper withBorder radius="md" p="xs" key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={<Center>{stat.icon}</Center>}
          />

          <div>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
              {stat.label}
            </Text>
            <Text weight={700} size="xl">
              {stat.progress}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
      {stats}
    </SimpleGrid>
  );
};

export default Counter;
