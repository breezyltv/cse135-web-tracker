import React, { Component } from 'react';

class Dashboard extends Component {
render() {
  return (
    <div id="content-image">
            <div id="nav-list">
                    <ul>
                        <li><h3><a href="https://www.google.com">Google</a></h3></li>
                        <li><h3><a href="https://ucsd.edu/">UCSD</a></h3></li>
                        <li><h3><a href="https://www.reddit.com/">Reddit</a></h3></li>
                        <li><h3><a href="https://stackoverflow.com/">Stackoverflow</a></h3></li>
                        <li><h3><a href="https://twitter.com/">Twitter</a></h3></li>
                    </ul>
            </div>
                        <div className="home-dash"></div>
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">As summer melts the ice, polar bears dive for food in a unique way rarely seen called porpoising <a href="https://t.co/bEnWAsLyh4">pic.twitter.com/bEnWAsLyh4</a></p>&mdash; National Geographic (@NatGeo) <a href="https://twitter.com/NatGeo/status/1219041094203138048?ref_src=twsrc%5Etfw">January 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5nl0C_PoOqw" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="home-dash"></div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27762.22603515311!2d-117.15170976809247!3d32.7149692760166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95354fd94ac8f%3A0x3e4c5c4163d7af44!2sSeaport%20Village!5e0!3m2!1sen!2sus!4v1579490177930!5m2!1sen!2sus" width="600" height="450" allowfullscreen=""></iframe>
            <div className="home-dash"></div>
            <div className="clear"></div>
            <img height="500" alt="forest waterfall" src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"></img>
            <div className="home-dash"></div>
            <img height="500" alt="green forest" src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80"></img>
            <div className="home-dash"></div>
            <img id="img_check" height="500" alt="bird" src="https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"></img>

            <div className="home-dash"></div>

            <div className="dom-content">
                <h3>DOMContentLoaded : Load</h3>
                <ol>
                        <li>624 ms : 1.21 s</li>
                        <li>552 ms : 945 ms</li>
                        <li>636 ms : 1.06 s</li>
                        <li>549 ms : 1.01 s</li>
                        <li>588 ms : 1.00 s</li>
                        <li>591 ms : 971 ms</li>
                        <li>548 ms : 953 ms</li>
                        <li>519 ms : 905 ms</li>
                        <li>543 ms : 926 ms</li>
                        <li>511 ms : 882 ms</li>
                </ol>
            </div>
        </div>
  );
}
}
export default Dashboard;
