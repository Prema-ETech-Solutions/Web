var raw_status;
var raw_date;
var label_final = [];
function get_data_Server() {
  var request = new XMLHttpRequest();
  var urlHere =
    "https://api.thingspeak.com/channels/1733189/feeds.json?api_key=1IB99NKVQKZ8P374";
  console.log(urlHere);
  request.open("GET", urlHere, true);

  request.onload = function () {
    if (request.status == 200 && request.readyState == 4) {
      var data = JSON.parse(request.responseText);
      console.log(data);
      raw_status = data.feeds.map(function (elem) {
        return elem.field1;
      });
      raw_date = data.feeds.map(function (elem) {
        return elem.created_at;
      });
      //   console.log(raw_date[0]);
      //   var dta = new Date(raw_date[0]);
      //   console.log(dta);
      //   console.log(dta.toDateString());

      //   let arr =

      label_final = [];
      for (let i = 0; i < raw_date.length; i++) {
        var dt = new Date(raw_date[i]);
        //   console.log(dt.toDateString());
        //   console.log(dt.toTimeString().slice(0,8));
        label_final.push(
          dt.toDateString() + " " + dt.toTimeString().slice(0, 8)
        );
      }
      console.log(label_final);

      Draw(raw_status,label_final);
    }
  };
  request.send();
}
let ctx;
let myChart;
function Draw(rs,lf) {
  if (myChart != undefined) {
    myChart.destroy();
  }

  ctx = document.getElementById("canvas").getContext("2d");
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: lf,
      datasets: [
        {
          label: "Button On = 1",
          data: rs,
          backgroundColor: "transparent",
          borderColor: "Green",
          borderWidth: 4,
        },
      ],
    },
    options: {
      Elements: {
        line: {
          tension: 0,
        },
        legend: { display: false },
        scales: {
          yAxes: [{ ticks: { min: -1, max: 1 } }],
        },
      },
    },
  });
}
