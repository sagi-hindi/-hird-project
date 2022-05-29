import "./Reports.css";
import {Bar} from "react-chartjs-2"
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from "react";
import followService from "../../../Services/FollowService";
import FollowModel from "../../../Models/FollowModel";

function Reports(): JSX.Element {
    Chart.register(...registerables)




    const [chart, setChart] = useState<FollowModel[]>([]);

    useEffect(()=>{
        followService.fetchNumberOfFollowers()
            .then(response => setChart(response))
            .catch(err=>alert(err.message))

    },[])



    

    
    const data = {
        labels: chart.map(f => f.destination),
        datasets: [{
          label: 'followers',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: chart.map(f=> f.sumOfFollowers),
        }]
      };


    
    return (
        <div className="Reports">
            <h1>Followers Report</h1>
            <Bar data={data}/>

			
        </div>
    );
}

export default Reports;
