class Mouth {
  constructor(_mouthXPosition, _mouthYPosition, _mouthWidth, _mouthHeight, _mouthFromAngle, _mouthToAngle) {
    this.mouthXPosition = _mouthXPosition;
    this.mouthYPosition = _mouthYPosition;
    this.mouthFromAngle = _mouthFromAngle;
    this.mouthToAngle = _mouthToAngle;
    this.mouthWidth = _mouthWidth;
    this.mouthHeight = _mouthHeight;
  }

  display() {
    fill("#800000");
    noStroke();
    arc(
      this.mouthXPosition,
      this.mouthYPosition,
      this.mouthWidth,
      mic.getLevel()*1000,
      this.mouthFromAngle,
      this.mouthToAngle,
      CHORD
    );
  }
}