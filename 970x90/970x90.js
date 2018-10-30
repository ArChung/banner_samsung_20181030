(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"970x90_atlas_", frames: [[0,478,169,124],[0,0,403,250],[366,440,111,40],[457,80,43,43],[405,80,50,92],[0,252,244,224],[246,440,118,213],[405,0,79,78],[404,252,83,83],[405,221,17,19],[455,174,43,50],[405,174,48,45],[246,252,156,186]]}
];


// symbols:



(lib.向量圖智慧型物件 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btnpng複製 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.man = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.man1 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.mm2 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mm3 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.qwdqwdqwdq = function() {
	this.spriteSheet = ss["970x90_atlas_"];
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
	this.instance.setTransform(-80.8,-101,1,1,-6);

	this.instance_1 = new lib.圖層1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-210.6,-101,1,1,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 圖層 1
	this.instance_2 = new lib.圖層1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-201.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.6,-143.1,556.8,290.8);


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


(lib.元件60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqKAAIAZgCIBICZIghAEIgSglIhCAHIgSApIghADgAqSBfIAqgFIgVgugAoXgLIAegDIAAAzIA2g5IAqgFIhLBOIBPBTIgpAEIg7g+IAABFIgeADgAjnBxIAQgCIAAgrIC6gTIAAAqIAQgBIAAAYIjaAWgAi8BYIAAAUIAagDIAAgTgAiIBTIAAAUIAagDIAAgUgAhUBOIAAATIAcgDIAAgTgAlcB/QgOgEgKgMQgJgLgFgNQgEgPAAgTQAAgRAEgPQAFgQAJgLQAKgNAOgJQANgHASgCQAOgCALACQAMAEAIAFQAIAIAEAKQAEAKABAOIggACQAAgHgDgFQgCgFgDgDQgEgCgFgCQgFgBgIABQgKABgIAFQgIAFgGAJQgJAQAAAWQAAAcAMANQAMAMAZgDIALgCIAMgEIAAggIgmAFIAAgdIBFgHIAABPQgYAQglAEIgKABQgMAAgKgEgABtBkIgFgeIATADQAKAAAJgBQAEAAACgDQABgDAAgGIAAhCQgLAPgMAOQgMAOgNAMQgWASgTAMQgTANgPAIIgQgZQAQgIARgLQARgLARgOIAWgTIASgTIg6AGIgEAMIgDALIgegEQAIgSAGgWQAGgWAEgXIAeAAIgFAUIgEASIBSgIIAAg1Ih4ANIAAgbIDHgVIAAAbIgyAGIAAA0IA1gGIAAAcIg1AGIAABJQAAALgCAHQgCAHgEADQgEAFgHACQgHADgKABIgRACIgQgCgAFjAYQgOAXgUATIgRgVIAOgNIAPgTIAJgMIAHgLIgaACIAAhLIAggEIAAgLIghAEIAAgaIAhgEIAAgSIAYgDIAAATIAhgDIAAAaIghADIAAAKIAggDIAABMIggAEIAAADIASAKIAQAOIgSAXIgIgHIgIgIIAAA1IgYADgAFbg9IAAAZIAIgBIAAgZgAF7hAIAAAZIAIgBIAAgZgAGrBDIgFgcIAKABIALgBIACAAIACgEIABgFIAAgIIAAitIAagDIAAC0QAAALgCAHQgBAHgDAEQgDAGgFACQgFADgIABIgLABIgJgBgAjegnIBogLIAAAWIgfAEIAAAGIAggDIAAAsIggADIAAAHIAhgDIAAAWIhqALgAjEAgIAAAGIAXgDIAAgGgAjEAGIAAAHIA4gHIAAgGgAjEgTIAAAHIAXgDIAAgGgAEEh3IA6gGIAACcIgiADIAAARIgYADgAEchgIAABpIAKgBIAAhpgAI9AoQAHgNAFgOIAKgfQAHgjABg7IAbgDQAAAfgCAbQgDAZgFAWQgDAQgGARQgGAQgHANgAKpADQgHgUgEgVQgFgVgDgZQgEgZgBgcIgzAEIAAgbIBOgIQAAAgADAcQACAcAGAXQAEAVAHATQAHATAJATIgZAVQgJgUgHgTgAhgAQIBMgIIAAAYIhMAIgAH5iMIBMgIIAACXIgwAEIAAANIgcADgAIVh1IAABiIAUgBIAAhjgAGhh3IAZgDIAACJIgZADgAhzAAIAIgMIAGgOIAGgNIAEgNIAZAFIgCAHIgCAFIA3gFIAAAZIhBAHQgGAMgHAKgAiyg0IgzAFIAAgYIAzgFIAAgKIAbgEIAAAKIA3gFIAAgKIAbgDIAAAKIA1gFIAAAYIg1AFIAAAHIgbACIAAgGIg3AGIAAAGIgbADg");
	this.shape.setTransform(72.2,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件60, new cjs.Rectangle(0,0,144.5,33.8), null);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbC3IAnheIhZjLIA1AAIA8CRIA5iRIAzAAIh4EpgAo9BMQgjghABgxQgBgzAiggQAegdAsgBQAVAAASAJQASAHAMAPIAAgaIAyAAIAADXIgyAAIAAgdQgMAQgTAIQgSAKgVgBQgqAAgegdgAocg2QgTATAAAcQAAAcATATQAUAUAbAAQAcAAASgUQATgTAAgcQAAgbgTgUQgSgTgcAAQgbAAgUATgAuPBMQghghgBgxQABg0AggfQAfgdAsgBQAVAAASAJQATAHALAPIAAgaIAyAAIAADXIgyAAIAAgdQgLAQgTAIQgTAKgVgBQgpAAgggdgAttg2QgSATAAAcQAAAcASATQATAUAcAAQAcAAASgUQATgTAAgcQAAgbgTgUQgSgTgcAAQgcAAgTATgAywBAQgmgoAAg4QAAg6AngoQAngpA8AAQApABAgASQAgATASAgIgtAaQgagvg0AAQglAAgaAbQgZAZAAAmQAAAlAZAaQAaAaAnAAQAeAAAUgQQAVgQAHgaIhWAAIAAgwICMAAIAAAUQAAA4gkAmQglAog7AAQg+ABgogqgARBBoIA8heQgJADgHAAQgkAAgZgZQgagbAAgnQAAgpAcgaQAbgZApgBQAqABAcAaQAbAbAAAmQAAAogUAfIhHBwgARWhvQgOAOAAAUQAAATAOAOQAOAOATAAQAUAAANgOQAOgOAAgUQAAgTgOgOQgOgPgTAAQgTAAgOAPgANiBeQgVgKgPgOQgOgOgKgUQgHgUgBgVQAAgXAJgUQAJgUAPgPQAOgNAWgKQAVgJAXAAQAYABAVAHQATAIAQAOQAPAPAIASQAIATAAAXIAAAQIiwAAQAFAXASAOQARAPAbAAQAUgBAQgJQAQgLAIgSIAoAYQgNAbgZAQQgZAQglAAQgagBgVgHgANog9QgRALgGAQIB6AAQgEgRgRgKQgQgKgXAAQgWABgRAJgAMIBmQgaAAgQgFQgRgFgKgKQgLgLgDgRQgEgRAAgaIAAhRIglAAIAAgsIAlAAIAAghIAygjIAABEIAsAAIAAAsIgsAAIAABQQAAAOACAKQABAIAEAEQAFAGAJABIAXABIAAAwgAHoBeQgUgJgQgPQgPgOgJgVQgJgTAAgVQAAgXAJgUQAJgTAPgQQAQgPAUgIQAVgJAXAAQAWAAAVAJQAWAJAOAOQAQAPAIAUQAJAUAAAXQAAAVgJATQgJAVgPAOQgOAOgWAKQgTAHgYABQgYgBgUgHgAH7g/QgLAFgJAJQgIAHgGAMQgEAMAAANQAAALAEALQAGAMAIAHQAJAJALAFQAMAFANgBQANABALgFQAMgFAJgJQAIgHAFgMQAFgLAAgLQAAgNgFgMQgFgLgIgIQgJgJgMgFQgKgEgOAAQgOAAgLAEgAFQBmIh5i+IAAC+IgxAAIAAkNIA4AAIB1C2IAAi2IAzAAIAAENgAjKBlIg1hIIg0BIIg8AAIBRhtIhOhqIA9AAIAwBEIAyhEIA6AAIhNBqIBTBtgAqsBlIAAkRIAzAAIAAERg");
	this.shape.setTransform(315,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(191.1,0,247.8,36.5), null);


(lib.元件58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(91.8,30.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件58, new cjs.Rectangle(0,1.4,183.7,58.5), null);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件57, new cjs.Rectangle(0,0,244,224), null);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.man1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件56, new cjs.Rectangle(0,0,118,213), null);


(lib.元件55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#219CD8").s().p("EgglATiMAAAgnDMBBLAAAMAAAAnDg");
	this.shape.setTransform(208.6,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件55, new cjs.Rectangle(0,0,417.2,250), null);


(lib.元件53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.向量圖智慧型物件();
	this.instance.parent = this;
	this.instance.setTransform(-26,17,0.671,0.671);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(-30.8,17,118.3,102.2), null);


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
	this.shape.setTransform(301.3,49.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(56.9,-17.7,494.9,193), null);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgxtAFiIgMAQIgLAPIgzgrQAngyAhg2QAgg1Aag8Ih7ALIAAhJIBDgGIAAhTIBKgHIAABTIA7gFIAAAeIASgZIAPgYQAKgUAJgSIAPgmIBFAJIgDANIgEAKIDxgXIAABEIkQAZIgGAKIgDAGIgDAGID9gYIAADaIipAPIgGANIgGAMIC4gRIAABCQgMAWgQATQgPATgSARQAbAIAeAGQAdAFAfAEIghBMQgtgFgpgLQgqgJglgPQggATgmARQgmARgrAQIgfhBQA+gVAugYQgXgPgUgWIgaAaIgcAXIgsgzQAYgSAUgTQAVgVARgVIAQgXQAIgKAFgLIgnAEIAAiwIgMAPIgLAOIglgkQgMAigOAgQgOAggRAfIAIAFIAHAGIAPgYQAHgMAGgOIAzAWQgJATgJAPQgIAQgJAMIASAPQAJAHAIAIIgqA9QgOgRgPgPIgegdIAAECIhCAGgEgtRAF0IAaATIAcAPQAOgLALgKIAVgWgEgtoADPIAAASICLgOIAAgSgEgtoACFIAAAPICLgMIAAgQgEgmlADfICggPIADgMIAEgMIgkADIAAhIIgTAQIgUAQQggAYgcASQgdASgaAMIghg5QAWgLAagPQAbgRAdgUQAxgjAigkIAAggIgZAXIgbAXQgeAXgaASQgbARgYAMIgig5QAWgKAYgQQAYgPAbgUIALgIIAKgJIhtAKIAAhEID9gXIAAEEIA2AMIgHARIgGAPIDSgTIAAEjIhHAHIAAgTIk0AcIAAATIhIAHgEgldAGDIAAAiIE0gdIAAgigEgldAEgIAAAeIE0gcIAAgfgA8VGMQAYgXAUgaQAUgZARgdIAIgNIAIgQIgSgNIgRgPIgIAgIhGgKQAOg5ANg8QAMg8AKg/IgxAEIAAhGIA7gFIAHg0IAGg0IBIAEIgHAwIgGAtIBxgKQgCA+gHA5QgHA7gLA3IgKAnIgKAjIAbAZIAcAaIg0A+IgRgTIgSgTIgGAKIgEAJQgVAhgYAfQgZAdgcAagA6tALIgNBPIgNBHIAYAPIAXARIAFgPIAEgRQAJgnAGgnQAFgnADgmgA5DFbIAugEIAAnqIEVgZIAAHpIAsgDIAABMIlvAigA3KD9IAABTICAgLIAAhUgA3KBUIAABcICAgMIAAhbgA3KhQIAABYICAgLIAAhYgAxVh6IA7gFIAMgyIAJgxIBNALIgJAqIgKAnIBigJIAAB3QAMgWALgYQALgYAJgbQAOghAKghQALggAHgeIBMARIgJAmIgLAlIC5gRQAADBgGBwQgHBwgMAgQgJAigWATQgXATgkAEQgTABgTAAIglgFIgPhQQAbADAXACQAXABARgCQAKAAAHgJQAHgJADgQQAFgdADhSQADhTAAiIIiHANQgNAlgQAgQgPAfgQAbIg2gkIAAE4IhKAGIAAgkIhYAIIAAA+IhKAHgAwLCAIAABlIBYgIIAAhmgAwLg3IAABvIBYgIIAAhvgAk7hPIhPAHIAAhJIDfgVIAABJIhIAHIAAGJIhIAGgAgZB9IgzAEIAAAiIhLAHIAAmEIB+gMIAAhWIBKgGIAABWIB9gMIAAGEIhKAGIAAghIgzAFIAACiIhKAHgAhMgMIAABGIAzgFIAAhFgAAxgXIAABFIAzgFIAAhFgAhMiXIAABBIAzgEIAAhCgAAxiiIAABBIAzgFIAAhBgAmhDuQAGgSAFgVQAFgWADgXQADgWACgYQACgXAAgYIAAhgIBCgHIAABhQAAAkgDAhQgDAhgGAfQgFAbgHAXQgHAWgHASgAFKj5ICVgNIAAhkIBKgHIAABkIBVgIIAAhjIBKgIIAABkICYgNIAAH5IhLAHIAAgaImBAkIAAAaIhKAGgAGUARIAACGIBLgHIAAiGgAIpADIAACFIBVgHIAAiFgALIgKIAACEIBNgHIAAiEgAGUi1IAAB+IBLgHIAAh+gAIpjEIAAB+IBVgHIAAh+gALIjSIAAB+IBNgHIAAh+gAjmgzIA9gFIAAEWIg9AFgAsCBuQgLglgPghIBIgeQAQAgANAlQANAjAJApIhPAiQgHgqgLglgEgi5AB9QAsgUA5gqQAXgRAVgRQAUgQARgSIAAgdIgdAbQgQAMgRANQgfAXgcARQgcASgZAMIgig6QAXgKAZgQQAagOAcgUIALgHIAKgIIhrAKIAAhKIEGgYIAAEiIhGAGIAAhSIgSAQIgUAPQgeAYgcARQgcARgYAMgAUAB/QAKgWAHgZQAHgaAFgdQAFgdADgqQADgpABg2IBFgGIgBBCIgDA6QAMAPANALIAAi6IhwALIAAhHIBrgKIAAg8IhXAIIAAhHIBXgJIAAg/IBIgGIAAA/IBAgGIAABIIhAAFIAAA8IBHgHIAABHIhCAHIAABGIBKgHIAABKIhKAHIAABYIAbAGIAcADQAlAAAwgDQAxgDA9gFQAngDAjgGQAkgEAegIIgXBXIh1ALQhHAGg1ACQg2ABgkgBQgegBgagHQgagGgWgKQgMgGgKgHQgLgHgJgJQgFAagHAVQgGAXgIAUgEAgdgCgIgnAIIgpAIIgNhEIAQgCIAQgCIAdgiIAaghIgtgcIgugcIApg5IAIAEIAIAEQAUgfASgfQASgfAPgfIBFAaQgWAlgVAfIgnA8IALAHIAMAEQAfgsAagrIBFAZQgjAyghAsQghArgfAmIAdgFIAagFIgEgPIgEgQIA+gYQAJAcAHAgQAHAfAFAjIhAAbIgDgUIgDgSIgRAFIgSADIAAELIhDAGgEAjdgDGIEegaIAAEVIhLAGIAAgfIiIAMIAAAgIhLAHgEAkogCGIAABrICIgNIAAhrgAe2AuIAPhQIALhQIBBAKIgOBZIgMBIgEAqqgAfQA0gqAmgvQAngtAZgyQAohSAGhVIi+ARIAAhPIC+gRIAAhuIBQgIIAABvID2gXQAACXgEBeQgFBfgIAnQgGAcgJAUQgKASgMAMQgPAKgTAGQgTAHgXACQgZACgYgBQgXAAgYgEIgShUQAdAFAcACQAdABAcgCQAWgCAJgOQAIgNAEgqQAEgpACg8QACg+AAhRIioAPQgDA/gSA7QgSA7ggA3QghA4gqAvQgqAvgyAlgAYsi8IEBgYIAADUIkBAXgAZ1h8IAABHIBxgKIAAhHgEAh7gA2QgGgkgIghIA9gVQAJAjAHAkQAGAjAEAkIhBAVQgDglgFgkgAl2kKIC2gQIAABKIi2AQgAYTkFQARgLAOgNQANgNAHgQQAHgMAEgRQAFgRACgVIgwAFIAAhHIESgaQAABigGA2QgGA3gLALQgIANgQAHQgQAHgVACIgaABIgcgBIgQhLIAhADQAQABANgBQAEAAADgDQACgCACgGQACgEACgWIADg8IhPAHQgEAkgHAbQgHAbgLAVQgbAzgqAXgEAjtgEjIgNAMIgNALIgzgwQAegbAZgaQAZgbATgaQAsg5Adg8IBHAOIgHAQIgHAPQAkAnAlAcQAuAkAtAVIgqBMIgNgGIgNgJIAAAkIj4AXgEAlSgGYQgGAKgIAKIgYAfIgaAeICmgOIgKgIIgJgJIgkgiIgigkIgNAUg");
	this.shape.setTransform(194.9,41.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件47, new cjs.Rectangle(-138.5,-30.4,676.8,212.6), null);


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
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(118.3,37.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(8.8,4.4,221,66.4), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjWAPIAAgFIARAAIAAAGQAAAGAGAAQAFAAABgFQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQgBgDgNgHQgNgGgBgHIAAgJQACgNAUAAQAUAAAAAPIAAAFIgPAAIAAgEQAAgGgGABQgEAAgBADIAAAEQAAADANAHQANAGABAGIAAALQgCAOgTAAQgXAAAAgSgAgOAPIAAgFIAPAAIAAAGQAAAGAHAAQAEAAABgFIAAgEQgBgDgMgHQgMgGgBgHIgBgIQADgNASAAQAVAAgBAOIAAAFIgPAAIAAgEQAAgFgFAAQgFgBgBAFIAAADQABACANAIQAMAGABAGIAAAKQgBAOgUABQgVAAAAgSgAArARIAAgvIAPAAIAAAtIABACQAAAEAFAAQAFAAACgEIAAgvIAPAAIAAAvQgBAPgVAAQgTAAgCgPgACrAQIAAgDIAAgZIAAgFQACgOATAAQAVAAABAOIAAAFIAAACIgQAAIAAgGQABgEgHAAQgFAAAAAEIgBADIAAAdQABAFAFAAQAHAAgBgFIABgCIAAgJIgHAAIAAgIIAXAAIAAAQIgBADQgBAPgVABQgTgBgCgPgAgsAfIgBg5IgKA5IgQAAIgKg5IgBA5IgPAAIABg9IAZAAIAIAvIAIgvIAYAAIACA9gAh+AfIgIg5IgJA5IgRAAIAMg9IAbAAIAMA9gACFAeIgQgyIABAyIgPAAIAAg8IAXAAIAPAwIgCgwIAPAAIAAA8g");
	this.shape.setTransform(35.5,5.5,1.655,1.655);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0.1,0,71,11), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件49();
	this.instance.parent = this;
	this.instance.setTransform(300,59,1,1,0,0,0,300,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.5,7.8,477.5,83.8);


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
	this.instance.setTransform(150.5,27.5,1,1,0,0,0,21.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:154.5,y:29.9},5,cjs.Ease.quadInOut).to({x:150.5,y:27.5},5,cjs.Ease.quadInOut).wait(1));

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
p.nominalBounds = new cjs.Rectangle(32,3,140,46);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.元件58();
	this.instance.parent = this;
	this.instance.setTransform(-112.6,6.1,1.387,1.387,-1.7,0,0,91.7,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 4
	this.instance_1 = new lib.元件60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.6,-11.1,1.387,1.387,-1.7,0,0,72.3,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(-240.8,-37.3,450.1,104.5), null);


(lib.元件24複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(229.2,3.9,1.295,1.295,-146.5,0,0,32.1,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.1,5.4,1.129,1.129,-30,0,0,8.4,9.5);

	this.instance_2 = new lib.元件30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(43.7,109.5,1.129,1.129,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(13));

	// 元件 26
	this.instance_3 = new lib.元件15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(37.4,51.4,0.747,0.747,15,0,0,31.6,49.2);

	this.instance_4 = new lib.元件31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(196.1,77.2,1.295,1.295,30,0,0,16.6,38.6);

	this.instance_5 = new lib.元件31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(206.2,64.3,1.295,1.295,0,0,0,16.5,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-8.9,268.3,145.3);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(69,42.7,1,1,0,0,0,32.3,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.9,22.4,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// 元件 26
	this.instance_2 = new lib.元件31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(186.5,11.6,1,1,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.4,-8,225.7,55.4);


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
(lib._970x90 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(812.3,14.6,0.474,0.474,0,0,0,124.3,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({alpha:0},11).to({_off:true},1).wait(202));

	// logo
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.4,13,1.167,1.167,0,0,0,35.6,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(255));

	// t42.png
	this.instance_2 = new lib.元件34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(333.3,80.2,1.033,1.07,4.2,0,0,61.6,29.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:false},0).to({regY:29.7,x:348.3,y:81.3},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_3 = new lib.元件53();
	this.instance_3.parent = this;
	this.instance_3.setTransform(613.8,25.7,0.913,0.913,0,0,0,111.2,29.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(102).to({_off:false},0).to({regY:29.6,x:688.6,y:18.5,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_4 = new lib.元件40();
	this.instance_4.parent = this;
	this.instance_4.setTransform(663.7,60.4,1.289,1.289,0,0,0,86,24.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(104).to({_off:false},0).to({regY:24.7,x:747.4,y:50.1,alpha:1},9,cjs.Ease.cubicOut).wait(142));

	// 圖層 6
	this.instance_5 = new lib.元件57();
	this.instance_5.parent = this;
	this.instance_5.setTransform(856.3,49.4,0.439,0.439,0,0,0,122.2,112.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).to({regX:122.4,x:917,alpha:1},7,cjs.Ease.get(1)).wait(150));

	// 圖層 7
	this.instance_6 = new lib.補間動畫6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(645.6,127.5,1.452,1.452,4.7,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).to({regX:0.2,x:797,y:126.9,alpha:1},7,cjs.Ease.get(1)).wait(150));

	// ttt2.png
	this.instance_7 = new lib.元件47();
	this.instance_7.parent = this;
	this.instance_7.setTransform(413.7,80.9,0.176,0.185,1.9,0,0,187.8,51.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).to({regX:187,regY:51.3,scaleX:0.48,scaleY:0.51,x:412.2,y:67.8,alpha:1},5,cjs.Ease.quadInOut).to({regY:50.9,scaleX:0.43,scaleY:0.45,x:412.4,y:68.7},3,cjs.Ease.quadInOut).wait(30).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// ttt1.png
	this.instance_8 = new lib.元件48();
	this.instance_8.parent = this;
	this.instance_8.setTransform(410.5,22.5,0.761,0.796,1.9,0,0,299.8,58.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).to({regX:300.8,regY:59,scaleX:0.5,scaleY:0.52,x:410.1,y:30.7},5,cjs.Ease.quadInOut).to({regX:300.6,regY:58.9,scaleX:0.52,scaleY:0.54,y:30.1},3,cjs.Ease.quadInOut).wait(34).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// 圖層 19
	this.instance_9 = new lib.元件24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(661.8,34,0.674,0.674,0,0,0,118.7,40.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({alpha:1},11).wait(19).to({alpha:0},7).to({_off:true},1).wait(158));

	// 元件 5
	this.instance_10 = new lib.元件51();
	this.instance_10.parent = this;
	this.instance_10.setTransform(661.4,178.3,0.674,0.674,0,0,0,150.1,125.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40).to({_off:false},0).to({regX:150.6,regY:125.1,scaleX:0.47,scaleY:0.47,x:661.5,y:51.1},11,cjs.Ease.quadInOut).to({scaleX:0.47,scaleY:0.47,x:661.6,y:49.3},1).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// m2.png
	this.w2 = new lib.元件20();
	this.w2.parent = this;
	this.w2.setTransform(784.8,140.3,1.137,1.137,0,0,0,41.6,41.6);
	this.w2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(40).to({_off:false},0).to({regX:41.7,scaleX:0.67,scaleY:0.67,x:732.5,y:59.9},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// m1.png
	this.instance_11 = new lib.元件22();
	this.instance_11.parent = this;
	this.instance_11.setTransform(542,132.6,1.137,1.137,0,0,0,39.7,39.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({_off:false},0).to({regX:39.9,scaleX:0.67,scaleY:0.67,x:597.3,y:61.2},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// 圖層 2
	this.instance_12 = new lib.元件24複製();
	this.instance_12.parent = this;
	this.instance_12.setTransform(611.1,35.2,0.446,0.446,0,0,0,118.5,40.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).to({regX:118.8,regY:40.6,scaleX:0.68,scaleY:0.68,y:35.1,alpha:1},9,cjs.Ease.quadInOut).to({regX:118.7,regY:40.7,scaleX:0.61,scaleY:0.61},5,cjs.Ease.quadInOut).wait(18).to({regX:118.9,regY:40.6,scaleX:0.54,scaleY:0.54,x:611.5,y:38.7,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(206));

	// 圖層 3
	this.instance_13 = new lib.元件56();
	this.instance_13.parent = this;
	this.instance_13.setTransform(616.3,71.2,0.61,0.61,0,0,0,59.2,106.8);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY:106.6,y:65.1,alpha:1},9,cjs.Ease.get(1)).wait(29).to({regY:106.9,scaleX:0.54,scaleY:0.54,x:616,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(206));

	// t1.png
	this.instance_14 = new lib.元件2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(398.1,27,2.145,2.145,2.4,0,0,118.4,26.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({regX:118.7,regY:25.9,scaleX:1.19,scaleY:1.19,x:397.7,y:32.9},8,cjs.Ease.quadInOut).to({scaleX:1.28,scaleY:1.28,x:397.8,y:31.9},5,cjs.Ease.quadInOut).to({scaleX:1.25,scaleY:1.25,x:397.7,y:32.2},4,cjs.Ease.quadInOut).wait(17).to({regX:118.8,regY:26.2,scaleX:0.93,scaleY:0.93,x:397.6,y:35.9,alpha:0},10,cjs.Ease.cubicIn).to({_off:true},1).wait(206));

	// bg
	this.instance_15 = new lib.元件55();
	this.instance_15.parent = this;
	this.instance_15.setTransform(350.3,44.9,2.335,0.359,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(255));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(464,45,995.3,202.2);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 970,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/970x90_atlas_.png?1540884162256", id:"970x90_atlas_"}
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