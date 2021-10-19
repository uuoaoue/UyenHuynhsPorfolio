class MyImage {
  constructor(
    _id,
    _imageSource,
    _imageXOrigin,
    _imageYOrigin,
    _imageWidth,
    _imageHeight,
    _outerShapeFillColor,
    _outerShapeXOrigin,
    _outerShapeYOrigin,
    _outerShapeWidth,
    _outerShapeHeight,
    _innerShapeXOrigin,
    _innerShapeYOrigin,
    _innerShapeWidth,
    _innerShapeHeight,
    _mouth
  ) {
    this.id = _id;
    this.imageSource = _imageSource;
    this.imageXOrigin = _imageXOrigin;
    this.imageYOrigin = _imageYOrigin;
    this.imageWidth = _imageWidth;
    this.imageHeight = _imageHeight;

    //       Outer Shape
    this.outerShapeFillColor = _outerShapeFillColor;
    this.outerShapeXOrigin = _outerShapeXOrigin;
    this.outerShapeYOrigin = _outerShapeYOrigin;
    this.outerShapeWidth = _outerShapeWidth;
    this.outerShapeHeight = _outerShapeHeight;

    //       Inner Shape
    this.innerShapeXOrigin = _innerShapeXOrigin;
    this.innerShapeYOrigin = _innerShapeYOrigin;
    this.innerShapeWidth = _innerShapeWidth;
    this.innerShapeHeight = _innerShapeHeight;

    this.isRunning = false;
    this.oldOuterShapeXOrigin = this.outerShapeXOrigin;
    this.mouth = _mouth;
    this.moveStep = 15;
  }
  getId() {
    return this.id;
  }
  getOuterShapeXOrigin() {
    return this.outerShapeXOrigin;
  }
  setIsRunning(isRunningValue) {
    this.isRunning = isRunningValue;
  }

  display() {
    //outerShape
    fill(this.outerShapeFillColor);
    stroke(255);
    strokeWeight(4);
    rect(
      this.outerShapeXOrigin,
      this.outerShapeYOrigin,
      this.outerShapeWidth,
      this.outerShapeHeight,
      5
    );

    //innerShape
    fill(250);
    stroke(255);
    strokeWeight(4);
    rect(
      this.imageXOrigin,
      this.innerShapeYOrigin,
      this.innerShapeWidth,
      this.innerShapeHeight,
      5
    );

    //image
    image(
      this.imageSource,
      this.imageXOrigin,
      this.imageYOrigin,
      this.imageWidth,
      this.imageHeight
    );

    //
    if (this.mouth) {
      this.mouth.display();
    }
  }

  move(stopPosition) {
    if (
      // If the last step exceed the stop position, then we have to recompute the last step so that it won't exceed stop position
      this.outerShapeXOrigin + this.moveStep >=
      stopPosition
    ) {
      let lastStep = stopPosition - this.outerShapeXOrigin;
      // Move the last step
      this.outerShapeXOrigin = this.outerShapeXOrigin + lastStep;
      this.imageXOrigin = this.imageXOrigin + lastStep;
      if (this.mouth) {
        this.mouth.mouthXPosition = this.mouth.mouthXPosition + lastStep;
      }
      // Stop the running process
      this.isRunning = false;
      this.oldOuterShapeXOrigin = this.outerShapeXOrigin;
    } else {
      this.outerShapeXOrigin = this.outerShapeXOrigin + this.moveStep;
      this.imageXOrigin = this.imageXOrigin + this.moveStep;
      if (this.mouth) {
        this.mouth.mouthXPosition = this.mouth.mouthXPosition + this.moveStep;
      }
    }
  }
}
