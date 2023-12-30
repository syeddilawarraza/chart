// import React, { useState, useEffect } from "react";
//  import { Bar, Line } from "react-chartjs-2";
// import axios from "axios";

// function GrChart() {

//   const [data, setData] = useState([]);
//   const [posts, setPosts] = useState([]);

//   let title = [];
//   let id = [];
//   useEffect(() => {

//     axios.get("http://localhost:3000/countries").then(res => {
//       const ipl = res.data;
//       setPosts(ipl);

//       ipl.forEach(record => {
//         title.push(record.title);
//         id.push(record.id);
//       });

//       setData({
//         Data: {
//           labels: title,
//           datasets: [
//             {
//               label: "IPL 2018/2019 Top Run Scorer",
//               data: id,
//               backgroundColor: [
//                 "#3cb371",
//                 "#0000FF",
//                 "#9966FF",
//                 "#4C4CFF",
//                 "#00FFFF",
//                 "#f990a7",
//                 "#aad2ed",
//                 "#FF00FF",
//                 "Blue",
//                 "Red"
//               ]
//             }
//           ]
//         }
//       });
//     });
//   });

//   return (
//     <div>
//       <Line data={data}></Line>
//     </div>
//   );
// }

// export default GrChart;




import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

function GrChart() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "IPL 2018/2019 Top Run Scorer",
        data: [],
        backgroundColor: [
          "#3cb371",
          "#0000FF",
          "#9966FF",
          "#4C4CFF",
          "#00FFFF",
          "#f990a7",
          "#aad2ed",
          "#FF00FF",
          "Blue",
          "Red"
        ],
      },
    ],
  });

  useEffect(() => {
    axios.get("http://localhost:3000/countries").then((res) => {
      const ipl = res.data;

      const titles = [];
      const ids = [];

      ipl.forEach((record) => {
        titles.push(record.title);
        ids.push(record.id);
      });

      setData({
        labels: titles,
        datasets: [
          {
            ...data.datasets[0], // Maintain the other properties of the dataset
            data: ids,
          },
        ],
      });
    });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      <Bar data={data} />
    </div>
  );
}

export default GrChart;
