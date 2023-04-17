import {Bar} from "react-chartjs-2"
import "./Analytics.css"

function Chart(){
    return (
        <div className="chart">
            <Bar
                data={{
                    labels: ["Jan", "Feb", "March", "Apr", "May", "Jun"],
                    datasets: [{
                        label: "Bar Attendence",
                        data: [12, 9, 6, 5, 4, 6],
                        backgroundColor: [
                            'rgba(255, 99, 132)',
                            'rgba(54, 162, 235)',
                            'rgba(255, 206, 86)',
                            'rgba(75, 192, 192)',
                            'rgba(153, 102, 255)',
                            'rgba(255, 159, 64)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
                height={400}
                width = {600}
                options={{maintainAspectRatio: false, scales:{yAxes: [{ticks: {beginAtZero:true}}]}}}
            />
        </div>
    )
}
export default Chart;