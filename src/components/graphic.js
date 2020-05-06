import React from 'react'
import $ from "jquery"

class Graphic extends React.Component {

  componentDidMount() {

    const PIXI = require("pixi.js")
    
    const app = new PIXI.Application({
                view: document.getElementById('canvas'),
                width: 500,
                height: 400,
                //backgroundColor: 0x999999,
                antialias: true,
                transparent: true
            });
 
    document.getElementById('area').appendChild(app.view);

    app.stage.interactive = true;

    const shape = PIXI.Polygon(
      new PIXI.Point(0,250) ,
      new PIXI.Point(170,280),
      new PIXI.Point(400,580),
      new PIXI.Point(600,700)
    );

    const thing = new PIXI.Graphics();

    thing.interactive = true;
    thing.buttonMode = true;
    thing.hitarea = shape;

    app.stage.addChild(thing);
    thing.x = 250;
    thing.y = 200;

    let count = 0;
    app.ticker.add(() => {
        count += 0.1;

        thing.clear();
        thing.lineStyle(10, 0xffff00, 0.7);
        thing.beginFill(0xff97ff, 0.7);

        thing.moveTo(20 + Math.sin(count) * 20, -20 + Math.cos(count) * 20);
        thing.lineTo(-100 + Math.cos(count) * 10, 100 + Math.sin(count) * 10);
        thing.lineTo(100 + Math.sin(count) * 10, 100 + Math.cos(count) * 10);
        thing.closePath();

        thing.rotation = count * 0.1;
    });
    
    const over = () => {
      const elem = $('.nav a');
      const graphic = $('#area');
      let posX = elem.offset().left;
      let posY = elem.offset().top;

      $('.nav a').on('mouseover', function(){
        let posX = $(this).offset().left;
        let posY = $(this).offset().top;

        graphic.animate({
          top: posY,
          left: posX + 50
        }, 500);
      });

      elem.mouseleave(function(){
        graphic.animate({
          top: "45%",
          left: "50%"
        }, 500);
      });
    }

    over()
  }
  
  render() {
    return(
      <div id="area"><canvas id="canvas"></canvas></div>
    )
  }
}

export default Graphic
