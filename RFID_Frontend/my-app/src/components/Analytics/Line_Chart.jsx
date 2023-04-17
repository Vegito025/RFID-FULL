import {Line} from "react-chartjs-2"
import "./Analytics.css"

function Line_Chart(){
    return (
        <div className="chart">
            <Line
                data={{
                    labels: ["Jan", "Feb", "March", "Apr", "May", "Jun"],
                    datasets: [{
                        label: "Bar Attendence",
                        data: [12, 9, 6, 5, 4, 6],
                        fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
                    }]
                }}
                height={400}
                width = {600}
                options={{maintainAspectRatio: false, scales:{yAxes: [{ticks: {beginAtZero:true}}]}}}
            />
        </div>
    )
}
export default Line_Chart;