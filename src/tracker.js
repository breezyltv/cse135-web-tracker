export const getStaticData = () =>{
  var cookie = navigator.cookieEnabled;

  var checkJSEnabled = navigator.javaEnabled ? "true" : "false";

  var con = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  var con_type = con.effectiveType;

  var img_check = document.getElementById('footer') != null ? false : true;

  var checkCSS = true;

  var avai_height = window.screen.height;
  var avai_width = window.screen.width;

  var window_height = window.innerHeight;
  var window_width = window.innerWidth;

  let static_data = {
      "user_agent": navigator.userAgent,
      "language": navigator.language,
      "cookie": cookie,
      "check_js": checkJSEnabled,
      "image_On": img_check,
      "check_css": checkCSS,
      "connection": con_type,
      "avai_height": avai_height,
      "avai_width": avai_width,
      "window_height": window_height,
      "window_width": window_width
  }
  return static_data;
}


export const getPerformanceData = (page_name) =>{

    var pt = window.performance.timing;
    var start_time = pt.responseEnd;
    var end_time = pt.loadEventEnd;
    var load_time = end_time - start_time;

    var performance_data = {
        "page" : page_name,
        "start": start_time,
        "stop": end_time,
        "load_time": load_time,
        "timing": pt,
    }
    return performance_data;
}


export const createTableStaticData = (data) => {

    var table = "<table><caption>Static Data</caption><thead>";
    table += "<tr><th>&nbsp;</th><th>Data</th></tr></thead><tbody>";
    Object.keys(data).forEach(function(key) {
        table += "<tr><th>"+ key.toUpperCase() +"</th>";
        table += "<td>"+ data[key] +"</td></tr>";
    });

    table += "</tbody></table>";
    return table;

}

export const createTablePerformanceData = (data, table_name) =>{
    var table = "";
    if(data){
      table = "<table><caption>"+table_name+"</caption><thead>";
      table += "<tr><th>&nbsp;</th><th>Data</th></tr></thead><tbody>";
      Object.keys(data).forEach(function(key) {
          if(key !== "timing"){
              table += "<tr><th>"+ key.toUpperCase() +"</th>";
              table += "<td>"+ data[key] +"m/s</td></tr>";
          }
      });
      table += "</tbody></table>";
    }else{
      table += "<hr/><h2>No pages is loaded yet!</h2>"
    }
    return table;
}

export const checkPathPage = (page_name) => {
  var count = 0;
  for (var i = 0; i < page_name.length; i++) {
    if(page_name[i] === '/')
      count += 1;
  }
  return count;
}
