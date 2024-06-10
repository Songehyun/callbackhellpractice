function names(word1, word2, word3, word4) {
  a();
  function a() {
    console.log(word1);
    b();
    function b() {
      console.log(word2);
      c();
    }
    function c() {
      console.log(word3);
      d();
    }
    function d() {
      console.log(word4);
    }
  }
}

names("이름", "름이", "도도", "레레");
