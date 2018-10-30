(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"160x600_atlas_", frames: [[0,478,169,124],[0,0,403,250],[366,440,111,40],[457,80,43,43],[405,80,50,92],[0,252,244,224],[246,440,118,213],[405,0,79,78],[404,252,83,83],[405,221,17,19],[455,174,43,50],[405,174,48,45],[246,252,156,186]]}
];


// symbols:



(lib.向量圖智慧型物件 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btnpng複製 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.man = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.man1 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.mm2 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mm3 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.qwdqwdqwdq = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.補間動畫6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.instance = new lib.圖層1();
	this.instance.parent = this;
	this.instance.setTransform(-100.7,132.9,1,1,-6);

	this.instance_1 = new lib.圖層1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-125.5,61.2,1,1,-6);

	this.instance_2 = new lib.圖層1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-80.8,-101,1,1,-6);

	this.instance_3 = new lib.圖層1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-210.6,-101,1,1,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 圖層 1
	this.instance_4 = new lib.圖層1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-201.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.6,-143.1,556.8,524.7);


(lib.補間動畫4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mm2();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39,79,78);


(lib.補間動畫2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mm3();
	this.instance.parent = this;
	this.instance.setTransform(-41.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-41.5,83,83);


(lib.元件64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("ABCA+QABg+gjgcQgagUgqgCIgmAEIgDgMIArgEQAsACAdAXQAoAggCBEgAgfAtQgGgEgKAAIgJABIgDgLIAMgCQAOAAAJAHQALAJABARIgMABQAAgNgHgFgAAPA1QAAgVgMgLQgLgNgagDIgYgBIAAgLIAbACQAcAEAOANQAQAPgBAag");
	this.shape.setTransform(7.8,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件64, new cjs.Rectangle(0,0,15.5,12.5), null);


(lib.元件63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("AAAAAIABAAIgBAAg");
	this.shape.setTransform(0.1,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqKAAIAZgCIBICZIghAEIgSglIhCAHIgSApIghADgAqSBfIAqgFIgVgugAoXgLIAegDIAAAzIA2g5IAqgFIhLBOIBPBTIgpAEIg7g+IAABFIgeADgAjnBxIAQgCIAAgrIC6gTIAAAqIAQgBIAAAYIjaAWgAi8BYIAAAUIAagDIAAgTgAiIBTIAAAUIAagDIAAgUgAhUBOIAAATIAcgDIAAgTgAlcB/QgOgEgKgMQgJgLgFgNQgEgPAAgTQAAgRAEgPQAFgQAJgLQAKgNAOgJQANgHASgCQAOgCALACQAMAEAIAFQAIAIAEAKQAEAKABAOIggACQAAgHgDgFQgCgFgDgDQgEgCgFgCQgFgBgIABQgKABgIAFQgIAFgGAJQgJAQAAAWQAAAcAMANQAMAMAZgDIALgCIAMgEIAAggIgmAFIAAgdIBFgHIAABPQgYAQglAEIgKABQgMAAgKgEgABtBkIgFgeIATADQAKAAAJgBQAEAAACgDQABgDAAgGIAAhCQgLAPgMAOQgMAOgNAMQgWASgTAMQgTANgPAIIgQgZQAQgIARgLQARgLARgOIAWgTIASgTIg6AGIgEAMIgDALIgegEQAIgSAGgWQAGgWAEgXIAeAAIgFAUIgEASIBSgIIAAg1Ih4ANIAAgbIDHgVIAAAbIgyAGIAAA0IA1gGIAAAcIg1AGIAABJQAAALgCAHQgCAHgEADQgEAFgHACQgHADgKABIgRACIgQgCgAFjAYQgOAXgUATIgRgVIAOgNIAPgTIAJgMIAHgLIgaACIAAhLIAggEIAAgLIghAEIAAgaIAhgEIAAgSIAYgDIAAATIAhgDIAAAaIghADIAAAKIAggDIAABMIggAEIAAADIASAKIAQAOIgSAXIgIgHIgIgIIAAA1IgYADgAFbg9IAAAZIAIgBIAAgZgAF7hAIAAAZIAIgBIAAgZgAGrBDIgFgcIAKABIALgBIACAAIACgEIABgFIAAgIIAAitIAagDIAAC0QAAALgCAHQgBAHgDAEQgDAGgFACQgFADgIABIgLABIgJgBgAjegnIBogLIAAAWIgfAEIAAAGIAggDIAAAsIggADIAAAHIAhgDIAAAWIhqALgAjEAgIAAAGIAXgDIAAgGgAjEAGIAAAHIA4gHIAAgGgAjEgTIAAAHIAXgDIAAgGgAEEh3IA6gGIAACcIgiADIAAARIgYADgAEchgIAABpIAKgBIAAhpgAI9AoQAHgNAFgOIAKgfQAHgjABg7IAbgDQAAAfgCAbQgDAZgFAWQgDAQgGARQgGAQgHANgAKpADQgHgUgEgVQgFgVgDgZQgEgZgBgcIgzAEIAAgbIBOgIQAAAgADAcQACAcAGAXQAEAVAHATQAHATAJATIgZAVQgJgUgHgTgAhgAQIBMgIIAAAYIhMAIgAH5iMIBMgIIAACXIgwAEIAAANIgcADgAIVh1IAABiIAUgBIAAhjgAGhh3IAZgDIAACJIgZADgAhzAAIAIgMIAGgOIAGgNIAEgNIAZAFIgCAHIgCAFIA3gFIAAAZIhBAHQgGAMgHAKgAiyg0IgzAFIAAgYIAzgFIAAgKIAbgEIAAAKIA3gFIAAgKIAbgDIAAAKIA1gFIAAAYIg1AFIAAAHIgbACIAAgGIg3AGIAAAGIgbADg");
	this.shape_1.setTransform(91.5,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件63, new cjs.Rectangle(0,0,163.7,33.8), null);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(42.6,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件61, new cjs.Rectangle(0,0,85.2,23.5), null);


(lib.元件60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFF100","rgba(255,241,0,0)"],[0,1],0,34.4,0,-34.4).s().p("A6YFYIAAqvMA0wAAAIAAKvg");
	this.shape.setTransform(168.9,34.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件60, new cjs.Rectangle(0,0,337.7,68.8), null);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbC3IAmheIhYjLIA1AAIA8CRIA4iRIA0AAIh4EpgAo+BMQghghAAgxQAAgzAgggQAfgdArgBQAWAAASAJQATAHALAPIAAgaIAyAAIAADXIgyAAIAAgdQgMAQgSAIQgTAKgVgBQgpAAgggdgAocg2QgSATgBAcQABAcASATQAUAUAbAAQAcAAASgUQASgTAAgcQAAgbgSgUQgSgTgcAAQgbAAgUATgAuOBMQgjghAAgxQAAg0AigfQAegdAsgBQAVAAASAJQASAHAMAPIAAgaIAyAAIAADXIgyAAIAAgdQgMAQgSAIQgSAKgWgBQgqAAgegdgAtsg2QgTATAAAcQAAAcATATQASAUAcAAQAcAAATgUQASgTAAgcQAAgbgSgUQgTgTgcAAQgcAAgSATgAyvBAQgngoAAg4QAAg6AngoQAogpA7AAQApABAgASQAgATARAgIgsAaQgZgvg0AAQgmAAgZAbQgaAZAAAmQAAAlAaAaQAZAaAnAAQAeAAAVgQQAUgQAHgaIhWAAIAAgwICMAAIAAAUQAAA4gkAmQglAog7AAQg9ABgogqgARBBoIA8heQgJADgHAAQgkAAgZgZQgagbAAgnQAAgpAcgaQAbgZApgBQAqABAcAaQAbAbAAAmQAAAogUAfIhGBwgARWhvQgOAOAAAUQAAATAOAOQAOAOATAAQAUAAAOgOQANgOAAgUQAAgTgNgOQgPgPgTAAQgTAAgOAPgANiBeQgWgKgOgOQgOgOgJgUQgJgUABgVQAAgXAIgUQAJgUAPgPQAOgNAVgKQAWgJAXAAQAYABAUAHQAUAIAQAOQAQAPAHASQAIATAAAXIAAAQIiwAAQAFAXASAOQARAPAbAAQAUgBARgJQAPgLAHgSIAqAYQgOAbgaAQQgYAQglAAQgbgBgUgHgANog9QgRALgHAQIB7AAQgFgRgQgKQgPgKgYAAQgWABgRAJgAMIBmQgaAAgQgFQgRgFgKgKQgLgLgDgRQgFgRABgaIAAhRIglAAIAAgsIAlAAIAAghIAygjIAABEIAsAAIAAAsIgsAAIAABQQAAAOABAKQACAIAEAEQAEAGAKABIAXABIAAAwgAHoBeQgVgJgPgPQgPgOgIgVQgKgTABgVQgBgXAKgUQAHgTAQgQQAQgPAUgIQAVgJAWAAQAYAAAUAJQAVAJAPAOQAQAPAIAUQAJAUAAAXQAAAVgJATQgIAVgQAOQgOAOgWAKQgTAHgZABQgYgBgTgHgAH6g/QgKAFgKAJQgHAHgFAMQgFAMAAANQAAALAFALQAFAMAHAHQAKAJAKAFQAMAFANgBQAOABAMgFQAMgFAHgJQAJgHAFgMQAFgLgBgLQABgNgFgMQgFgLgJgIQgIgJgLgFQgLgEgPAAQgNAAgMAEgAFQBmIh5i+IAAC+IgxAAIAAkNIA5AAIB0C2IAAi2IAyAAIAAENgAjKBlIg1hIIgzBIIg+AAIBShtIhOhqIA8AAIAyBEIAwhEIA8AAIhOBqIBSBtgAqsBlIAAkRIAzAAIAAERg");
	this.shape.setTransform(123.9,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(0,0,247.8,36.5), null);


(lib.元件58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#219CD8","rgba(33,156,216,0)"],[0,1],0.1,13.1,0.1,-13.2).s().p("Ar0CDIAAkGIXoAAIAAEGg");
	this.shape.setTransform(75.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件58, new cjs.Rectangle(0,0,151.3,26.3), null);


(lib.元件55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#219CD8").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件55, new cjs.Rectangle(0,0,300,250), null);


(lib.元件53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.向量圖智慧型物件();
	this.instance.parent = this;
	this.instance.setTransform(-27,25,0.488,0.488);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABKAxIAGgDIAEgFIgJAAIAAgRIASAAIAAAMQABAHgEAFQgDAFgIAEgAigAqIALgCIAKgDIgOAAIAAgvIBCAAIAAAvIgNAAIADABIADABIAGABIAGABIgGAMIgOgEIgHgDIgHgDIAIgGIgXAAIAHAHIgPAGIgOADgAiNAaIAqAAIAAgCIgqAAgAiNAOIAqAAIAAgCIgqAAgAiNADIAqAAIAAgDIgqAAgAkJA0IAAg6IgXAAIAAAuIgPAAIAAg7IAmAAIAAgHIAPAAIAAAHIAnAAIAAApQAAAJgDAFQgFAEgJAAIgEAAIgEAAIgEgQIAHABIAFABQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIABgFIAAgZIgaAAIAAA6gAizAzIAAg0IgCACIgDADIgHgNQAHgLAFgLQAEgMAEgNIANAFIgDALIgFAMIAABPgAgtAxIAAgGQgGAAgEgDQgFgCgDgEQgDgEgCgFQgBgFAAgGIAQAAIAAAGIABADIADAEIAEACIAAgWIgJgEIgGgDQgIgFAAgKQAAgEACgEQACgEAEgEIAHgFIAIgCIAAgGIAMAAIAAAGQALABAGAHQAFAGABAMIgQAAQgBgFgBgCQgCgDgDgBIAAATIAKAEIAGADQAEADACAEQACAEAAAFQgBAKgFAGQgGAGgMACIAAAGgAghAcQAEgBACgCQACgCAAgEQAAgDgCgCIgGgDgAgygUQAAAAgBABQAAAAAAABQAAAAAAABQAAABgBAAQABABAAAAQAAABAAABQAAAAAAABQABAAAAABIAFADIAAgPIgFADgAELAoQgGgDgEgHQgGgKAAgSQAAgHACgHQABgHADgGQAEgGAGgEQAGgDAIAAQAIAAAHADQAFAEAFAGQADAGABAHQABAHAAAHQABASgHAKQgEAHgFADQgHAEgIAAQgIAAgGgEgAEOgSQgEAHAAANQAAAcAPAAQAHAAAEgHQAEgHAAgOQAAgNgEgHQgEgHgHAAQgHAAgEAHgAB4AoQgFgDgEgHQgHgKAAgSQAAgHACgHQABgHADgGQAEgGAGgEQAHgDAIAAQAIAAAGADQAGAEAEAGQADAGABAHQACAHAAAHQAAASgHAKQgDAHgGADQgGAEgIAAQgIAAgHgEgAB8gSQgEAHAAANQAAAcAPAAQAHAAAEgHQADgHAAgOQAAgNgDgHQgEgHgHAAQgIAAgDAHgAC6AlQgGgGgBgNIAPAAIABAGIACADQADADAHAAQAGAAAEgFQADgFACgKIgIAEIgIABQgGAAgFgCQgFgCgDgDQgIgIAAgLQAAgGACgFQACgFAEgEQADgDAGgCQAFgCAGAAQAPAAAIAKQAHAKAAASQABAWgJALQgHAKgRAAQgNAAgGgGgADJgYIgDADIgDAFIgBAGIABAFIADAEIADABIAGABIAFgBIAFgCIADgEQABgCAAgDIgBgFIgDgFIgFgDIgFgBIgGABgAAEAQIAPAAIABAGIACAEIAFADIAFABIAGgBIAFgCIADgEIABgFIgBgFIgEgDIgFgCIgFgBIgDABIgEAAIAAgOIAEAAIAEABIAFgBIAEgCIADgDIABgEIgBgFIgDgDIgEgBIgFgBIgGABQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAIgCAEIgBAGIgPAAQABgaAaAAQAGAAAFABQAGABADADQAEADADAEQADAFAAAGQAAAFgDAEQgCAEgEACQAFAEACAEQACAFABAGQAAAGgCAEQgDAFgEADQgFADgFACQgFABgHAAQgcAAAAgbgAicgMIAAgaIAVAAIAAgDIgWAAIAAgMIBLAAIAAAMIgWAAIAAADIAVAAIAAAagAhogXIAIAAIAAgEIgIAAgAh7gXIAIAAIAAgEIgIAAgAiPgXIAIAAIAAgEIgIAAgAh7gmIAIAAIAAgDIgIAAgAk3gdIAAgNIAuAAIAAgNIAPAAIAAANIAvAAIAAANg");
	this.shape.setTransform(14.7,99.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(-30.8,25,86.4,94.2), null);


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.qwdqwdqwdq();
	this.instance.parent = this;
	this.instance.setTransform(84,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件51, new cjs.Rectangle(84,30,156,186), null);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(287.8,47.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(156,-53.5,270.2,241.3), null);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(94.5,135.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件47, new cjs.Rectangle(-64.4,31.2,330.4,276), null);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AilBgQgHgGgIgLIgCgEIgCgDIgUAPQgLAHgMAFIgMgWQANgHALgIQAKgIAJgIIgFgOIgEgQIgEgQIgDgTIgrAAIAAAaIAQgDIAOgDIAEAZIgRAEIgRAEIAAAgIgBARQgCAHgDAEQgDAEgGACQgFACgJAAIgOgBIgOgDIgFgbIAPADIAPABIACAAIACgDIABgFIAAgHIAAgVIgUADIgUADIgFgcIAXgCIAWgDIAAgfIgtAAIAAgaIAtAAIAAgXIgOACIgOABIgJgZIAsgDIAogEIAMAXIgQACIgQACIAAAZIApAAIgCgbIAAgdIAbAAQAAAgABAYIBCAAIAAAaIhAAAIACALIABAJIACALIADALIAKgRIAJgTIAZANQgIAQgIAOQgIAOgJALQAEAJADAFQAEAFACAAQACAAACgEIADgJIABgPIAaALQgCAOgEAJQgEAKgGAFQgEAEgEABQgFACgFAAQgFAAgGgGgADtBTIAAhAIg9hWIAjAAIApA8IApg8IAjAAIg9BWIAABAgACgBTIgQglIg+AAIgQAlIgfAAIBCiWIAYAAIBDCWgACEAUIgTgtIgTAtIAmAAgAhCBTIAAiWIAqAAQAiAAARAMQARANAAAZQAAAZgRANQgRAMghAAIgOAAIAAAygAglAHIAWAAQAPAAAHgHQAIgFAAgMQAAgGgDgEQgCgFgFgDIgIgEQgFgBgHAAIgWAAgAilhGQgEgIgGgIIAXgOIALAQQAFAIAEAIIgYAOQgEgIgFgIg");
	this.shape.setTransform(85.5,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層 2
	this.instance = new lib.btnpng複製();
	this.instance.parent = this;
	this.instance.setTransform(29,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件39, new cjs.Rectangle(29,0,111,55.5), null);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件38, new cjs.Rectangle(0,0,43,43), null);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AisCEQgJgIgCgQQgBgEgBgZIAAgYQAAgNAEgJQAIgUAkgOQAfgNAigIIAdgIQAQgFAKgJIARgUQAIgIAUgLQATgMAIgIIALgLQAGgHAFgDQAKgIARgDQAagIARAGQAOAEAKAPQAKANADARQACANAAAUIgBAhIABAWQAAAMgDAJQgDANgNAUQgRAagPAMQgUAPgeAGQgiAJgvAAIhRgDQgJgBgEADIgGAHQgJALgaABIgJABQgWAAgKgJg");
	mask.setTransform(36.2,44.8);

	// 圖層 1
	this.instance = new lib.mo3();
	this.instance.parent = this;
	this.instance.setTransform(16,19);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件31, new cjs.Rectangle(17.6,30.8,37.2,28.2), null);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mo1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件30, new cjs.Rectangle(0,0,17,19), null);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAaDaIgcgBQgRgBgdgHQgbgHgHgNQgCgDgDgOIgGg4QgCgQADgIQADgHAIgHIAOgPQALgLAEgIIAHgTIgBgBQgcgKgbgQQgagQgIgQQgHgOAAgdQAAgQADgKQAEgOAQgUQAfgkAggTQAngYApgBQANgBAMAEQAKADALALQAMAKAGAHQANAUACAgQABASgBAkIAAAZQABAOgCAKIgCAMQAFABADADQAIAHAJASIANAQQAFAKAAAWIAABGQAAAXgFALQgGALgSALQgVANgbAMIgRAGIgNABIgKgBg");
	mask.setTransform(18.1,17.8);

	// 圖層 1
	this.instance = new lib.mo2();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件28, new cjs.Rectangle(3.8,0,28.7,39.7), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m3();
	this.instance.parent = this;
	this.instance.setTransform(0,7.4,1,1,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,63,98.4), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("AoSDWIBigMIAABmIhIAIIAACRIgaADgAn4ETIAAAJIAugFIAAgKgAn4DvIAAAKIAugGIAAgKgAnuGqQAHgGAHgGQAFgHAEgIIABgEIABgEIgXADIAAgcIAcgDIAAgDIAAgCIAAgEIABgKIgYADIAAgcIB+gOIAAAcIgZACIAAATIAegDIAAAcIgeADIAAA1IgcADIAAg1IgZADIgEAPIgEAMQgGAKgHAIQgIAIgJAGgAm0FVIAAAMIgBAHIAXgDIAAgSgAlyG3IgHggQANADALgBQAEgBADgFQACgGAAgKIAAhdIhIAIIAAhlIBjgLIAADOQAAATgIALQgIALgPABQgFABgGAAIgFAAIgGAAgAmGEGIAAAJIAugFIAAgJgAmGDiIAAAKIAugFIAAgKgAivEoICOgQIAAB8IgdADIAAgLIhVAKIAAALIgcADgAiTFrIAAAQIBVgKIAAgQgAiTFAIAAAPIBVgJIAAgPgAkBDFIBKgJIAADHIgcADIAAgPIgSACIAAAYIgcADgAjlDeIAAB+IASgCIAAh9gAAqELIgKASIgQgcQAOgbAKgcQAJgdAHgdIAbAGIgGAXIgIAXIAADEIgbADgABNFjIASgFIARgFIAAgiIgfADIAAgdIAfgDIAAgdIAcgDIAAAcIAggDIAAAdIggADIAAAdIASgGIARgGIADAZIgrASQgXAJgZAHgADLF3QgIAAgGgCIgEgeIANACIAOgBIADAAIABgEIABgFIABgIIAAjIIAcgDIAADPQAAALgCAIQgBAIgDAEQgEAFgFADQgGAEgJABIgHAAIgGAAgAEqFVQAPgCANgEQALgEAKgFIgFgCIgEgBIgDAGIgZgNIAGgIIAFgJIgZADIAAgZIAmgEIACgEIACgEIgkAEIAAg2IAxgGIAAgGIguAFIAAgeIgKABIAAgWIAKgBIAAgeIAugFIAAgKIAbgDIAAAKIAtgFIAAAeIAKgBIAAAVIgKABIAAAfIgtAFIAAAGIAtgFQAFgKADgLIAJgXQALgeAFgbIAbAGIgDAQIgFAQIA0gGIAAAdIgIABQgDAfgFAaQgFAbgIAWIgBACIgBACQAIAMAIAKIATARIgTAhIgSgSQgHgKgHgKQgHAMgJALIgUAVIgSgYQALgKAKgNQAKgNAHgPQgKgYgHghIgDAGIgDAFIgPgKIAAAkIg8AGIgBAFIgBADIBIgIIAAAZIgYADIgHAPIgHAMIALAGIALAGIgOAdIgPgKIgPgIQgMAJgSAHQgSAIgXAFgAFhEnIgBADIgBABIALAEIAMADIAEgHIAFgHgAFIDqIAAAJIAXgDIAAgIgAHSCoIgBACIAAABIgBAFIgBAEIAHAeIAKAcQAEgQADgSIAFgngAF6DlIAAAIIAXgDIAAgIgAFKCvIAAAGIAVgCIAAgGgAF6CpIAAAHIAVgDIAAgGgAFKCTIAAAGIAVgCIAAgHgAF6CNIAAAHIAVgDIAAgGgAC0CmIAcgDIAACbIgcAEgAinCuICAgPIAABvIiAAPgAiMDvIAAAPIBJgIIAAgPgAiMDHIAAANIBJgIIAAgNgABNDiIAHgCIAGgBIAFgMIADgNIAEgMIADgMIgTACIAAgcIBYgJIAAAbIgpAFIgDAMIgEAOIgDAJIgCAJIAIgDIAJgCIgEgIIgDgHIAYgPQAHANAFAOIAKAcIgbAPIgCgHIgCgHIgfAKIgiAKgAlKAzIEiggIAAA8IkiAhgAoDlUIChgSIAAGfIg7AGIAAgkIgrAFIAABBIg7AHgAnIkeIAAECIArgFIAAkCgAAsAiQAUgTAQgWQARgWANgZIAHgMIAGgNIgPgLIgNgMIgHAaIg4gHQALgwAKg0QAKg0AIg2IgnAEIAAg9IAvgFIAGgsIAFgtIA7ADIgGApIgFAmIBcgKQgCA1gFAzQgGAygKAvIgHAiIgIAeIAWAUIAXAWIgrA2IgOgQIgOgPIgFAIIgEAHQgQAdgUAZQgVAagXAXgACBkoIgKBEIgLA8IAUAOIATAOIACgNIAEgPQAIgiAEghQAFghACghgADXgJIAlgEIAAmlIDjgZIAAGkIAkgEIAABAIksAigAE5hcIAABIIBpgMIAAhIgAE5jsIAABOIBpgMIAAhOgAE5l5IAABMIBpgMIAAhMgAjjiqQgSAggTAdQgUAcgUAZIgugvQAagdAWghQAXgiATgmIAagzIAWguIhqAMIAAg9IENgeIAAA8IhiALIgJAYIgKAYIAAAyIApglQAXAfAVAmQAXAmAVArIg0AyQgRglgTgjQgUgkgVgjIAADvIg9AHg");
	this.shape.setTransform(121.4,19.6,0.952,0.952);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(47.5,-51.5,151.8,135.8), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjWAPIAAgFIARAAIAAAGQAAAGAGAAQAFAAABgFQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQgBgDgNgHQgNgGgBgHIAAgJQACgNAUAAQAUAAAAAPIAAAFIgPAAIAAgEQAAgGgGABQgEAAgBADIAAAEQAAADANAHQANAGABAGIAAALQgCAOgTAAQgXAAAAgSgAgOAPIAAgFIAPAAIAAAGQAAAGAHAAQAEAAABgFIAAgEQgBgDgMgHQgMgGgBgHIgBgIQADgNASAAQAVAAgBAOIAAAFIgPAAIAAgEQAAgFgFAAQgFgBgBAFIAAADQABACANAIQAMAGABAGIAAAKQgBAOgUABQgVAAAAgSgAArARIAAgvIAPAAIAAAtIABACQAAAEAFAAQAFAAACgEIAAgvIAPAAIAAAvQgBAPgVAAQgTAAgCgPgACrAQIAAgDIAAgZIAAgFQACgOATAAQAVAAABAOIAAAFIAAACIgQAAIAAgGQABgEgHAAQgFAAAAAEIgBADIAAAdQABAFAFAAQAHAAgBgFIABgCIAAgJIgHAAIAAgIIAXAAIAAAQIgBADQgBAPgVABQgTgBgCgPgAgsAfIgBg5IgKA5IgQAAIgKg5IgBA5IgPAAIABg9IAZAAIAIAvIAIgvIAYAAIACA9gAh+AfIgIg5IgJA5IgRAAIAMg9IAbAAIAMA9gACFAeIgQgyIABAyIgPAAIAAg8IAXAAIAPAwIgCgwIAPAAIAAA8g");
	this.shape.setTransform(35.5,5.5,1.655,1.655);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0.1,0,71,11), null);


(lib.元件62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件64();
	this.instance.parent = this;
	this.instance.setTransform(72.2,2.3,1,1,0,0,0,7.8,6.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("AmOCSIA6gHQgFgNgHgMIATgMIgoAFIgBhMQgNAIgLAFIgKgaQAVgKATgPQgJgKgOgLIAbgYIAYATQAMgOANgUIhQAKIAAgfIB2gNIAAAIIAJALQAVgLARgSIAXASQgRARgVAOIAOALQATgQAPgTIAYASQgPATgSAPQATAMAUAJIgVAfIgOgIIABBNIgpAFIAYAEIgPAfIA/gIIABAhIjlAagAlCBlQAIALAGAOIgVAMIA9gHIAOgmgAlXAwIAAAXIBwgMIAAgYgAlMgBIgVASICJgQIgZgSIAAAIIhTAJIAAgIgAkwggIAogFIgWgVQgKAQgIAKgAh0BsIAmgKIgBhEIghAEIAAggIAhgDIgBgTIgSACIAAgTIgGAGIgWgWQARgSALgTQALgTAIgWIAdAGIgDAIQAYAMARAPIgTAeQgRgPgRgMIgHAMQgIAPgIAJIA8gHIABAgIgXADIAAATIAfgEIABAfIggAEIABA+IAfgKIABAGQAVgWAQgZIARARQgUAlgXAVIgIgJIAAAEQgsASgvAOgAATCBIgHggQAKADAJgCQAFAAACgEQACgGAAgKIgBhcIgzAGIAAgcIBHgIIAEgQIgrAFIgCAKIgbgCIAWhcIAcABIgDALIBIgIIgXBXIAigEIAAAdIg3AGIAAAcIAHALQAMgRAHgTIAYAMQgOAcgOASQAQASAVAKIgOAgQgPgIgPgQQgHgIgHgLIAAAXQAAAYgFAJQgIALgTACIgHAAIgJgBgAAfhjIgEARIAqgFIAEgRgACkBPIAfgUIAAg7IgeACIAAggIA7gHIABBXQAKAHALADIgLgbQAhgRARgXQAGgLAEgMIg9AHIgBghIBCgIIAAgDIAAgaIg5AGIgBghIAjgEQgHgNgKgMIAagWQANAPAIARIgRAOIAjgEQAJgXAHgZIAjAGQgIAVgJARIAhgEIAAAhIg9AHIAAAdIBHgIIABAhIg/AHQADAJAGAGQAHAKAOAIQANAGATAGIgPAjQgVgGgVgQQgPgMgJgPQgFAKgGAJQgWAcgjASQAGACAFgBQAOABBEgIQAmgEAagJQgJATgEAWIhPAJQgqAFgagEQgSgEgSgPIgbAnQgMgVgKgMgAh3A2IAbgMQAGASAFAXIgbANQgEgYgHgSgAguBHQAEgVACgTIAcAEQgDAWgFATgAgJALIAUgQQALANAFAPIgYASQgEgOgIgQgACkhJIAWgcQAQAIAPANIgVAfQgPgOgRgKgAC1iBIAXgdQAQAJAPANIgUAhQgRgRgRgJg");
	this.shape.setTransform(40.9,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62, new cjs.Rectangle(0,-4,81.8,52), null);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.元件60();
	this.instance.parent = this;
	this.instance.setTransform(121.1,214.1,1,0.289,0,0,0,168.8,34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.man();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件57, new cjs.Rectangle(-47.7,0,337.7,224.1), null);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.元件58();
	this.instance.parent = this;
	this.instance.setTransform(33.2,199.9,1,1,0,0,0,75.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.man1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件56, new cjs.Rectangle(-42.5,0,160.5,213), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件49();
	this.instance.parent = this;
	this.instance.setTransform(300,59,1,1,0,0,0,300,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(161.6,-23.5,252.4,142.4);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件39();
	this.instance.parent = this;
	this.instance.setTransform(71,20,1,1,0,0,0,71,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件43, new cjs.Rectangle(29,0,111,40), null);


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件38();
	this.instance.parent = this;
	this.instance.setTransform(21.5,21.5,1,1,0,0,0,21.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件42, new cjs.Rectangle(0,0,43,43), null);


(lib.元件40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 38
	this.instance = new lib.元件42();
	this.instance.parent = this;
	this.instance.setTransform(84.8,55.6,1,1,41.5,0,0,21.6,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:86.2,y:60.1},5,cjs.Ease.quadInOut).to({x:84.8,y:55.6},5,cjs.Ease.quadInOut).wait(1));

	// 圖層 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AshDvIAAndIZDAAIAAHdg");
	mask.setTransform(61.8,16.1);

	// 元件 39
	this.instance_1 = new lib.元件43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74,23,1,1,0,0,0,71,20);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:71,y:20},5,cjs.Ease.quadInOut).to({x:74,y:23},5,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32,3,110,82.9);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.元件62();
	this.instance.parent = this;
	this.instance.setTransform(47,42.9,1.306,1.306,0,0,0,46,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 4
	this.instance_1 = new lib.元件63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.3,86.1,0.746,0.767,0,0,0.7,81.8,17.1);

	this.instance_2 = new lib.元件61();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40.1,-10.7,1.255,1.255,0,0,0,42.6,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(-26.7,-25.5,206.3,125.2), null);


(lib.元件24複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(151.2,-89.5,1,1,-146.5,0,0,32.3,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(106.4,-39.9,1,1,-30,0,0,8.5,9.5);

	this.instance_2 = new lib.元件30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(85.8,-26.5,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(13));

	// 元件 26
	this.instance_3 = new lib.元件15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-58.7,104.8,0.661,0.661,15,0,0,31.6,49.1);

	this.instance_4 = new lib.元件31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(125,-37.1,1,1,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-99.3,268.1,241);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(94,186.8,1,1,0,0,0,32.3,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.7,110.8,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// 元件 26
	this.instance_2 = new lib.元件31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.8,-23.9,1,1,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.7,-43.5,107.8,235);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件22, new cjs.Rectangle(0,0,79,78), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層 1
	this.instance = new lib.補間動畫2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(41.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(0,0,83,83), null);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.phone.gotoAndPlay('play');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(206));

	// 圖層 5
	this.instance = new lib.元件59();
	this.instance.parent = this;
	this.instance.setTransform(115.6,11.9,0.323,0.323,0,0,0,124.2,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({alpha:0},11).to({_off:true},1).wait(202));

	// logo
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.3,10.7,0.796,0.796,0,0,0,35.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(255));

	// t42.png
	this.instance_2 = new lib.元件34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(103.6,115.3,1.042,1.063,0,0,0,61.6,29.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:false},0).to({regY:29.5,y:106.7},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_3 = new lib.元件53();
	this.instance_3.parent = this;
	this.instance_3.setTransform(208.3,229.6,1.304,1.304,0,0,0,111.1,29.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(102).to({_off:false},0).to({regY:29.9,y:219.3,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_4 = new lib.元件40();
	this.instance_4.parent = this;
	this.instance_4.setTransform(81.8,546.9,1.063,1.063,0,0,0,86,24.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(104).to({_off:false},0).to({y:538.4,alpha:1},9,cjs.Ease.cubicOut).wait(142));

	// 圖層 6
	this.instance_5 = new lib.元件57();
	this.instance_5.parent = this;
	this.instance_5.setTransform(118.7,419.2,0.821,0.821,0,0,0,122,112.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).to({x:92.5,alpha:1},7,cjs.Ease.get(1)).wait(150));

	// 圖層 7
	this.instance_6 = new lib.補間動畫6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(9.5,248.5,1.063,1.063,4.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).to({regX:0.1,regY:0.1,x:19.1,y:326.2,alpha:1},7,cjs.Ease.get(1)).wait(150));

	// ttt2.png
	this.instance_7 = new lib.元件47();
	this.instance_7.parent = this;
	this.instance_7.setTransform(117.2,164,0.158,0.158,0,0,0,186.1,50.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).to({regY:50.8,scaleX:0.43,scaleY:0.43,x:115.5,y:152.9,alpha:1},5,cjs.Ease.quadInOut).to({regX:186,regY:50.6,scaleX:0.38,scaleY:0.38,x:115.6,y:153.7},3,cjs.Ease.quadInOut).wait(30).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// ttt1.png
	this.instance_8 = new lib.元件48();
	this.instance_8.parent = this;
	this.instance_8.setTransform(87.1,106.3,0.68,0.68,0,0,0,300,59.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).to({regX:300.1,scaleX:0.45,scaleY:0.45,y:113.3},5,cjs.Ease.quadInOut).to({scaleX:0.46,scaleY:0.46,y:112.7},3,cjs.Ease.quadInOut).wait(34).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// 圖層 19
	this.instance_9 = new lib.元件24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(82.2,316.8,1.104,1.104,0,0,0,118.5,40.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({alpha:1},11).wait(19).to({alpha:0},7).to({_off:true},1).wait(158));

	// 元件 5
	this.instance_10 = new lib.元件51();
	this.instance_10.parent = this;
	this.instance_10.setTransform(74.4,553,1.104,1.104,0,0,0,150,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40).to({_off:false},0).to({regY:125.1,scaleX:0.77,scaleY:0.77,x:74.5,y:344.5},11,cjs.Ease.quadInOut).to({scaleX:0.76,scaleY:0.76,x:74.4,y:341.6},1).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// m2.png
	this.w2 = new lib.元件20();
	this.w2.parent = this;
	this.w2.setTransform(173.1,558.2,1.464,1.464,0,0,0,41.6,41.6);
	this.w2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(40).to({_off:false},0).to({scaleX:0.87,scaleY:0.87,x:105.7,y:454.6},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// m1.png
	this.instance_11 = new lib.元件22();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-2.6,612.1,1.464,1.464,0,0,0,39.5,39);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({_off:false},0).to({regY:39.1,scaleX:0.87,scaleY:0.87,x:68.6,y:520.2},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// 圖層 2
	this.instance_12 = new lib.元件24複製();
	this.instance_12.parent = this;
	this.instance_12.setTransform(75.6,321.6,0.838,0.838,0,0,0,118.4,40.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).to({scaleX:1.28,scaleY:1.28,x:75.5,alpha:1},9,cjs.Ease.quadInOut).to({regY:40.6,scaleX:1.15,scaleY:1.15,x:75.6,y:321.7},5,cjs.Ease.quadInOut).wait(18).to({regX:118.6,scaleX:1.01,scaleY:1.01,x:76.4,y:328.4,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(206));

	// 圖層 3
	this.instance_13 = new lib.元件56();
	this.instance_13.parent = this;
	this.instance_13.setTransform(85.3,389.3,1.147,1.147,0,0,0,59,106.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY:106.6,y:377.9,alpha:1},9,cjs.Ease.get(1)).wait(29).to({regX:59.1,scaleX:1.01,scaleY:1.01,x:84.8,y:377.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(206));

	// t1.png
	this.instance_14 = new lib.元件2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(78.8,128.7,1.961,1.961,0,0,0,118.5,26.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({scaleX:1.09,scaleY:1.09,x:78.7,y:134.3},8,cjs.Ease.quadInOut).to({regY:26.1,scaleX:1.17,scaleY:1.17,y:133.3},5,cjs.Ease.quadInOut).to({regY:26,scaleX:1.15,scaleY:1.15,y:133.5},4,cjs.Ease.quadInOut).wait(17).to({regX:118.4,regY:26.1,scaleX:0.85,scaleY:0.85,x:78.6,y:137,alpha:0},10,cjs.Ease.cubicIn).to({_off:true},1).wait(206));

	// bg
	this.instance_15 = new lib.元件55();
	this.instance_15.parent = this;
	this.instance_15.setTransform(80,300,0.533,2.4,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(255));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.9,300,332.2,600);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/160x600_atlas_.png?1540890227895", id:"160x600_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3C2BB1652FB40F42ABABBE896AD6B230'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;