

   
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Graph() {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/dataPoints');
        setDataPoints(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchData();
  }, []);

  const options = {
    title: {
      text: "Basic Column Chart in React"
    },
    data: [
      {
        type: "line",
        name: "CPU Utilization",
        connectNullData: true,
        xValueType: "dateTime",
        xValueFormatString: "DD MMM hh:mm TT",
        yValueFormatString: "#,##0.##\"%\"",
        dataPoints: dataPoints
      }
    ]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Graph;

// import CanvasJSReact from '@canvasjs/react-charts';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';


// // var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// function Graph() {
//   const [dataPoints, setDataPoints] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/dataPoints');
//         setDataPoints(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();

//     const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

//     return () => {
//       clearInterval(interval); // Cleanup the interval on component unmount
//     };
//   }, []);

//   const options = {
//     title: {
//       text: " Basic Column Chart in React"
//     },
//     data: [
//       {
//         type: "line",
//         name: "CPU Utilization",
//         connectNullData: true,
//         xValueType: "dateTime",
//         xValueFormatString: "DD MMM hh:mm TT",
//         yValueFormatString: "#,##0.##\"%\"",
//         dataPoints: dataPoints
//       }
//     ]
//   };

//   return (
//     <div >
//       <CanvasJSChart options={options} />
//     </div>
//   );
// }

// export default Graph;
