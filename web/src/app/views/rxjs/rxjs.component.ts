import { Component, OnInit } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // first we need to create a stage
    var stage = new Konva.Stage({
      container: 'container',   // id of container <div>
      width: 500,
      height: 500
    });

    // then create layer
    var layer = new Konva.Layer();

    // create our shape
    var circle = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });

    // add the shape to the layer
    layer.add(circle);

    // add the layer to the stage
    stage.add(layer);

    // draw the image
    layer.draw();

  }

}
