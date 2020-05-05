import * as PIXI from 'pixi.js'

window.onload = () => {

const app = new PIXI.Application({
            view: document.getElementById('canvas'),
            width: window.innerWidth,
            height: window.innerWidth / 2,
            backgroundColor: 0x999999,
            antialias: true,
            transparent: true
        });

document.getElementById('area').appendChild(app.view);

app.stage.interactive = false;

const thing = new PIXI.Graphics();
app.stage.addChild(thing);
thing.x = 1000 / 2;
thing.y = 600 / 2;

let count = 0;
app.ticker.add(() => {
    count += 0.1;

    thing.clear();
    thing.lineStyle(10, 0xff0000, 1);
    thing.beginFill(0xffFF00, 1.0);

    thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
    thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
    thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
    thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.closePath();

    thing.rotation = count * 0.3;
});
}
