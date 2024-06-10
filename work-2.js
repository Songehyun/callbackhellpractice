function homepeople(location, household, allpeople) {
  homenum();
  function homenum() {
    console.log(location + "에는 " + household + "세대가 있습니다.");
    people();
  }
  function people() {
    console.log(
      location + "에는 총" + allpeople + "명의 사람이 살고 있습니다."
    );
    homeinave();
  }
  function homeinave() {
    console.log(
      location +
        "에는 평균적으로 한 세대당" +
        allpeople / household +
        "명의 사람이 살고 있습니다."
    );
  }
}

homepeople("대전", 677835, 1435388);
